import React from 'react';
import Header from '../../organisms/header/Header.organism';

import styles from './NotFound.template.module.scss';
import HeadingPrimary from '../../parts/heading/heading-primary/HeadingPrimary.parts';
import HeadingSecondary from '../../parts/heading/heading-secondary/HeadingSecondary.parts';
import HeadingTertiary from '../../parts/heading/heading-tertiary/HeadingTertiary.parts';
import LinkButton from '../../parts/button/link-button/LinkButton.parts';

const NotFoundTemplate: React.FC = () => {
  return (
    <div>
      <Header />

      <div className={styles['not-found-container']}>
        <div className={styles['not-found-wrapper']}>
          <HeadingPrimary>404</HeadingPrimary>
          <HeadingSecondary>Not Found</HeadingSecondary>
          <HeadingTertiary>お探しのページは見つかりませんでした</HeadingTertiary>
          <LinkButton href="/">TOPページへ戻る</LinkButton>
        </div>
      </div>
    </div>
  );
};

NotFoundTemplate.whyDidYouRender = true;
export default NotFoundTemplate;
