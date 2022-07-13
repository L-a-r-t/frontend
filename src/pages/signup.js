import styles from '../styles/pages/LoginSignup.module.scss'
import atoms from '../styles/atoms.module.scss'
import PasswordInput from '../components/PasswordInput'

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1>Create your account</h1>
                <form className={atoms.form} style={{justifyContent: 'space-between', flexGrow: 1}}>
                    <div className={styles.inputsWrapper}>
                        <input 
                            className={atoms.input}
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <PasswordInput 
                            minLength={8}
                        />
                        <p className={styles.inputDetails}>Must be at least 8 characters long</p>
                    </div>
                    <button
                        className={`${atoms.button} ${styles.loginButton}`}
                        type="submit"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    )
}