import React from 'react';
import Header from '../../organisms/header/Header.organism';

import styles from './Home.template.module.scss';
import { HomeTemplateProps } from './type';
import Loading from '../../organisms/loading/Loading.organism';
import RecipeCategoryList from './_organisms/recipe-category-list/RecipeCategoryList.organism';

const HomeTemplate: React.FC<HomeTemplateProps> = ({
  isLoading,
  largeCategory,
  mediumCategory,
  smallCategory,
  onClickItem,
}) => {
  return (
    <div>
      {isLoading && <Loading />}

      <Header />

      <div className={styles['home-container']}>
        <div className={styles['home-wrapper']}>
          <div className={styles['category-wrapper']}>
            <RecipeCategoryList title="大分類" category={largeCategory} onClickItem={onClickItem} />
          </div>

          <div className={styles['category-wrapper']}>
            <RecipeCategoryList title="中分類" category={mediumCategory} onClickItem={onClickItem} />
          </div>

          <div className={styles['category-wrapper']}>
            <RecipeCategoryList title="小分類" category={smallCategory} onClickItem={onClickItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

HomeTemplate.whyDidYouRender = true;
export default HomeTemplate;
