AFRAME.registerComponent('autodestroy', {
    schema: {
        delay: {type: 'number', default: 100},
    },

    init() {
        bind(this, this.onNewEntity);

        const {delay} = this.data;
        setTimeout(this.onNewEntity, delay);
    },

    onNewEntity(){
        this.el.emit('destroyed', this.el);
        this.el.parentNode.removeChild(this.el);
    }

});