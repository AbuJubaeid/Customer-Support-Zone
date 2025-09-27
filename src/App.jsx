import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Card from './components/Card/Card'
import CustomerTicket from './components/CustomerTicket/CustomerTicket'
import Navbar from './components/Navbar/Navbar'


const customerPromise = fetch('public/CustomerInfo.json')
.then(res=>res.json())

function App() {
  const [card, setCard] = useState([])
  const [resolvedCard, setResolvedCard] = useState([])

  const handleCard = (task) =>{
    const cardValue = [...card, task]
    setCard(cardValue)
  }

  const handleResolvedCard = (task) =>{
    const cardValue = [...resolvedCard, task]
    setResolvedCard(cardValue)
  }
 

  return (
    <>
      <Navbar></Navbar>
      <Card card={card} resolvedCard={resolvedCard}></Card>
      <Suspense fallback={<h3>Tickets are loading...</h3>}>
        <CustomerTicket handleResolvedCard={handleResolvedCard} handleCard={handleCard} customerPromise={customerPromise}></CustomerTicket>
      </Suspense>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
