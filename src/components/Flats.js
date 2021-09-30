import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getFlatsTC} from "../redux/flatsReducer";
import s from './Flats.module.css'
import Like from "./Like";

export default function Flats(){
    const {flats} = useSelector(state => state.flatsReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFlatsTC())
    }, [dispatch])
    return(
        <div className={s.cardsContainer}>
            {flats.map(f => <div className={s.card}>
                <div>{f.name}</div>
                <div>{f.price}</div>
                <Like/>
            </div>)}
        </div>
    )
}