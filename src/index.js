const elventShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const test2 = {
  ...elventShieldRecipe,
  leather: 1,
  refinedMoonstone: 3,
};
console.log(test2);
