import styles from './Avatar.module.css'

export function Avatar({hasBorder=true, src}) {

    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}  
        src='https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png' />
    )
}