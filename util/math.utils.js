const clamp = (value, min, max) => Math.max(Math.min(value, Math.max(min, max)), Math.min(min, max));
const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomSpherePoint = (radius, centerX = 0, centerY = 0, centerZ = 0) => {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = centerX + (radius * Math.sin(phi) * Math.cos(theta));
    const y = centerY + (radius * Math.sin(phi) * Math.sin(theta));
    const z = centerZ + (radius * Math.cos(phi));
    return {x, y, z};
};

const randomInSpherePoint = (maxRadius, centerX = 0, centerY = 0, centerZ = 0) => {
    const randomRadius = Math.random() * maxRadius;
    return randomSpherePoint(randomRadius, centerX, centerY, centerZ);
};

const randomCirclePoint = radius => {
    const angle = Math.random() * Math.PI * 2;
    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
    }
};

const randomInCirclePoint = radius => {
    const randomRadius = Math.random() * radius;
    return randomCirclePoint(randomRadius);
};