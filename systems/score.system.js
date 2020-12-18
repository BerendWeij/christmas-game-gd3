AFRAME.registerSystem('score', {
    schema: {},

    init() {
        bind(this, this.onDestroy);

        this.el.addEventListener('destroyed', this.onDestroy);
    },

    onDestroy(){

    }

});