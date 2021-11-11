const CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const AREAS = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const INGREDIENTS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const MEALSALL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const RANDOM_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php';

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

export async function fetchRecipesByName(name) {
  const BYNAME = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(BYNAME);
  const data = await request.json();
  return data.meals;
}

export async function filterCategorie(categorie) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`);
  const data = await request.json();
  return data.meals;
}

export async function fetchRecipesByFirstLetter(letter) {
  const BYFIRSTLETTER = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  const request = await fetch(BYFIRSTLETTER);
  const data = await request.json();
  return data.meals;
}

export async function fetchRecipesByIngredient(ingridient) {
  const BYINGREDIENT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingridient}`;
  const request = await fetch(BYINGREDIENT);
  const data = await request.json();
  return data.meals;
}

export async function fetchRecipesDetails(id) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await request.json();
  return data.meals;
}

export async function fetchRecommendations() {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const data = await request.json();
  return data.meals;
}

export async function fetchRandomMeal() {
  const request = await fetch(RANDOM_MEAL);
  const data = await request.json();
  return data.meals;
}
