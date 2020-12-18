const toRadian = (angle) => angle *= Math.PI / 180;

const toRadians = (rotation) => {
  rotation.x *= Math.PI / 180;
  rotation.y *= Math.PI / 180;
  rotation.z *= Math.PI / 180;
  return rotation
};

const toDegree = (angle) => angle * 180 / Math.PI;

const toDegrees = (rotation) => {
  rotation.x *= 180 / Math.PI;
  rotation.y *= 180 / Math.PI;
  rotation.z *= 180 / Math.PI;
  return rotation;
};