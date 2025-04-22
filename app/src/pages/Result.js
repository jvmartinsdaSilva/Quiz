import { useContext } from "react"

import { QuestionContext } from "../context/QuestionContext.js"

import { Answer } from "../components/Answer/index.js"
import { Link } from "react-router-dom"

export const Results = () => {
    const {ValidationAnswer, QuestionsList} = useContext(QuestionContext)

    return(
        <div className="container">
            <h2>Segue resultados</h2>
            {ValidationAnswer?.map(answer => <Answer result={answer}/>)}
            <Link to='/'><button className="confirm_btn">DENOVO</button></Link>
        </div>
    )
}