AFRAME.registerComponent('clickemitter', {
    schema: {
        event: {type: 'string', default: 'click'},
    },

    init() {
        bind(this, this.onPress, this.onRelease);
        this.isPressing = false;
        this.reset();

        this.el.addEventListener("mousedown", this.onPress)
        this.el.addEventListener("mouseup", this.onRelease)
    },

    reset() {
        this.pressTime = 0;
    },

    increase() {
        this.pressTime++;
    },

    onPress() {
        this.reset();
        this.isPressing = true;
    },

    onRelease() {
        this.isPressing = false;
        const {event} = this.data;
        this.el.emit(event, this.pressTime);
    },

    tick() {
        if (!this.isPressing)
            return;

        this.increase();
    }


});