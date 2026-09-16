import { useState } from 'react'
import './App.css'
import ScheduleList from './components/ScheduleList'
import InputForm from './components/InputForm'

function App() {
  const [bookings, setBookings] = useState([])

  function submitForm({booking}) {
    setBookings(oldBookings => [...oldBookings, booking])
  }

  return (
    <>
      <InputForm submitForm={submitForm} />
      <ScheduleList bookings={bookings} />
    </>
  )
}

export default App
