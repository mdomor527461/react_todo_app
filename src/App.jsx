import Form from './components/Form'
import Header from './components/Header'
import './assets/style.css'
import { useState } from "react";
import Todo from './components/Todo';

function App() {
  return (
      <div>
         <Header/>
         <Todo/>
      </div>
  )
}

export default App
