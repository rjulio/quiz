import AnswerModel from '@/model/answer';
import { shuffle } from '@/functions/arrays';

export default class QuestionModel {
	#id: number;
	#question: string;
	#answers: AnswerModel[];
	#right: boolean;

	constructor(id: number, question: string, answers: any[], right = false) {
		this.#id = id;
		this.#question = question;
		this.#answers = answers;
		this.#right = right;
	}

	get id() { return this.#id; }
	get question() { return this.#question; }
	get answers() { return this.#answers; }
	get right() { return this.#right; }
	get answered() {
		for (let answer of this.#answers) {
			if (answer.visible){
				return true;
			}
		}
		return false;
	}

	get notAnswered() {
		return !this.answered;
	}

	answerWith(index: number): QuestionModel {
		console.info('model', index);
		const right = this.#answers[index]?.right;
		const answers = this.#answers.map((answer, i) => {
			const selected = index === i;
			const shouldShow = selected || answer.right;
			return shouldShow ? answer.show() : answer;
		});

		return new QuestionModel(this.#id, this.#question, answers, right);
	}

	shuffleAnswers(): QuestionModel {
		let shuffledAnswers = shuffle(this.#answers);
		return new QuestionModel(this.#id, this.#question, shuffledAnswers, this.#right)
	}

	static createUsingObj(obj: QuestionModel): QuestionModel {
		const answers = obj.answers.map((answer) => AnswerModel.createUsingObj(answer));
  		return new QuestionModel(obj.id, obj.question, answers, obj.right);
	}

	convertToObject() {
		return {
			id: this.#id,
			question: this.#question,
			answered: this.answered,
			right: this.#right,
			answers: this.answers.map((answer) => answer.convertToObject())
		};
	}
}