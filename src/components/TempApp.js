import React, { useEffect, useState } from 'react'
import './css/style.css';
function TempApp() {
    var [city, setCity] = useState(null)
    var [search, setSearch] = useState('pune')
    useEffect(() => {
        setCity('surat');
    })
    return (
        <>
            <div className='box'>
                <label>Enter Name</label>
                <input type='text' className='input-field' onChange={(event) => {
                    setSearch(event.target.value)
                }} />
                <div className='info'>
                    <h2 className='location'><i className="fa-solid fa-street-view"></i>{search}</h2>
                    <h1 className='temp'>5.21cel</h1>
                    <h3 className='tempmin-max'>min:3.4cel | max:6.7u</h3>
                </div>
                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>

        </>
    )
}

export default TempApp
