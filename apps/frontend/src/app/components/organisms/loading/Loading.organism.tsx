import React from 'react';

import styles from './Loading.organism.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles['loading-container']}>
      <div className={styles['content-wrapper']}>
        <div className={styles['spinner']} />
      </div>
    </div>
  );
};

Loading.whyDidYouRender = true;
export default Loading;
