import React,{createContext,useEffect,useState} from 'react'
export const Cartcontext=createContext();
const Cartcontextprovider = ({children}) => {
    const[cartdatas,setCartdatas]=useState([]);
    const[productsid,setProductid]=useState([]);
    const [total,setTotal]=useState(0)

    useEffect(()=>{
        if(cartdatas==""){
            return;
        }
        let total=0
        for(let i=0;i<cartdatas.length;i++){
            total+=Number(cartdatas[i].price);
        }
       setTotal(total)
    },[cartdatas])

    // case "Remove_from_cart": return {...state,cart:state.cart.filter((el)=>el._id != action.payload._id)}
    // case "Decrease_qty":    return {
    //   ...state,
    //   cart: state.cart.filter((el)=> el._id === action.payload._id ? el.qty -= 1 : el )
    //   ,
    // };
    // case "Increase_qty":    return {
    //   ...state,
    //   cart: state.cart.filter((el) =>
    //     el._id === action.payload._id ? (el.qty += 1) : el
    //   ),
    // };

    const handaleqty=(v,id)=>{
        let updatedata=cartdatas.filter((el)=>el._id === id ? (el.qty + v) : el)
        setCartdatas([...cartdatas,updatedata])
    }
    
    const handalecartdata=(data)=>{
        setCartdatas([...cartdatas,data])
    }
    const handaleproductid=(id)=>{
        setProductid([...productsid,id])
    }
     return (
    <Cartcontext.Provider value={{cartdatas,productsid,handaleproductid,handalecartdata,total}}>
        {children}
    </Cartcontext.Provider>
  )
}

export default Cartcontextprovider
