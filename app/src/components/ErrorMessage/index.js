
import s from "./index.module.css"

export const ErrorMessage = ({message, action}) => {

    return (
        <div className={s.modal}>
            <div className={s.container}>
                    <p>{message}</p>

            </div>
        </div>
    )
}