import styles from '@/styles/Answer.module.css';
import AnswerModel from '@/model/answer';

interface AnswerProps {
	answer: AnswerModel;
	index: number;
	option: string;
	colorBgOption: string;
	givenAnswer: (index: number) => void
}

export default function Answer(props: AnswerProps) {
	const { answer } = props;
	const visibleAnswer = answer.visible ? styles.visibleAnswer : '';

	return(
		<div 
			className={ styles.answer }
			onClick={ () => props.givenAnswer(props.index) }>
			<div className={ `${styles.content} ${visibleAnswer}` }>
				<div className={ styles.front }>
					<div 
						className={ styles.option }
						style={{ backgroundColor: props.colorBgOption }}>
						{ props.option }
					</div>
					<div className={ styles.value }>{ answer.value }</div>
				</div>
				<div className={ styles.back }>
					{ answer.right && <div className={ styles.right }>
						<div>A resposta certa é ...</div>
						<div className={ styles.value }>{ answer.value }</div>
					</div> }
					{ !answer.right && <div className={ styles.wrong }>
						<div>A resposta informada esta errada.</div>
						<div className={ styles.value }>{ answer.value }</div>
					</div> }
				</div>
			</div>
		</div>
	);
}