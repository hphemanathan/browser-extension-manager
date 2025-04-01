
import React from 'react'
import Extensions from '../Extensions/Extensions'
import Header from '../Header/Header'
import Heading from '../Heading/Heading'
import styles from "./App.module.css"
import data from "../../data.json" with {type:"json"}

export const ItemContext = React.createContext();

function App() {
  const [item, setItem] = React.useState(data);

  return (
    <ItemContext item={item} setItem = {item}>
    <main className={styles.container}>
     <Header/>
     <Heading/>
     <Extensions/>
    </main>
    </ItemContext>
  )
}

export default App
