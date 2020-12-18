AFRAME.registerSystem('health', {
    schema: {},

    init() {
        bind(this, this.onHit);
        this.health = 10;

        this.el.addEventListener('hit', this.onHit);
    },

    onHit(){
        this.health--;
        if(this.health === 0){
            this.el.emit("death");
            console.warn("je bent dood");
        }
    }

});