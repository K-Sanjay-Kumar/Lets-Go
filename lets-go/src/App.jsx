import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    <h1>Home page</h1>
      {/* <section className='banner'>
        <div></div>
      </section> */}
    </>
  )
}

export default App
