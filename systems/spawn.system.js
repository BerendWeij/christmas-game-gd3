AFRAME.registerSystem('spawn', {
    schema: {

    },

    init() {
        bind(this, this.spawn);
        this.spawnTime = 3000;
        this.minSpawnTime = 100;
        this.spawnStep = 5;
        this.setTimer();
    },

    setTimer(){
        setTimeout(this.spawn, this.spawnTime);
    },

    spawn(){
        this.spawnTime -= this.spawnStep;
        this.spawnTime = Math.max(this.spawnTime, this.minSpawnTime);
        this.setTimer();
    }

});