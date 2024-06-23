import { Query, Resolver } from '@nestjs/graphql';

import { fetchResource } from '../../libs/fetch-resource';
import { Recipe, RecipeResource } from '../../models/recipe/recipe.model';
import { RECIPE_API_BASE } from '../apibase.constant';

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
