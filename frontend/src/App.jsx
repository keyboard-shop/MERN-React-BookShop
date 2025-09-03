

import './App.css'

import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import BooksPage from '../pages/BooksPage';
import Navbar from '../components/Navbar';


function App() {

  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books' element={<BooksPage />} />
      </Routes>
    </>

  )

}
export default App

