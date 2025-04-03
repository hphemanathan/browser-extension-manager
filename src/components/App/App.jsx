
import React from 'react'
import useLocalStorage from 'use-local-storage'

import Extensions from '../Extensions/Extensions'
import Header from '../Header/Header'
import Heading from '../Heading/Heading'
import styles from "./App.module.css"
import data from "../../data.json" with {type:"json"}



function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [item, setItem] = React.useState(data);

  const switchTheme = () => {
    const newTheme = theme === 'light' ?  'dark': 'light' ;
    console.log("working");
    setTheme(newTheme);
  }

  return (
    
    <main className={styles.container} data-theme={theme}>
     <Header switchTheme={switchTheme} value={defaultDark} theme={theme} setTheme={setTheme} item={item} setItem = {setItem}/>
     <Heading item={item} setItem = {setItem}/>
     <Extensions item={item} setItem = {setItem}/>
    </main>
    
  )
}

export default App
