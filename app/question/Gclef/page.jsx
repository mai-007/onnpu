'use client'
import { useState, useEffect } from 'react';
import ScaleData from '../../../data/Fclef';
import styles from '@/styles/question.module.scss';

const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Scale = () => {
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showAnswerMessage, setShowAnswerMessage] = useState(false);
  const [disableButtons, setDisableButtons] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [gameResults, setGameResults] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (totalAttempts === 10) {
      setGameOver(true);
      setDisableButtons(true); // ゲーム終了時にボタンを無効化
    } else {
      const shuffledAndSelectedData = shuffleArray(ScaleData).slice(0, 1);
      setCurrentFlashcard(shuffledAndSelectedData[0]);
      setIsCorrect(null);
      setShowAnswerMessage(false);
      setDisableButtons(false);
    }
  }, [totalAttempts]);

  const handleAnswer = (choice) => {
    if (disableButtons) {
      return;
    }

    const correct = choice === currentFlashcard.correctAnswer;
    setIsCorrect(correct);
    setShowAnswerMessage(true);
    setDisableButtons(true);

    const resultDetail = {
      question: currentFlashcard.question,
      userAnswer: choice,
      isCorrect: correct,
    };
    setGameResults([...gameResults, resultDetail]);

    setTotalAttempts(totalAttempts + 1);
  };

  const handleNextFlashcard = () => {
    if (totalAttempts === 9) {
      setGameOver(true);
      setDisableButtons(true); // ゲーム終了時にボタンを無効化
    } else {
      const shuffledAndSelectedData = shuffleArray(ScaleData).slice(0, 1);
      setCurrentFlashcard(shuffledAndSelectedData[0]);
      setIsCorrect(null);
      setShowAnswerMessage(false);
      setDisableButtons(false);
    }
  };

  return (
    <>
      {currentFlashcard && (
        <div>
          <figure className={styles.image}>
            <img src={currentFlashcard.image} alt="Flashcard" />
          </figure>
          <p>{currentFlashcard.question}</p>
          <ul className={styles.ul}>
            {currentFlashcard.choices.map((choice, index) => (
              <li key={index} className={styles.li}>
                <button
                  className={styles.button}
                  onClick={() => handleAnswer(choice)}
                  disabled={disableButtons}
                >
                  {choice}
                </button>
              </li>
            ))}
          </ul>
          {showAnswerMessage && (
            <p>
              {isCorrect
                ? '正解しました！'
                : `不正解です。正解は「${currentFlashcard.correctAnswer}」です。`}
              {!gameOver && (
                <button onClick={handleNextFlashcard}>次の問題へ</button>
              )}
            </p>
          )}
          {gameOver && (
            <div>
              <p>ゲーム終了しました。結果は以下の通りです。</p>
              {gameResults.map((result, index) => (
                <div key={index}>
                  <p>問題: {result.question}</p>
                  <p>回答: {result.userAnswer}</p>
                  <p>正解: {result.isCorrect ? '正解' : '不正解'}</p>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Scale;
