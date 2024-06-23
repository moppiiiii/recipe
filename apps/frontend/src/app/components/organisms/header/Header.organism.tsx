import React from 'react';

import styles from './Header.organism.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles['header-container']}>
      <p className={styles['header-text']}>RecipeFinder</p>
    </div>
  );
};

Header.whyDidYouRender = true;
export default Header;
