import React, { useState } from 'react'
import todo from './images/Capture.PNG'

function Todo() {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState([])
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)
    const addItem = () => {
        if (!inputData) {
            alert('Please fill the data')
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id == isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true)
            setInputData('')
            setIsEditItem(null)
        }
        else {
            var allInputData = { id: new Date().getTime().toString(), name: inputData };
            setItems([...items, allInputData])
            setInputData('')
        }
    }
    const removeItem = (id) => {
        const updatedItems = items.filter((ele) => {
            return ele.id != id;
        })
        setItems(updatedItems)
    }
    const removeAll = () => {
        setItems([])
    }
    const editItem = (id) => {
        let newEditItem = items.find((ele) => {
            return ele.id == id;
        })
        setToggleSubmit(false)
        setInputData(newEditItem.name)
        setIsEditItem(id)
    }
    return (
        <>
            <div>
                <div>
                    <figure>
                        <img src={todo} alt='' width='200px' height='150px' />
                        <figcaption>Add todo list here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' name='' id='' placeholder='Add items' value={inputData} onChange={(e) => {
                            setInputData(e.target.value)
                        }} />
                        {
                            toggleSubmit ? <i className='fa fa-plus add-btn' title='Add Item' onClick={addItem}></i>
                                : <i className='fa fa-edit add-btn' title='Edit Item' onClick={addItem}></i>

                        }

                    </div>
                    <div className='showItems'>
                        {
                            items.map((ele, index) => {
                                return (
                                    <div className='eachItem' key={ele.id}>
                                        <h3>{ele.name}</h3>
                                        <i className='far fa-edit remove-btn' title='Edit Item' onClick={() => { editItem(ele.id) }}></i>
                                        <i className='far fa-trash-alt remove-btn' title='Delete Item' onClick={() => { removeItem(ele.id) }}></i>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' onClick={removeAll} data-sm-link-text='Remove All'><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
