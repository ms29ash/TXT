import React from 'react'
import '../Styles/Navbar.css'

function Navbar({ mode, setMode, toggleAlert }) {
    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light')
            toggleAlert('Light mode enabled')
        } else {
            setMode('dark')
            toggleAlert('Dark mode enabled')
        }
    }

    return (
        <nav className="navbar">
            <div className="Logo">Text-Transform</div>
            <div className="mode-switch">

                <input type="checkbox" className="switch" id="mode-btn" />
                <label onClick={toggleMode} htmlFor="mode-btn" className="mode-label"></label>
                <label onClick={toggleMode} htmlFor="mode-btn" className="mode-label-2">{`Enable ${mode === 'dark' ? 'light' : 'dark'} Mode`}</label>
            </div>

        </nav>
    )
}

export default Navbar