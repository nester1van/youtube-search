export const generatorId = () => {
  let date = new Date();
  let time = date.getTime();
  let random = Math.random();
  let id = time + random;
  return id;
};