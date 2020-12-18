class EntityFactory {

    constructor(){
        this.scene = document.querySelector('a-scene');
    }

    create(type = 'snowBall', position, velocity, duration){
        const speed = 0.5;
        velocity.multiplyScalar(speed);

        const newEntity = document.createElement('a-sphere');
        newEntity.setAttribute("radius", 0.15);
        newEntity.setAttribute("position", `${position.x} ${position.y} ${position.z}`);
        newEntity.setAttribute("velocity", `velocity:${velocity.x} ${velocity.y} ${velocity.z}`);
        newEntity.setAttribute("autodestroy", `delay:${duration};`);
        this.scene.appendChild(newEntity);

    }

}

const entityFactory = new EntityFactory();