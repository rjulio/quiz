import styles from '@/styles/Questionnaire.module.css';
import QuestionModel from '@/model/question';
import Question from '@/components/Question';
import Button from '@/components/Button';

interface QuestionnaireProps {
    question: QuestionModel | undefined;
    last: boolean;
    answeredQuestion: (question: QuestionModel) => void;
    nextStep: () => void;
}

export default function Questionaire(props: QuestionnaireProps) {
    function givenAnswer(index: number) {
        if (!props.question) { return; }
        if (props.question.notAnswered) {
            props.answeredQuestion(props.question.answerWith(index))
        }
    }

    return (
        <div className={ styles.questionnaire }>
            {
                props.question && (
                    <Question
                        value={ props.question }
                        givenAnswer={ givenAnswer }
                        runout={ props.nextStep }
                        timeToAnswer={ 6 }
                    />
                )
            }
            
            <Button 
                onClick={ props.nextStep }
                text={ props.last ? 'Finalizar' : 'Próxima' }
                style={{ marginTop: '30px' }} />
        </div>
    );
}