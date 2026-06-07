import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = ({ type }) => {
  const skeletonClasses = `${styles.skeleton} ${styles[type]}`;

  if (type === 'post-card') {
    return (
      <div className={styles['skeleton-card']}>
        <div className={`${styles.skeleton} ${styles.image}`}></div>
        <div className={styles.content}>
          <div className={`${styles.skeleton} ${styles.title}`}></div>
          <div className={`${styles.skeleton} ${styles.text}`}></div>
          <div className={`${styles.skeleton} ${styles.text}`}></div>
          <div className={`${styles.skeleton} ${styles.text_short}`}></div>
        </div>
      </div>
    );
  }

  if (type === 'slider') {
    return (
      <div className={styles['skeleton-slider']}>
        <div className={`${styles.skeleton} ${styles.slider_image}`}></div>
        <div className={styles.slider_content}>
          <div className={`${styles.skeleton} ${styles.featured_badge}`}></div>
          <div className={`${styles.skeleton} ${styles.slider_title}`}></div>
          <div className={`${styles.skeleton} ${styles.slider_text}`}></div>
          <div className={`${styles.skeleton} ${styles.slider_text}`}></div>
        </div>
      </div>
    );
  }

  return <div className={skeletonClasses}></div>;
};

export default Skeleton;
