const CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const AREAS = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const MEALSALL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export async function fetchCategories() {
  const request = await fetch(CATEGORIES);
  const data = await request.json();
  return data.meals;
}

export async function fetchAreas() {
  const request = await fetch(AREAS);
  const data = await request.json();
  return data.meals;
}

export async function fetchIngredients() {
  const request = await fetch(INGREDIENTS);
  const data = await request.json();
  return data.meals;
}

export async function fetchMealsAll() {
  const request = await fetch(MEALSALL);
  const data = await request.json();
  return data.meals;
}

export async function filterCategorie(categorie) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);
  const data = await request.json();
  return data.meals;
}
