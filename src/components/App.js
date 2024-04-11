import React from 'react'
import '../styles/App.css';
import styles from '../styles/appStyle.module.css';

const App = () => {
  return (
    <div id="main">
      <h1 className={styles.success}>Success</h1>
      <h1 id='error' style={{fontSize: "50px", color: "red"}} >Error</h1>
    </div>
  )
}


export default App;
