import { useCallback, useContext, useEffect } from "react"

import { QuestionContext } from "../context/QuestionContext"
import { QuestionViewer } from "../components/QuestionViwer/index.js"

export const Questions = () => {
    const { QuestionsSelect, QuestionNumber, toggleQuestion } = useContext(QuestionContext)

    useEffect(() =>{
        toggleQuestion(0)
    }, [])

    return (
        <div className="container">
            <h2>{QuestionsSelect?.theme}</h2>
            <QuestionViewer question={QuestionsSelect}/>
            <span className="menu">
                <button onClick={() => toggleQuestion(QuestionNumber - 1) }>BACK</button>
                <button onClick={() => toggleQuestion(QuestionNumber + 1) }>NEXT</button>
            </span>
        </div>
    )
}