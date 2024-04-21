import React, { useState } from 'react'
import Menu from '../TempMenu/Menu'
import Images from '../Image';
import Cat from '../TempMenu/Cat';
const allCat = [... new Set(Menu.map((curElem) => {
    return curElem.category
})), 'All']
// console.log(allCat, 'allCat');
function GalleryReact() {
    const [items, setItems] = useState(Menu)
    const [catitems, setCatItems] = useState(allCat)

    const filterItems = (cat) => {
        if(cat == 'All'){
            setItems(Menu)
            return
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category == cat;
        })
        setItems(updatedItems)
    }
    return (
        <>
            <h1>Order Dish</h1>
            <hr />
            <div className="menu-tabs container">
                <Cat filterItems={filterItems} catitems={catitems} />
                <Images items={items} />
                {/* <div>
                    {
                        items.map((elem, index) => {
                            console.log(index, elem, 'fd');
                            const { id, image, name, category, price, description } = elem;
                            return (
                                <div className='item' key={id}>
                                    <p>{name}</p>
                                    <img src={image} alt={name} />
                                    <p>{category}</p>
                                    <p>Price: {price}</p>
                                    <p>Desc: {description}</p>
                                </div>
                            );
                        })
                    }
                </div> */}
            </div>
        </>
    )
}

export default GalleryReact
