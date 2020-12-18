AFRAME.registerSystem('score', {
    schema: {},

    init() {
        this.currentScore = 0;
        bind(this, this.onScore);

        this.el.addEventListener('score', this.onScore);

    },

    onScore(){
        this.currentScore++;

        this.el.emit("scoreUpdate", this.currentScore);
        console.log(this.currentScore);
    }

});