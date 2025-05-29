import s from './index.module.css'


export const Answer = ({result}) => {
    const resultClass = result.isCorrect ? s.correct : s.wrong

    return (
        <div className={`${s.answer} ${resultClass}`} key={result.id}>
            <span className={s.title}>{result.title}</span>
            <span>
               {`Resposta: ${result.rightOptionValue} - `}
                {result.isCorrect ? "Acertou" : "Errou"}
            </span>
        </div>
    )
}