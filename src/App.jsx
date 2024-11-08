import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './homepage'
import { Routes, Route } from 'react-router-dom'
import Success from './success'

function App() {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ssn: "",
    phoneNumber: "",
    addressL1: "",
    addressL2: "",
  });

  function getData(event) {
     setFormData((prev)=> {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        }
     })
     console.log(formData);
  }


  return (
    <section>
     <Routes>
      <Route index element={<HomePage getData={getData}/>} />
      <Route path='success' element={<Success />} />
     </Routes>
     
    </section>
  )
}

export default App
