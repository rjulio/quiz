export default class AnswerModel {
	#value: string;
	#right: boolean;
	#visible: boolean;

	constructor(value: string, right: boolean, visible = false) {
		this.#value = value;
		this.#right = right;
		this.#visible = visible;
	}

	static right(value: string) {
		return new AnswerModel(value, true);
	}

	static wrong(value: string) {
		return new AnswerModel(value, false);
	}

	get value() { return this.#value; }
	get right() { return this.#right; }
	get visible() { return this.#visible; }

	show() {
		return new AnswerModel(this.#value, this.#right, true);
	}

	convertToObject() {
		return {
			value: this.#value,
			right: this.#right,
			visible: this.#visible
		};
	}
}