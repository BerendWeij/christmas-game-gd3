AFRAME.registerComponent('weapon', {
    schema: {
    },

    init() {
        bind(this, this.onShoot, this.shoot);

        this.el.addEventListener('shoot', this.onShoot);
    },

    onShoot(event){
        const shootPower = event.detail;
        this.shoot(shootPower);
    },

    shoot(shootPower){
        entityFactory.create();
    }

});