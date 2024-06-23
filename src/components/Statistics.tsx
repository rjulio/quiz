import styles from '@/styles/Statistics.module.css';

interface StatisticsProps {
    value: any;
    text: string;
    bgColor?: string;
    txtColor?: string;
}

export default function Statistics(props: StatisticsProps) {
    return (
        <div className={ styles.statistics }>
            <div 
                className={ styles.value } 
                style={{
                    backgroundColor: props.bgColor ?? '#fdd60f',
                    color: props.txtColor ?? '#333333'
                }}
            >
                { props.value }
            </div>
            <div className={ styles.text }>
                { props.text }
            </div>
        </div>
    );
}