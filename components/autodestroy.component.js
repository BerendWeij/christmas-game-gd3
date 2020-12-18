AFRAME.registerComponent('autodestroy', {
    schema: {
        delay: {type: 'number', default: 100},
    },

    init() {
        bind(this, this.onDestroy);

        const {delay} = this.data;
        setTimeout(this.onDestroy, delay);
    },

    onDestroy(){
        this.el.emit('destroyed', this.el);
        this.el.parentNode.removeChild(this.el);
    }

});