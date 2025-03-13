import Form from './components/Form'
import Header from './components/Header'
import './assets/style.css'
import { useState } from "react";
import Todo from './components/Todo';
import Footer from './components/Footer';

function App() {
  return (
      <div>
         <Header/>
         <Todo/>
          <Footer/>
      </div>
  )
}

export default App
