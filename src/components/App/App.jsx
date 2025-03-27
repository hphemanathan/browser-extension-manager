
import Extensions from '../Extensions/Extensions'
import Header from '../Header/Header'
import Heading from '../Heading/Heading'
import styles from "./App.module.css"


function App() {
  

  return (
    <main className={styles.container}>
     <Header/>
     <Heading/>
     <Extensions/>
    </main>
  )
}

export default App
