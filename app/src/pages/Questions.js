import { useContext } from "react"

import { QuestionContext } from "../context/QuestionContext"
import { QuestionViewer } from "../components/QuestionViwer/index.js"

export const Questions = () => {
    const { QuestionsSelect } = useContext(QuestionContext)
    
    return (
        <div className="container">
            <h2>{QuestionsSelect?.theme}</h2>
            <QuestionViewer question={QuestionsSelect}/>
        </div>
    )
}