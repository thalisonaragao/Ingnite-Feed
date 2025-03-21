import styles from './Avatar.module.css';

export function Avatar({hasBorder = true, src}){
    //const hasBorder = props.hasBorder !== false; //Uma maneira de tirar a Borda
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}/> 
    );
}