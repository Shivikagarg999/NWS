import React from 'react';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer'

const App = () => {
    return (
    <div className='flex flex-col min-h-screen'>
    <Nav />
    <div className='flex-grow w-[100vw]'>
    <Outlet/>
    </div>
    <Footer />
    </div>
    )
}

export default App