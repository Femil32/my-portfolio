import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Styles
import './App.css'
import './assets/scss/main.scss'

// Components
import LandingPage from './assets/components/LandingPage'
import ProjectPage from './assets/components/project/ProjectPage'

function App() {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/project/:name' element={<ProjectPage />} />
            </Routes>
        </main>
    )
}

export default App
