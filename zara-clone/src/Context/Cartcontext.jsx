import React, { createContext, useEffect, useState } from 'react'
export const Cartcontext = createContext();
const Cartcontextprovider = ({ children }) => {
    const [cartdatas, setCartdatas] = useState([]);
    const [productsid, setProductid] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (cartdatas == "") {
            return;
        }
        let total = 0
        for (let i = 0; i < cartdatas.length; i++) {
            total += Number(cartdatas[i].price);
        }
        setTotal(total)
    }, [cartdatas])



    const handalecartdata = (data) => {
        setCartdatas([...cartdatas, data])
    }
    const handaleproductid = (id) => {
        setProductid([...productsid, id])
    }
    return (
        <Cartcontext.Provider value={{ cartdatas, productsid, handaleproductid, handalecartdata, total, setCartdatas }}>
            {children}
        </Cartcontext.Provider>
    )
}

export default Cartcontextprovider
