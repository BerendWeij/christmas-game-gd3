class EntityFactory {

    constructor(){
        this.scene = document.querySelector('a-scene');
    }

    create(type = 'snowBall', position, velocity, duration){
        const speed = 0.2;
        velocity.multiplyScalar(speed);

        const newSnowball = document.createElement('a-sphere');
        newSnowball.setAttribute("radius", 0.15);
        newSnowball.setAttribute("position", `${position.x} ${position.y} ${position.z}`);
        newSnowball.setAttribute("velocity", `velocity:${velocity.x} ${velocity.y} ${velocity.z}`);
        newSnowball.setAttribute("autodestroy", `delay:${duration};`);
        newSnowball.type = "snowball";

        this.scene.emit("newEntitySpawned", newSnowball);

        this.scene.appendChild(newSnowball);

    }

}

const entityFactory = new EntityFactory();