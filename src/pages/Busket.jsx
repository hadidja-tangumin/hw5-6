import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productaction} from "../store/product";
import classes from "../app.module.sass";

const Busket = () => {
    const BusketProducts=useSelector(state=>state.product.producted)
    const counter=useSelector(state=>state.product.value)
    const dispatch=useDispatch()
    const handleIncrease=(plus)=>{
        dispatch(productaction.increase(plus))
    }
    const handleDecrease=(minus)=>{
        dispatch(productaction.decrease(minus))
    }
    const deleteProduct =(del)=>{
        dispatch(productaction.deleteBusket(del))
    }
    return (
        <div className={classes.product}>
                {BusketProducts.map((itemThis)=>(
                    <div className={classes.info} key={itemThis._id}>
                        <h2>{itemThis.name}</h2>
                        <img src={itemThis.picture} alt="#"/>
                        <p>{itemThis.description}</p>
                        <h3>{itemThis.price}   <span className={classes.span}>-50% скидки</span></h3>
                        <div className={classes.buttons}>
                            <button className={classes.button} onClick={()=>handleIncrease()}>+</button>
                            <span className={classes.one}>{counter}</span>
                            <button className={classes.button} onClick={()=>handleDecrease()}>-</button>
                        </div>
                        <button className={classes.btn} onClick={()=>deleteProduct(itemThis)}>DELETE</button>
                    </div>
                ))}
        </div>
    );
};

export default Busket;