AFRAME.registerSystem('collision', {
    schema: {},

    init() {
        bind(this, this.onNewEntity, this.onDestroy);

        this.explosionRadius = 2;

        this.entities = {
            "snowball" : [],
            "enemy": []
        };

        this.el.addEventListener('newEntitySpawned', this.onNewEntity);
        this.el.addEventListener('destroyed', this.onDestroy);
    },

    onDestroy(event){
        const targetSnowball = event.detail;
        if(targetSnowball.type !== "snowball")
            return;

        this.checkHit(targetSnowball);

        const position = targetSnowball.object3D.position;
        const explosion = document.createElement('a-sphere');
        explosion.setAttribute("radius", 0.1);
        explosion.object3D.position.set(
            position.x,
            position.y,
            position.z
        );
        explosion.setAttribute("autodestroy", "delay:200;");
        explosion.setAttribute("opacity", 0.5);
        explosion.setAttribute("animation", "property: radius; to: 2; dur: 100; easing: easeOutSine;");
        this.el.appendChild(explosion);
    },

    onNewEntity(event){
        const newEntity = event.detail;
        this.registerEntity(newEntity);
    },

    checkHit(targetSnowball){
        const {position} = targetSnowball.object3D;
        this.entities.enemy.forEach(enemy => {
            const distance = position.clone();
            distance.sub(enemy.object3D.position);
            const length = Math.abs(distance.length());
            if(length <= this.explosionRadius){
                this.removeEnemy(enemy);
                this.el.emit("score");
            }
        });
    },

    registerEntity(newEntity){
        this.entities[newEntity.type].push(newEntity);
    },

    unRegisterEntity(targetEntity){
        const {type} = targetEntity;
        const index = this.entities[type].find(entity => entity === targetEntity);
        if(index === -1)
            return;

        this.entities[type].splice(index, 1);
    },

    tick(){
        this.entities.enemy.forEach(enemy => {
            const {position} = enemy.object3D;
            if(position.length() <= 1){
                this.el.emit("hit");
                this.removeEnemy(enemy);
            }
        });
    },

    removeEnemy(targetEnemy){
        this.unRegisterEntity(targetEnemy);
        targetEnemy.parentNode.removeChild(targetEnemy);
    }

});