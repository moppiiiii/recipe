import { gql } from '@apollo/client';

export const RECIPE = gql`
  query GetRecipes {
    recipes {
      large {
        categoryId
        categoryName
        categoryUrl
      }
      medium {
        categoryId
        categoryName
        categoryUrl
      }
      small {
        categoryId
        categoryName
        categoryUrl
      }
    }
  }
`;
