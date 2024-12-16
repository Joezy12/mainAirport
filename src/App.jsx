import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './homepage'
import { Routes, Route } from 'react-router-dom'
import Success from './success'
import { app , database} from './firebaseconfig'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

function App() {

  const collectionRef = collection(database, 'users');
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ssn: "",
    phoneNumber: "",
    addressL1: "",
    addressL2: "",
  });

  const navigate = useNavigate();

  function getData(event) {
     setFormData((prev)=> {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        }
     })
     console.log(formData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addDoc(collectionRef, {
      firstName: formData.firstName,
      lastName: formData.lastName,
      ssn: formData.ssn,
      phoneNumber: formData.phoneNumber,
      addressL1: formData.addressL1,
      addressL2: formData.addressL2,
    }).then(()=> {
       navigate("success")
    }).catch((err)=> {
      alert(err.message)
    })
  }

  return (
    <section>
     <Routes>
      <Route index element={<HomePage handleSubmit={handleSubmit} getData={getData}/>} />
      <Route path='success' element={<Success />}/>
      
     </Routes>
     
    </section>
  )
}

export default App
