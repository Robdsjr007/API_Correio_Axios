import { useState } from 'react'
import './App.css'
import Card from './Card/Card'
import List from './Card/List/List'

function App() {

  const [CEP, setCEP] = useState()

  const enviarCEP = (e) => {
      e.preventDefault();
      console.log(CEP)
  }

  return (
    <div className="App">
      <h1>Procure o seu Endereço</h1>
      <Card setCEP={setCEP} event={enviarCEP}/>
      <List CEP={CEP}/>
    </div>
  )
}

export default App
