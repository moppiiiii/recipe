import React from 'react';
import Header from '../../organisms/header/Header.organism';

import styles from './Home.template.module.scss';

const HomeTemplate: React.FC = () => {
  return (
    <div>
      <Header />

      <div className={styles['home-container']}>Home Page</div>
    </div>
  );
};

HomeTemplate.whyDidYouRender = true;
export default HomeTemplate;
