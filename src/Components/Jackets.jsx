import React from 'react'
import jackets from '../Obj/jackets'

function Jackets({ handelclick }) {
    return (
        <div>
            <div className='all'>
                <h2 style={{ textAlign: "center", color: "#FFFFFF" }}>Shirts</h2>
                <div className="shirt">
                    {
                        jackets.map((item, key) => {
                            return (
                                <div className="card" style={{ width: "18rem;" }} key={key}>
                                    <img src={item.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#070f2b" }}>Name : {item.name}</h5>
                                        <p className="card-text">Price : {item.price}</p>
                                        <p>Discount : {item.discount}</p>
                                        <p>Total price : {item.total}</p>
                                        <div className="btn">
                                            <button onClick={() => { handelclick(item) }}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Jackets
