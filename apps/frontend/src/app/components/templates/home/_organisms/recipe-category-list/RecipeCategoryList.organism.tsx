import React from 'react';
import { RecipeCategoryListProps } from './type';
import styles from './RecipeCategoryList.organism.module.scss';
import HeadingPrimary from '@/app/components/parts/heading/heading-primary/HeadingPrimary.parts';
import Image from '@/app/components/parts/image/Image.parts';
import faAngleRightIcon from '@/assets/icons/fa-angle-right.svg';

const RecipeCategoryList: React.FC<RecipeCategoryListProps> = ({ title, category, onClickItem }) => {
  return (
    <div className={styles['category-list-container']}>
      <HeadingPrimary>{title}</HeadingPrimary>

      <div className={styles['category-list-wrapper']}>
        {category.map((v) => {
          return (
            <button
              className={styles['category-item']}
              key={v.categoryId}
              onClick={() => onClickItem(Number(v.categoryId))}
            >
              <p key={v.categoryId} className={styles['category-item-text']}>
                {v.categoryName}
              </p>
              <Image src={faAngleRightIcon} alt="angle-right-icon" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

RecipeCategoryList.whyDidYouRender = true;
export default RecipeCategoryList;
