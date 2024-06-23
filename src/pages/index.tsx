import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import AnswerModel from '@/model/answer';
import QuestionModel from '@/model/question';
import Questionnaire from '@/components/Questionnaire';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

export default function Home() {
  const router = useRouter();
  const [question, setQuestion] = useState<QuestionModel>();
  const [questionIds, setQuestionIds] = useState<number[]>([]);
  const [rightAsnwers, setRightAsnwers] = useState<number>(0);

  async function loadQuestionsId() {
    const response = await fetch(`${BASE_URL}/questionnaire`);
    const questionIds = await response.json();
    setQuestionIds(questionIds);
  }

  async function loadQuestion(id: number) {
    const response = await fetch(`${BASE_URL}/questions/${id}`);
    const json = await response.json();
    const newQuestion = QuestionModel.createUsingObj(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadQuestionsId();
  }, []);

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0]);
  }, [questionIds]);

  function answeredQuestion(question: QuestionModel) {
    const right = question.right;
    setQuestion(question);
    setRightAsnwers(rightAsnwers + (right ? 1 : 0));
  }

  function getNextQuestionId() {
    if (!question) { return undefined; }
    const nextIndex = questionIds.indexOf(question.id) + 1;
    return questionIds[nextIndex];
  }

  function nextStep() {
    const nextId = getNextQuestionId();
    nextId ? goNextQuestion(nextId) : finish();
  }

  function goNextQuestion(next: number) {
    loadQuestion(next);
  }

  function finish() {
    router.push({
      pathname: '/result',
      query: {
        total: questionIds.length,
        rights: rightAsnwers
      }
    });
  }

  return (
    <Questionnaire
      question={ question }
      last={ getNextQuestionId() === undefined }
      answeredQuestion={ answeredQuestion }
      nextStep={ nextStep }
    />
  );
}
