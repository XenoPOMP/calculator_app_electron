import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const [previousInput, setPreviousInput] = useState('');
  const [currentInput, setCurrentInput] = useState('');

  const clearInput = () => {
    setCurrentInput('');
    setPreviousInput('');
  };

  const addChar = (char: string | number) =>
    setCurrentInput((e) => `${e}${char}`);

  const addZero = () =>
    currentInput[currentInput.length - 1] !== '0'
      ? setCurrentInput((e) => `${e}0`)
      : '';

  const formatInput = () => {
    let format = '';

    for (let e = 0; e < currentInput.length; e++) {
      if (
        currentInput[e] == '=' ||
        currentInput[e] == '+' ||
        currentInput[e] == '-' ||
        currentInput[e] == '*' ||
        currentInput[e] == '/'
      ) {
        if (
          currentInput[e - 1] == '=' ||
          currentInput[e - 1] == '+' ||
          currentInput[e - 1] == '-' ||
          currentInput[e - 1] == '*' ||
          currentInput[e - 1] == '/'
        ) {
          format += `0 ${currentInput[e]} `;
        } else format += ` ${currentInput[e]} `;
      } else format += currentInput[e];
    }

    return format;
  };

  const proceedAction = () => {
    const stringMath = require('string-math');
    const result = stringMath(formatInput());

    setPreviousInput(`${formatInput()} =`);

    setCurrentInput(`${result}`);
  };

  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.numberOutput}>
          <div className={styles.previous}>{previousInput}</div>
          <div className={styles.current}>{formatInput()}</div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.buttons}>
            <div className={styles.grid}>
              <div
                className={`${styles.btn} ${styles.ac}`}
                onClick={() => clearInput()}
              >
                AC
              </div>
              <div className={`${styles.btn} ${styles.percent}`}>%</div>
              <div
                className={`${styles.btn} ${styles.operator}`}
                onClick={() => addChar('/')}
              >
                ÷
              </div>

              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(7)}
              >
                7
              </div>
              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(8)}
              >
                8
              </div>
              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(9)}
              >
                9
              </div>
              <div
                className={`${styles.btn} ${styles.operator}`}
                onClick={() => addChar('*')}
              >
                x
              </div>

              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(4)}
              >
                4
              </div>
              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(5)}
              >
                5
              </div>
              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(6)}
              >
                6
              </div>
              <div
                className={`${styles.btn} ${styles.operator}`}
                onClick={() => addChar('-')}
              >
                -
              </div>

              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(1)}
              >
                1
              </div>
              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(2)}
              >
                2
              </div>
              <div
                className={`${styles.btn} ${styles.number}`}
                onClick={() => addChar(3)}
              >
                3
              </div>
              <div
                className={`${styles.btn} ${styles.operator}`}
                onClick={() => addChar('+')}
              >
                +
              </div>

              <div
                className={`${styles.btn} ${styles.number} ${styles.zero}`}
                onClick={() => addChar(0)}
              >
                0
              </div>
              <div className={`${styles.btn} ${styles.number}`}>,</div>
              <div
                className={`${styles.btn} ${styles.operator}`}
                onClick={() => proceedAction()}
              >
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
