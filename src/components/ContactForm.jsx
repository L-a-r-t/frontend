import atoms from '../styles/atoms.module.scss'

export default function ContactForm() {
    return (
        <form className={atoms.form}>
            <input
                className={atoms.input}
                type="text"
                placeholder='Full name'
                required
            />
            <input
                className={atoms.input}
                type="email"
                placeholder='Email'
                required
            />
            <textarea 
                className={atoms.textarea}
                placeholder='Message...'
                required
            />
            <button 
                className={atoms.button}
                type='submit'
            >
                Send
            </button>
        </form>
    )
}