import { Header } from "./components/Header"
import { Post } from "./Post"

import "./global.css"
export function App() {
  return (
    <div>
      <Header/>
      <Post
          author= "Diego Fernandes"
          content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed ut perspiciatis unde omnis iste natus error."
      />

      <Post
          author="Gabriel Buzzi"
          content= "Um novo post muito legal"
      />
    </div>
  )
}