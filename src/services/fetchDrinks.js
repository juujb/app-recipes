const CATEGORIES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const GLASSES = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
const INGREDIENTS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const DRINKSALL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

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

export async function fetchAllDrinks() {
  const request = await fetch(DRINKSALL);
  const data = await request.json();
  return data.drinks;
}

export async function fetchFilterDrinkCategorie(categorie) {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`);
  const data = await request.json();
  return data.drinks;
}
