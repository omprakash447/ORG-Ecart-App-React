import { useEffect, useState } from "react";

function CartItem({ cart, setcart }) {
    const [price, setprice] = useState(0);

    const handelprice = () => {
        let initialprice = 0;
        cart.forEach((item) => {
            initialprice += item.price;
        });
        setprice(initialprice);
    };

    useEffect(() => {
        handelprice();
    }, [cart]); // Runs whenever 'cart' changes

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setcart(updatedCart);
    };

    return (
        <>
            <p style={{ color: "black", textAlign: "center", marginTop: "50px" }}>Your Cart Products</p>
            <h4 style={{ textAlign: "center", color: "black" }}>Total Price: {price}</h4>
            <hr style={{ color: "black" }} />
            {
                cart.map((item) => (
                    <div className="cartbox" key={item.id}>
                        <div className="img" style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px" }}>
                            <p style={{ color: "#222" }}>{item.id}</p>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="data">
                            <h2 style={{ color: "#222", fontSize: "30px" }}>{item.name}</h2>
                            <p style={{ color: "#222" }}>Price : {item.price}</p>
                        </div>
                        <button onClick={() => handleRemove(item.id)} style={{ color: "white" }}>Remove</button>
                    </div>
                ))
            }
        </>
    );
}

export default CartItem;
