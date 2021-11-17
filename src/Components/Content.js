import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../Pages/Login';
import Recipes from '../Pages/Recipes';
import Drinks from '../Pages/Drinks';
import Explore from '../Pages/Explore';
import ExploreRecipes from '../Pages/ExploreRecipes';
import ExploreDrinks from '../Pages/ExploreDrinks';
import ExploreRecipesI from '../Pages/ExploreRecipesI';
import ExploreDrinksI from '../Pages/ExploreDrinksI';
import ExploreRecipesArea from '../Pages/ExploreRecipesArea';
import Profile from '../Pages/Profile';
import MadeRecipes from '../Pages/MadeRecipes';
import FavoriteRecipes from '../Pages/FavoriteRecipes';
import FoodRecipesInProgress from '../Pages/FoodRecipesInProgress';
import DrinksRecipesInProgress from '../Pages/DrinksRecipesInProgress';
import DetailsRecipeMeal from '../Pages/DetailsRecipeMeal';
import DetailsRecipeDrink from '../Pages/DetailsRecipeDrink';
import PageNotFound from './PageNotFound';

const Content = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Recipes } />
      <Route exact path="/comidas:id-da-receita" component={ FoodRecipesInProgress } />
      <Route
        path="/comidas/:id/in-progress"
        render={ (props) => <FoodRecipesInProgress { ...props } /> }
      />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/bebidas:id-da-receita" component={ DrinksRecipesInProgress } />
      <Route
        path="/bebidas/:id/in-progress"
        render={ (props) => <DrinksRecipesInProgress { ...props } /> }
      />
      <Route exact path="/comidas/:id" component={ DetailsRecipeMeal } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/bebidas/:id" component={ DetailsRecipeDrink } />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreRecipes } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route path="/explorar/comidas/ingredientes" component={ ExploreRecipesI } />
      <Route path="/explorar/bebidas/ingredientes" component={ ExploreDrinksI } />
      <Route path="/explorar/comidas/area" component={ ExploreRecipesArea } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/receitas-feitas" component={ MadeRecipes } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      <Route path="*" component={ PageNotFound } />
    </Switch>
  </BrowserRouter>
);

export default Content;
