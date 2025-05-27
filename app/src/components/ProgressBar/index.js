import { useContext, useEffect } from "react";

import { QuestionContext } from "../../context/QuestionContext";

import s from "./index.module.css"

export const ProgressBar = ({ }) => {
    const { QuestionNumber, UsersAnswers } = useContext(QuestionContext)
    const questionsPorcent = Math.floor((UsersAnswers.length / 3) * 100) || 0


return (
    <div className={s.container}>
        {questionsPorcent <= 0 && "0%"}
        <div className={`${s.bar}`} style={{width: `${questionsPorcent}%`}}>
            {questionsPorcent > 0 && `${questionsPorcent}%`}
        </div>
    </div>
)
}
