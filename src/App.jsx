import { Route, Routes } from 'react-router'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import NavBar from './components/NavBar'
import ShowAllContacts from './components/ShowAllContacts'
import ViewContact from './components/ViewContact'
import AddContact from './components/AddContact'
import GetContact from './components/GetContact'
import ConfirmDelete from './components/ConfirmDelete'
import EditContact from './components/EditContact'

function App() {

  return (
    <>
      <div className='w-5/6 m-auto'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ShowAllContacts />} />
          <Route path='/new/contact' element={<AddContact/>}/>
          <Route path="/view" element={<ViewContact />} />
          <Route path="/view/by_id/:jid" element={<GetContact/>}/>
          <Route path="/update/_id/:jid" element={<EditContact/>}/>
          <Route path="/remove/by_id/:jid" element={<ConfirmDelete/>}/>
          <Route path="/about" element={<AboutUs />} />


        </Routes>
      </div>
    </>
  )
}

export default App
