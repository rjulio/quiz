import questions from '@/pages/api/questionsDb';

import { shuffle } from '@/functions/arrays';

export default function handler(req, res) {
  const ids = questions.map((question) => question.id);
  res.status(200).json(shuffle(ids));
}
