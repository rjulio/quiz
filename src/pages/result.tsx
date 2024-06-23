import { useRouter } from 'next/router';

import styles from '@/styles/Result.module.css';
import Statistics from '@/components/Statistics';
import Button from '@/components/Button';

export default function Result() {
    const router = useRouter();
    // @ts-ignore: Unreachable code error
    const total = router.query.total;
    // @ts-ignore: Unreachable code error
    const rights = router.query.rights;
    // @ts-ignore: Unreachable code error
    const percent = Math.round((rights / total) * 100);

    return (
        <div className={ styles.result }>
            <h1>Resultado</h1>
            <div style={{ display: 'flex' }}>
                <Statistics text="Perguntas" value={ total } />
                <Statistics 
                    text="Certas" 
                    value={ rights }
                    bgColor="#9cd2a4" />
                <Statistics 
                    text="Percentual" 
                    value={`${percent}%`}
                    bgColor="#de6a33" />
            </div>
            <Button 
                href="/" 
                text="Tentar novamente"
                style={{ marginTop: '30px' }} />
        </div>
    );
}