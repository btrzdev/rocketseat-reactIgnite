import { useState } from 'react';
import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'



export function Post({author, publishedAt, content }) {
    const [comments, setComments] = useState([
              
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })


    function handleCreateNewComment(){
        event.preventDefault()

        const newCommentText = event.target.comment.value

        setComments([...comments, newCommentText])
        setNewCommentText('')
    } 

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function onDeleteComment(commentToDelete){
        const commentsWithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne)
    }

    return(
   <article className={styles.post}>
    <header>
        <div className={styles.author}>
            <Avatar hasBoder src={author.avatarUrl} />
            <div className={styles.authorInfo}>
                <strong> {author.name} </strong>
                <span> {author.role}</span>
            </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> {publishedDateRelativeToNow} </time>
    </header>
    
   <div className={styles.content}>
    
   {content.map(line => {
    if(line.type === 'paragraph'){
        return <p key={line.content}> {line.content} </p>       
    }
    else if(line.type === 'link'){
        return <p key={line.content}> <a href='#'>{line.content}</a> </p> 
    }
   })}
    </div>
        <form onSubmit={() => handleCreateNewComment()} className={styles.commentForm}>
            <textarea 
            placeholder='Deixe um comentário'
            name='comment'
            onChange={handleNewCommentChange}
            value={newCommentText}/>
            
            <footer>
                <button type="submit"> Publicar </button>
            </footer> 
        </form>
        <div className={styles.commentList}>
            {comments.map(comment => {
                return <Comment content={comment} onDeleteComment={onDeleteComment}/> 
            })}            
        </div>    
    </article>
    ) 
}
