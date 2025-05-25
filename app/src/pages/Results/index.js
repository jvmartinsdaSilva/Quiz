import { useContext } from "react"
import { Link } from "react-router-dom"
import { QuestionContext } from "../../context/QuestionContext.js"

import { Card } from "../../components/Card/index.js"
import { Answer } from "../../components/Answer/index.js"
import { Button } from "../../components/Button/index.js"

import s from "./index.module.css"
import { UserBar } from "../../components/UserBar/index.js"

export const Results = () => {
    const { ValidationAnswer } = useContext(QuestionContext)

    return (
        <Card>
            <div className={s.container}>
                <UserBar />
                <h2 className="title">RESPOSTAS</h2>
                {ValidationAnswer?.map(answer => <Answer result={answer} />)}

                <Link to='/menu' className={s.btn}><Button textInfo="JOGAR NOVAMENTE"/></Link>
            </div>
        </Card>
    )
}