import Quiz from './Quiz';
import { QuizProvider } from "../contexts/quiz";
import {useAuth0} from '@auth0/auth0-react';

const Quizzes = () => {
  const {isAuthenticated} = useAuth0()

  return(
    isAuthenticated && (
    <>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </>
    )
  );
};

export default Quizzes