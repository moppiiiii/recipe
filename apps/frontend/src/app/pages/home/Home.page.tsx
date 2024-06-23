import React from 'react';
import HomeTemplate from '@/app/components/templates/home/Home.template';
import { HomeTemplateProps } from '@/app/components/templates/home/type';
import { useGetRecipesQuery } from '@/app/graphql/generate/generated';

const HomePage: React.FC = () => {
  const { data, loading } = useGetRecipesQuery();

  const homeTemplateProps: HomeTemplateProps = {
    isLoading: loading,
    largeCategory: data ? data.recipes.large : [],
    mediumCategory: data ? data.recipes.medium : [],
    smallCategory: data ? data.recipes.small : [],
  };

  return <HomeTemplate {...homeTemplateProps} />;
};

HomePage.whyDidYouRender = true;
export default HomePage;
