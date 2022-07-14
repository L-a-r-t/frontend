import { useState } from 'react'
import atoms from '../../styles/atoms.module.scss'

export default function AddContentForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDOB] = useState()
    const [story, setStory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // to be linked with backend
    }

    return (
        <form className={atoms.form} onSubmit={handleSubmit}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <input
                    className={atoms.input}
                    type="text"
                    name='first-name'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder='First name'
                    required
                />
                <input
                    className={atoms.input}
                    type="test"
                    name='last-name'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder='Last name'
                    required
                />
            </div>
            <input
                className={atoms.input}
                type="date"
                name='date-of-birth'
                value={dob}
                onChange={e => setDOB(e.target.value)}
                required
            />
            <textarea 
                className={atoms.textarea}
                name='story'
                value={story}
                onChange={e => setStory(e.target.value)}
                placeholder='Story...'
                rows={5}
                required
            />
            <button 
                className={atoms.button}
                type='submit'
            >
                Add
            </button>
        </form>
    )
}