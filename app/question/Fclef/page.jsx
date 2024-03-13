'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScaleData from '../../../data/Fclef';
import styles from '@/styles/question.module.scss'

// 配列をランダムにシャッフルする関数
const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};


export default function Scale() {
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [showNextFlashcardMessage, setShowNextFlashcardMessage] = useState(false);
  const [showAnswerMessage, setShowAnswerMessage] = useState(false);
  const [disableButtons, setDisableButtons] = useState(false); // ボタン無効化フラグ

  useEffect(() => {
    // ScaleDataをシャッフルして1件だけ選択して表示
    const shuffledAndSelectedData = shuffleArray(ScaleData).slice(0, 1);
    setCurrentFlashcard(shuffledAndSelectedData[0]);
    // 正解フラグとメッセージ、ボタン無効化フラグをリセット
    setIsCorrect(null);
    setShowNextFlashcardMessage(false);
    setShowAnswerMessage(false);
    setDisableButtons(false);
  }, [showNextFlashcardMessage]); // showNextFlashcardMessageが変更されたときに新しい問題を表示

  const handleAnswer = (choice) => {
    // ボタン無効化フラグが立っている場合は処理を行わない
    if (disableButtons) {
      return;
    }

    // ユーザーが選択した選択肢が正解かどうかを確認
    const correct = choice === currentFlashcard.correctAnswer;
    setIsCorrect(correct);

    // 正解または不正解の場合、メッセージを表示
    setShowAnswerMessage(true);

    // 正解または不正解の場合、次の問題へボタンがクリックされるまで新しい問題を表示しない
    setUserAnswer('');
    setShowNextFlashcardMessage(false);

    // 正解または不正解の場合、ボタン無効化フラグを立てる
    setDisableButtons(true);
  };

  const handleNextFlashcard = () => {
    // 新しい問題を表示する
    setShowNextFlashcardMessage(true);
    setShowAnswerMessage(false);
    // ボタン無効化フラグを解除
    setDisableButtons(false);
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
              <li 
                key={index}
                className={styles.li}
              >
                <button 
                  className={styles.button}
                  onClick={() => handleAnswer(choice)} disabled={disableButtons}>{choice}
                </button>
              </li>
            ))}
          </ul>
          {showAnswerMessage && (
            <p>
              {isCorrect ? '正解しました！' : `不正解です。正解は「${currentFlashcard.correctAnswer}」です。`}
              <button onClick={handleNextFlashcard}>次の問題へ</button>
            </p>
          )}
        </div>
      )}
    </>
  );
};
