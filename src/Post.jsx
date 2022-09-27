import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(props) {
    return(
   <article className={styles.post}>
    <header>
        <div className={styles.author}>
            <Avatar hasBoder src="https://github.com/btrzdev.png" />
            <div className={styles.authorInfo}>
                <strong> Beatriz Silva </strong>
                <span> Web Developer</span>
            </div>
        </div>
        <time title="21 de setembro de 2022" dateTime="2022-09-21 11:25:30" > Comentado há 1h </time>
    </header>
    
    <div className={styles.content}>
    <p> Falaa, galera! </p>

    <p> Acabei de subir </p>
    <p> 
        <a href="">janedoe@email.com</a>  
    </p>
        <p> 
            <a href=""> #nlw </a>
            <a href=""> #rocketseat</a>
        </p>
    </div>
        <form className={styles.commentForm}>
            <textarea placeholder='Deixe um comentário'/>
            <footer>
                <button type="submit"> Publicar </button>
            </footer>   


        </form>
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
        </div>    
    </article>
    ) 
}
