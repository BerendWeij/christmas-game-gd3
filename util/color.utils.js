const colorToObject = (colorString) => {
  let color = {};

  colorString = colorString.toLowerCase();
  colorString = colorString.replace(`rgb(`, ``);
  colorString = colorString.replace(`)`, ``);
  colorString = colorString.trim();

  color.r = parseInt( colorString.substr(0, colorString.indexOf(`,`)) );
  colorString = colorString.substr(colorString.indexOf(`,`) + 1);
  color.g = parseInt( colorString.substr(0, colorString.indexOf(`,`)) );
  color.b = parseInt( colorString.substr(colorString.indexOf(`,`) + 1) );

  return color;
}

const colorToRgb = (colorObject) => `rgb(${colorObject.r},${colorObject.g},${colorObject.b})`;

const colorToVec3 = (colorObject) => vec3 = {x: colorObject.r, y: colorObject.g, z: colorObject.b};

const vec3ToColor = (vec3) => color = {r: vec3.x, g: vec3.y, b: vec3.z};

const colorToAttribute = (color) => `${color.r} ${color.g} ${color.b}`;
