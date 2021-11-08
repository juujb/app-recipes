const CATEGORIES = 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const GLASSES = 'www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
const INGREDIENTS = 'www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export async function fetchDrinkCategories() {
  const request = await fetch(CATEGORIES);
  const data = await request.json();
  return data.drinks;
}

export async function fetchDrinkGlasses() {
  const request = await fetch(GLASSES);
  const data = await request.json();
  return data.drinks;
}

export async function fetchDrinkIngredients() {
  const request = await fetch(INGREDIENTS);
  const data = await request.json();
  return data.drinks;
}

export async function fetchDrinkByIngredients(ingredient) {
  const BYINGREDIENT = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const request = await fetch(BYINGREDIENT);
  const data = await request.json();
  return data.drinks;
}

export async function fetchDrinkByName(name) {
  const BYNAME = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(BYNAME);
  const data = await request.json();
  return data.drinks;
}

export async function fetchDrinkByLetter(letter) {
  const BYLETTER = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  const request = await fetch(BYLETTER);
  const data = await request.json();
  return data.drinks;
}
