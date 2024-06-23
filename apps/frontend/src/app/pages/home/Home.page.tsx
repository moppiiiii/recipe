import React from 'react';
import HomeTemplate from '@/app/components/templates/home/Home.template';
import { HomeTemplateProps } from '@/app/components/templates/home/type';
import { useGetRecipeDetailLazyQuery, useGetRecipesQuery } from '@/app/graphql/generate/generated';

const HomePage: React.FC = () => {
  const { data, loading } = useGetRecipesQuery();

  const [getRecipeDetail] = useGetRecipeDetailLazyQuery();

  const onClickItem = (categoryId: number) => {
    getRecipeDetail({ variables: { categoryId } });
  };

  const homeTemplateProps: HomeTemplateProps = {
    isLoading: loading,
    largeCategory: data ? data.recipes.large : [],
    mediumCategory: data ? data.recipes.medium : [],
    smallCategory: data ? data.recipes.small : [],
    onClickItem,
  };

  return <HomeTemplate {...homeTemplateProps} />;
};

HomePage.whyDidYouRender = true;
export default HomePage;
