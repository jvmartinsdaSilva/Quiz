import { useContext } from "react"

import { QuestionContext } from "../context/QuestionContext"

export const Questions = () => {
    const { QuestionsSelect, QuestionsList } = useContext(QuestionContext)

    return (
        <div className="container">
            <h2>{QuestionsSelect?.theme}</h2>
            <h3>{QuestionsSelect?.title}</h3>
        </div>
    )
}