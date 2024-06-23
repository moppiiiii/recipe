import { gql } from '@apollo/client';

export const RECIPE_DETAIL = gql`
  query GetRecipeDetail($categoryId: Int!) {
    recipeDetail(categoryId: $categoryId) {
      mediumImageUrl
      nickname
      recipeCost
      recipeDescription
      recipeId
      recipeIndication
      recipeMaterial
      recipeTitle
      recipeUrl
    }
  }
`;
