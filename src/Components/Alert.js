import React from 'react'
import '../Styles/Alert.css'

function Alert({ alert }) {
    return (
        <div className={`alert-container ${alert !== '' && 'alert'}`} >{alert}</div>
    )
}

export default Alert