import styles from '../styles/pages/LoginSignup.module.scss'
import atoms from '../styles/atoms.module.scss'

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1>Log in</h1>
                <form className={atoms.form} style={{justifyContent: 'space-between', flexGrow: 1}}>
                    <div className={styles.inputsWrapper}>
                        <input 
                            className={atoms.input}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <input 
                            className={atoms.input}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        className={`${atoms.button} ${styles.loginButton}`}
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}