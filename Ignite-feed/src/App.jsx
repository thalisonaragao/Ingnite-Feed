import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import "./global.css"

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author= "Thalison Aragão "
            content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut perspiciatis unde omnis iste natus error."
          />

          <Post
            author="Gabriel Buzzi"
            content= "Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}