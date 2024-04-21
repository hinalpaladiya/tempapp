import React from 'react'

function Cat({ filterItems, catitems }) {
    return (
        <>
            {
                catitems.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <div className="menu-tab d-flex">
                                <button className="className" onClick={() => filterItems(val)}>{val}</button>
                            </div>
                        </div>
                    )
                })
            }
        </>

        // {/* <button className="className" onClick={() => filterItems('category2')}>Dinner</button>

        //     <button className="className" onClick={() => filterItems('category3')}>Lunch</button>                <button className="className" onClick={() => filterItems('category4')}>Brunch</button>                <button className="className" onClick={() => setItems(Menu)}>All</button> */}                
    )
}
export default Cat





