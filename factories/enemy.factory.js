class EnemyFactory {

    constructor() {
        this.scene = document.querySelector('a-scene');
        this.center = new THREE.Vector3(0, 0, 0);
    }

    create() {
        const newEnemy = document.createElement('a-gltf-model');
        const speed = 0.1;
        newEnemy.setAttribute("src", "assets/snowman/scene.gltf");
        newEnemy.setAttribute("scale", "0.005 0.005 0.005");

        const randomPoint = randomCirclePoint(30);
        const position = new THREE.Vector3(randomPoint.x, 0, randomPoint.y);

        newEnemy.object3D.position.set(position.x, position.y, position.z);
        newEnemy.object3D.lookAt(this.center);
        const {rotation} = newEnemy.object3D;

        newEnemy.object3D.rotation.set(
            rotation.x,
            rotation.y + THREE.Math.degToRad(90),
            rotation.z
        );

        const velocity = this.center.clone();
        velocity.sub(newEnemy.object3D.position);
        velocity.normalize();
        velocity.multiplyScalar(speed);
        newEnemy.setAttribute("velocity", `velocity:${velocity.x} ${velocity.y} ${velocity.z};`);
        newEnemy.type = "enemy";

        this.scene.emit("newEntitySpawned", newEnemy);


        this.scene.appendChild(newEnemy);

    }

}

const enemyFactory = new EnemyFactory();