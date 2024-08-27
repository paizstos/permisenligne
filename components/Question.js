import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Question({ question, handleAnswer }) {
  return (
    <div className={styles.questionContainer}>
      <h2>{question.text}</h2>
      <Image src={question.image} alt="question image" width={500} height={300} />
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={styles.optionButton}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
