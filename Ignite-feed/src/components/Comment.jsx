import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/thalisonaragao.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thalison Aragão</strong>
                            <time title='11 de Maio às 08:13h' datetime="2025-03-10 11:26:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentario'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                   <button>
                      <ThumbsUp/>
                      Aplaudir <span>20</span>
                   </button>
                </footer>
            </div>
        </div>
    )
}