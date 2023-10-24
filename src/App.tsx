import React from 'react';
import styles from './app.module.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className={styles.app}>
		<Outlet/>
	</main>
  );
}

export default App;
