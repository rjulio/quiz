import styles from '@/styles/Title.module.css';

interface TitleProps {
	text: string;
}

export default function Title(props: TitleProps) {
	return (
		<div className={ styles.title }>
			<h3 className={ styles.text }>{ props.text }</h3>
		</div>
	);
}