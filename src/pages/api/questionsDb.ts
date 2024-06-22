import QuestionModel from '@/model/question';
import AnswerModel from '@/model/answer';

const questions: QuestionModel[] = [
  new QuestionModel(
    306,
    'Qual o bicho transmite a doença de chagas?',
    [
      AnswerModel.wrong('Abelha'),
      AnswerModel.wrong('Barata'),
      AnswerModel.wrong('Pulga'),
      AnswerModel.right('Barbeiro')
    ]
  ),
  new QuestionModel(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      AnswerModel.wrong('Caju'),
      AnswerModel.wrong('Côco'),
      AnswerModel.wrong('Chuchu'),
      AnswerModel.right('Abóbora')
    ]
  ),
  new QuestionModel(
    203,
    'Qual o coletivo de cães?',
    [
      AnswerModel.wrong('Manada'),
      AnswerModel.wrong('Alcateia'),
      AnswerModel.wrong('Rebanho'),
      AnswerModel.right('Matilha')
    ]
  ),
  new QuestionModel(
    204,
    'Qual é o triangulo que tem todos os lados diferentes?',
    [
      AnswerModel.wrong('Equilatero'),
      AnswerModel.wrong('Isoceles'),
      AnswerModel.wrong('Trapezio'),
      AnswerModel.right('Escaleno')
    ]
  )
];

export default questions;