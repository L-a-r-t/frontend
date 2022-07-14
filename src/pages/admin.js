import Link from "next/link"
import { Fragment, useState } from "react"
import AddContentForm from "../components/forms/AddContentForm"
import InviteAdminForm from "../components/forms/InviteAdminForm"

import styles from "../styles/pages/Admin.module.scss"

export default function Admin({ authorized, user }) {
    const [active, setActive] = useState('content')

    const handleLogout = () => {
        // To be linked to auth service/backend
    }

    return (
        <Fragment>
            {authorized &&          
            <div className={styles.container}>
                <nav>
                    <div>
                        <button 
                            type="button"
                            onClick={() => setActive('content')}
                        >
                            Add content
                        </button>
                        <button 
                            type="button"
                            onClick={() => setActive('invite')}
                        >
                            Add new admin
                        </button>
                    </div>
                    <button 
                        type="button" 
                        className={styles.logoutButton}
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </nav>
                <div className={styles.right}>
                    <h1>Welcome, {user}</h1>
                    {active == "content" && 
                    <div>
                        <p>Add new content for the landing page</p>
                        <AddContentForm />
                    </div>
                    }
                    {active == "invite" && 
                    <div>
                        <p>Invite someone to join as an admin</p>
                        <InviteAdminForm />
                    </div>
                    }
                </div>
            </div>
            }
            {!authorized &&
            <h1>Unauthorized.</h1>
            }
        </Fragment>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            authorized: true, // should be the result of authentication logic
            user: "Hannah",
        }
    }
}