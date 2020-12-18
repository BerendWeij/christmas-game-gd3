class EntityFactory {

    constructor(){
        this.scene = document.querySelector('a-scene');
    }

    create(type = 'snowBall'){

        const newEntity = document.createElement('a-sphere');
        newEntity.setAttribute("radius", 0.15);
        newEntity.setAttribute("position", "0 0 -2");
        this.scene.appendChild(newEntity);

    }

}

const entityFactory = new EntityFactory();