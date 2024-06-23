import questions from '@/pages/api/questionsDb';

import { shuffle } from '@/functions/arrays';

export default function handler(req: any, res: any) {
  const ids = questions.map((question) => question.id);
  res.status(200).json(shuffle(ids));
}
