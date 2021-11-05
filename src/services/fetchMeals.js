const CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const AREAS = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

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
