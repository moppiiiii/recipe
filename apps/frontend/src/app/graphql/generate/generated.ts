import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  __typename?: 'Category';
  categoryId: Scalars['ID']['output'];
  categoryName: Scalars['String']['output'];
  categoryUrl: Scalars['String']['output'];
  parentCategoryId?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  recipeDetail: Array<RecipeDetailResource>;
  recipes: RecipeResource;
};

export type QueryRecipeDetailArgs = {
  categoryId: Scalars['Int']['input'];
};

export type RecipeDetailResource = {
  __typename?: 'RecipeDetailResource';
  foodImageUrl: Scalars['String']['output'];
  mediumImageUrl: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  pickup: Scalars['Float']['output'];
  rank: Scalars['String']['output'];
  recipeCost: Scalars['String']['output'];
  recipeDescription: Scalars['String']['output'];
  recipeId: Scalars['ID']['output'];
  recipeIndication: Scalars['String']['output'];
  recipeMaterial: Array<Scalars['String']['output']>;
  recipePublishday: Scalars['String']['output'];
  recipeTitle: Scalars['String']['output'];
  recipeUrl: Scalars['String']['output'];
  shop: Scalars['Float']['output'];
  smallImageUrl: Scalars['String']['output'];
};

export type RecipeResource = {
  __typename?: 'RecipeResource';
  large: Array<Category>;
  medium: Array<Category>;
  small: Array<Category>;
};

export type GetRecipeDetailQueryVariables = Exact<{
  categoryId: Scalars['Int']['input'];
}>;

export type GetRecipeDetailQuery = {
  __typename?: 'Query';
  recipeDetail: Array<{
    __typename?: 'RecipeDetailResource';
    mediumImageUrl: string;
    nickname: string;
    recipeCost: string;
    recipeDescription: string;
    recipeId: string;
    recipeIndication: string;
    recipeMaterial: Array<string>;
    recipeTitle: string;
    recipeUrl: string;
  }>;
};

export type GetRecipesQueryVariables = Exact<{ [key: string]: never }>;

export type GetRecipesQuery = {
  __typename?: 'Query';
  recipes: {
    __typename?: 'RecipeResource';
    large: Array<{ __typename?: 'Category'; categoryId: string; categoryName: string; categoryUrl: string }>;
    medium: Array<{ __typename?: 'Category'; categoryId: string; categoryName: string; categoryUrl: string }>;
    small: Array<{ __typename?: 'Category'; categoryId: string; categoryName: string; categoryUrl: string }>;
  };
};

export const GetRecipeDetailDocument = gql`
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

/**
 * __useGetRecipeDetailQuery__
 *
 * To run a query within a React component, call `useGetRecipeDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeDetailQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useGetRecipeDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetRecipeDetailQuery, GetRecipeDetailQueryVariables> &
    ({ variables: GetRecipeDetailQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRecipeDetailQuery, GetRecipeDetailQueryVariables>(GetRecipeDetailDocument, options);
}
export function useGetRecipeDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeDetailQuery, GetRecipeDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRecipeDetailQuery, GetRecipeDetailQueryVariables>(GetRecipeDetailDocument, options);
}
export function useGetRecipeDetailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecipeDetailQuery, GetRecipeDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRecipeDetailQuery, GetRecipeDetailQueryVariables>(GetRecipeDetailDocument, options);
}
export type GetRecipeDetailQueryHookResult = ReturnType<typeof useGetRecipeDetailQuery>;
export type GetRecipeDetailLazyQueryHookResult = ReturnType<typeof useGetRecipeDetailLazyQuery>;
export type GetRecipeDetailSuspenseQueryHookResult = ReturnType<typeof useGetRecipeDetailSuspenseQuery>;
export type GetRecipeDetailQueryResult = Apollo.QueryResult<GetRecipeDetailQuery, GetRecipeDetailQueryVariables>;
export const GetRecipesDocument = gql`
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

/**
 * __useGetRecipesQuery__
 *
 * To run a query within a React component, call `useGetRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecipesQuery(baseOptions?: Apollo.QueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
}
export function useGetRecipesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
}
export function useGetRecipesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecipesQuery, GetRecipesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetRecipesQuery, GetRecipesQueryVariables>(GetRecipesDocument, options);
}
export type GetRecipesQueryHookResult = ReturnType<typeof useGetRecipesQuery>;
export type GetRecipesLazyQueryHookResult = ReturnType<typeof useGetRecipesLazyQuery>;
export type GetRecipesSuspenseQueryHookResult = ReturnType<typeof useGetRecipesSuspenseQuery>;
export type GetRecipesQueryResult = Apollo.QueryResult<GetRecipesQuery, GetRecipesQueryVariables>;
