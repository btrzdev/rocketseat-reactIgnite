import { Post } from './Post'
import { Header } from './Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './SideBar'


export function App() {
   return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post/>
      </main>

      </div>
     

    </div>     
     
  )
}


