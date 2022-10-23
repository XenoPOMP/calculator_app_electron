import React from 'react';
import Layout from '../../Layout/Layout';
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.numberOutput}>
          <div className={styles.previous}>12 x 6 =</div>
          <div className={styles.current}>72</div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.buttons}>
            <div className={styles.grid}>
              <div className={`${styles.btn} ${styles.ac}`}>AC</div>
              <div className={`${styles.btn} ${styles.percent}`}>%</div>
              <div className={`${styles.btn} ${styles.operator}`}>÷</div>

              <div className={`${styles.btn} ${styles.number}`}>7</div>
              <div className={`${styles.btn} ${styles.number}`}>8</div>
              <div className={`${styles.btn} ${styles.number}`}>9</div>
              <div className={`${styles.btn} ${styles.operator}`}>x</div>

              <div className={`${styles.btn} ${styles.number}`}>4</div>
              <div className={`${styles.btn} ${styles.number}`}>5</div>
              <div className={`${styles.btn} ${styles.number}`}>6</div>
              <div className={`${styles.btn} ${styles.operator}`}>-</div>

              <div className={`${styles.btn} ${styles.number}`}>1</div>
              <div className={`${styles.btn} ${styles.number}`}>2</div>
              <div className={`${styles.btn} ${styles.number}`}>3</div>
              <div className={`${styles.btn} ${styles.operator}`}>+</div>

              <div className={`${styles.btn} ${styles.number} ${styles.zero}`}>
                0
              </div>
              <div className={`${styles.btn} ${styles.number}`}>,</div>
              <div className={`${styles.btn} ${styles.operator}`}>=</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
