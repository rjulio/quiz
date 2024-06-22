import { useState } from 'react';

import Question from '@/components/Question';
import Answer from '@/components/Answer';
import Button from '@/components/Button';
import AnswerModel from '@/model/answer';
import QuestionModel from '@/model/question';

const testing = new QuestionModel(
  1, 
  'Mehor cor?',
  [
    AnswerModel.wrong('Verde'),
    AnswerModel.wrong('Vermelho'),
    AnswerModel.wrong('Azul'),
    AnswerModel.right('Branco'),
  ]
);

export default function Home() {
  const [question, setQuestion] = useState(testing);

  function givenAnswer(index: number) {
    setQuestion(question.answerWith(index));
  }

  function runout() {
    if (question.notAnswered) {
      setQuestion(question.answerWith(-1));
    }
  }

  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      height: '100vh',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Question 
        value={ question } 
        givenAnswer={ givenAnswer }
        runout={ runout }
        timeToAnswer={ 20 } />
      <Button 
        href="/result"
        text="Próxima"
        style={{ marginTop: '40px' }} />
    </div>
  );
}
