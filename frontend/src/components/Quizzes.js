import Quiz from './Quiz';
import { QuizProvider } from "../contexts/quiz";

const Quizzes = () => {
  return(
    <>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </>
  );
};

export default Quizzes