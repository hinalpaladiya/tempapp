import React from 'react';
import Menu from './TempMenu/Menu';
function Images({items}) {
    return (
        <div>
            {
                items.map((elem, index) => {
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
        </div>
    );
}

export default Images;