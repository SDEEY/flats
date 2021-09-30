import s from "./Flats.module.css";
import {useState} from "react";

export default function Like (){
    const [likeActive, setLikeActive] = useState(false)

    return(
        <div onClick={() => setLikeActive(!likeActive)} className={`${s.like} ${!likeActive ? '' : s.active}`}>
            like
        </div>
    )
}