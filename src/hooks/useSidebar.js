import { useState } from "react"

const useSidebar = () => {
    const [active, setActive] = useState(false)

    const toggleSidebar = () => {
        setActive(current => !current)
    }

    return [active, toggleSidebar]
}

export default useSidebar