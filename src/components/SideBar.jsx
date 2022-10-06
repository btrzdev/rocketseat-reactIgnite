import styles from './SideBar.module.css'

import { PencilLine } from 'phosphor-react' 
import { Avatar } from './Avatar.jsx'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
            <Avatar  src="https://github.com/btrzdev.png" />
                <strong>Beatriz Silva</strong>
                <span> Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20}/>
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    )
}