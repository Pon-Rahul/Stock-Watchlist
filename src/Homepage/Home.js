import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Home.css'
import axios from "axios";

const Home = ({ arr, setArr, add }) => {

    const navigate = useNavigate()

    const [searchStock, setsearchStock] = useState("")

    const searchHandler = async (event) => {
        let a = []
        let value = event.target.value;
        setsearchStock(value)
        if (value === "") {
            return;
        }
        const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${value}&apikey=y5ubpyr41hf4mce3`
        const resp = await axios.get(url)
        for (let i = 0; i < resp.data.bestMatches.length; i++) {
            a.push(resp.data.bestMatches[i]["2. name"]);
        }
        setArr(a)
    }

    return (
        <div className="total">
            <div className="title">Home</div>
            <div className="outline">
                <input type="text"
                    placeholder="Search"
                    onChange={searchHandler}
                    value={searchStock}
                    className="inputbox" />
            </div>
            <div className="buttonborder">
                <button className="button" onClick={() => navigate('watchlist')}>Watchlist</button>
            </div>
            {arr.map((o, i) =>
                <div className="suggestion">
                    <span>{o}</span>
                    <span><button className="button" onClick={() => add(i)}>+</button></span>
                </div>
            )
            }
        </div>
    )
}

export default Home;