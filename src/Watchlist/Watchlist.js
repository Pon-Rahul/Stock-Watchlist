import React, { useState } from "react";
import './Watchlist.css'
const Watchlist = () => {
    const [war, setWar] = useState(JSON.parse(localStorage.getItem("watchArr")) || [])

    const deleteHandler = (i) => {
        const delarray = JSON.parse(localStorage.getItem("watchArr")) || []
        delarray.splice(i, 1)
        localStorage.setItem("watchArr", JSON.stringify(delarray));
        setWar(delarray);
    }

    return (
        <div className="border">
            <div className="title">Watchlist</div>
            {war?.map((o, i) =>
                <div className="list">
                    <span>{o}</span>
                    <span><button className="deletebutton" onClick={() => deleteHandler(i)}>Delete</button></span>
                </div>
            )
            }
        </div>
    )
}

export default Watchlist;