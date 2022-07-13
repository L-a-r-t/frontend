import { useState } from "react"

import atoms from '../styles/atoms.module.scss'

export default function PasswordInput({minLength}) {
    const [inputType, setInputType] = useState('password')

    const toggleInput = (e) => {
        e.stopPropagation()
        setInputType(current => current == "text" ? "password" : "text")
    }

    return (
        <span>
            <input 
                className={atoms.input}
                type={inputType}
                placeholder="Password"
                minLength={minLength ? minLength : 0}
                required
                style={{width: "100%"}}
            />
            <button
                type="button"
                onClick={toggleInput}
                style={{
                    marginLeft: "-2rem",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    display: "inline-block"
                }}
            >
                {inputType == "text" ? "o" : "-"}
            </button>
        </span>
    )
}