import styles from '@/styles/Questionaire.module.css';
import QuestionModel from '@/model/question';

interface QuestionaireProps {
    question: QuestionModel;
    last: boolean;
    answeredQuestion: (question: QuestionModel) => void;
    nextStep: () => void;
}

export default function Questionaire(props: QuestionaireProps) {
    return (
        <div className={ style.questionaire }>
            
        </div>
    );
}