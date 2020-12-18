AFRAME.registerComponent('velocity', {
    schema: {
        velocity: {type: 'vec3'},
    },

    init() {
    },

    tick() {
        const {velocity} = this.data;
        const {position} = this.el.object3D;
        this.el.object3D.position.set(
            position.x + velocity.x,
            position.y + velocity.y,
            position.z + velocity.z
        );
    }


});