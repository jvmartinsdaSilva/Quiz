import { useContext} from "react"

import { QuestionContext } from "../context/QuestionContext"
import { QuestionViewer } from "../components/QuestionViwer/index.js"

export const Questions = () => {
    const { QuestionsSelect, QuestionNumber, toggleQuestion} = useContext(QuestionContext)

    return (
        <div className="container">
            <h2>{QuestionsSelect?.theme}</h2>
            <QuestionViewer question={QuestionsSelect} />
            <menu className="menu">
                <button onClick={() => toggleQuestion(QuestionNumber - 1)}>BACK</button>
                <button onClick={() => toggleQuestion(QuestionNumber + 1)}>NEXT</button>
            </menu>
        </div>
    )
}