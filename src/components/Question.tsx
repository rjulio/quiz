import styles from '@/styles/Question.module.css';

import QuestionModel from '@/model/question';
import Title from '@/components/Title';
import Answer from '@/components/Answer';
import Timer from '@/components/Timer';

interface QuestionProps {
	value: QuestionModel;
	givenAnswer: (index: number) => void;
	runout: () => void;
	timeToAnswer?: number;
};

const options = [
	{ value: 'A', color: '#f2c866' },
	{ value: 'B', color: '#f266ba' },
	{ value: 'C', color: '#85d4f2' },
	{ value: 'D', color: '#bce596' },
];

export default function Question(props: QuestionProps) {
	const question = props.value;

	function renderAnswers() {
		return question.answers.map((answer, i) => {
			return (
				<Answer 
					key={ i }
					index={ i } 
					answer={ answer }
					option={ options[i].value }
					colorBgOption={ options[i].color }
					givenAnswer={ props.givenAnswer }
				/>
			);
		})
	}

	return (
		<div className={ styles.question }>
			<Title text={ question.question } />
			<Timer 
				duration={ props.timeToAnswer ?? 10 } 
				runout={ () => props.runout() } />
			{ renderAnswers() }
		</div>
	);
}