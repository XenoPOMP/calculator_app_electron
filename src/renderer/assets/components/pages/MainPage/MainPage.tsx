import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import styles from './MainPage.module.scss';
import { Route, Routes } from 'react-router-dom';
const math = require('mathjs');
const stringOccurrence = require('string-occurrence');

const MainPage = () => {
  const [previousInput, setPreviousInput] = useState('');
  const [currentInput, setCurrentInput] = useState('');

  const clearInput = () => {
    setCurrentInput('');
    setPreviousInput('');
  };

  const addChar = (char: string | number) => {
    // Set limits to input length
    if (currentInput.length == 27) return;
    setPreviousInput('');

    // Logic of bracket insert
    if (char == '(') {
      const leftBrackets = stringOccurrence(currentInput, '(');
      const rightBrackets = stringOccurrence(currentInput, ')');

      const putChar = leftBrackets === rightBrackets ? '(' : ')';
      setCurrentInput((e) => `${e}${putChar}`);
      return;
    }

    // Logic of preventing inserting operator sign to first place
    if (
      currentInput == '' &&
      (char == '=' || char == '+' || char == '-' || char == '*' || char == '/')
    ) {
      console.warn('Wrong operator sign input');
      return;
    }

    setCurrentInput((e) => `${e}${char}`);
  };
  const removeChar = () => {
    const str = currentInput.slice(0, currentInput.length - 1);
    setPreviousInput('');
    setCurrentInput(str);
  };

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
    if (currentInput == '') return;

    const result = `${math.evaluate(formatInput())}`;
    setPreviousInput(`${formatInput()} =`);
    setCurrentInput(`${parseFloat(result)}`);
  };

  return (
    <Layout title={'Calculator'}>
      <Routes>
        <Route
          path={'/'}
          element={
            <div className={styles.mainPage}>
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
                    <div
                      className={`${styles.btn} ${styles.del}`}
                      onClick={() => removeChar()}
                    >
                      DEL
                    </div>
                    <div
                      className={`${styles.btn} ${styles.bracket}`}
                      onClick={() => addChar('(')}
                    >
                      (
                    </div>
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
                    <div
                      className={`${styles.btn} ${styles.operator}`}
                      onClick={() => addChar('^2')}
                    >
                      x^2
                    </div>
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
          }
        />
      </Routes>
    </Layout>
  );
};

export default MainPage;
