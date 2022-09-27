import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar  hasBorder={false} src="https://github.com/btrzdev.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Beatriz Silva</strong>
                            <time title="21 de setembro de 2022" dateTime="2022-09-21 11:25:30" > Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário"> <Trash size={24}/></button>

                    </header>
                    <p>
                        Muito bom, dev, parabéns 
                    </p>                   
                </div>
                <footer>
                        <ThumbsUp />
                        Aplaudir  <span>20</span>
                    </footer>
            </div>
        </div>
    )
}