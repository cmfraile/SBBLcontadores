'use client'

import style from "@/styles/resetButton.module.css"

export const ResetButton = ({reset,resetCondition}:{reset:() => void,resetCondition:boolean}) => {

    return(
        (resetCondition) &&
        <button     onClick={reset}
                    className={`btn btn-warn ${style.resetButton}`}>
            <p>Reset</p>
        </button>
    )

}