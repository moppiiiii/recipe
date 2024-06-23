import { Args, Int, Query, Resolver } from '@nestjs/graphql';

import { fetchResource } from '../../libs/fetch-resource';
import { Recipe, RecipeResource } from '../../models/recipe/recipe.model';
import { RecipeDetail, RecipeDetailResource } from '../../models/recipe-detail/recipe-detail.model';
import { RECIPE_API_BASE, RECIPE_DETAIL_BASE } from '../apibase.constant';

@Resolver('Recipe')
export class RecipeResolver {
  @Query(() => RecipeResource)
  async recipes(): Promise<RecipeResource> {
    if (!process.env.RAKUTEN_APPLICATION_ID) {
      throw new Error('Environment variable is not set');
    }

    const recipe = await fetchResource<Recipe>(
      `${RECIPE_API_BASE}?applicationId=${process.env.RAKUTEN_APPLICATION_ID}`
    );
    return recipe.result;
  }
}

@Resolver('RecipeDetail')
export class RecipeDetailResolver {
  @Query(() => [RecipeDetailResource])
  async recipeDetail(@Args('categoryId', { type: () => Int }) categoryId: number): Promise<RecipeDetailResource[]> {
    if (!process.env.RAKUTEN_APPLICATION_ID) {
      throw new Error('Environment variable is not set');
    }

    const recipeDetail = await fetchResource<RecipeDetail>(
      `${RECIPE_DETAIL_BASE}?categoryId=${categoryId.toString()}&applicationId=${process.env.RAKUTEN_APPLICATION_ID}`
    );
    return recipeDetail.result;
  }
}
