const capitalizeFirstLetter = (str) => {
  const firstCharacter = str.slice(0, 1).toUpperCase();
  const restCharacters = str.slice(1);
  const words = firstCharacter + restCharacters;
  return words.toString();
};

export default capitalizeFirstLetter;
