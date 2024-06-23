import styles from '@/styles/Timer.module.css';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

interface TimerProps {
	key: any;
	duration: number;
	runout: () => void;
}

export default function Timer(props: TimerProps) {
	return (
		<div className={ styles.timer }>
			<CountdownCircleTimer
				duration={ props.duration }
				onComplete={ () => props.runout() }
				size={ 120 }
				isPlaying
				colors={['#bce596', '#f7b801', '#ed827a']}
				colorsTime={[10, 5, 0]}>
				{ ({remainingTime}) => remainingTime }
			</CountdownCircleTimer>
		</div>
	);
}