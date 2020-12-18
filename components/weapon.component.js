AFRAME.registerComponent('weapon', {
    schema: {
    },

    init() {
        bind(this, this.onShoot, this.shoot);

        this.powerToMS = 30;
        this.camera = document.querySelector('a-camera');

        this.el.addEventListener('shoot', this.onShoot);
    },

    onShoot(event){
        const shootPower = event.detail;
        this.shoot(shootPower);
    },

    shoot(shootPower){

        const direction = new THREE.Vector3(0, 0, -1);
        this.camera.object3D.getWorldDirection(direction);
        const spawnPosition = this.camera.object3D.position.clone();
        direction.multiplyScalar(-1);

        const duration = shootPower * this.powerToMS;

        entityFactory.create('snowBall', spawnPosition, direction, duration);
    }

});