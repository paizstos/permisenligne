import { useState } from 'react';
import Timer from '../components/Timer';
import Question from '../components/Question';
import styles from '../styles/Home.module.css';

const questions = [
  {
    id: 1,
    text: "Quelle est la limite de vitesse en ville?",
    image: "/question1.jpg",
    options: ["30 km/h", "50 km/h", "70 km/h"],
    correct: 1,
  },
  {
    id: 2,
    text: "Que signifie un panneau stop?",
    image: "/question2.jpg",
    options: ["Ralentir", "S'arrêter", "Continuer"],
    correct: 1,
  },
  {
    id: 3,
    text: "Quelle est la distance de sécurité recommandée?",
    image: "/question3.jpg",
    options: ["2 secondes", "3 secondes", "4 secondes"],
    correct: 1,
  },
];

export default function Test() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Simulateur de Permis</h1>
      {!finished ? (
        <>
          <Timer />
          <Question
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        </>
      ) : (
        <h2>Vous avez terminé! Votre score est {score}/{questions.length}</h2>
      )}
    </div>
  );
}
