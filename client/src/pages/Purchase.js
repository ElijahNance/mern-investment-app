import { React, useRef, useState } from "react";
import PurchaseConfirm from "../components/PurchaseConfirm/PurchaseConfirm";


function Purchase() {

    const inputStockSymbol = useRef("");
    const inputNumShares = useRef(0);

    const [stockSymbolState, setStockSymbolState] = useState("");
    const [numSharesState, setNumSharesState] = useState(0);

    const getValues = () => {
        let stockSymbol = ""
        let numShares = 0;

        stockSymbol = inputStockSymbol.current.value;
        numShares = inputNumShares.current.value;

        if (stockSymbol.trim().toLowerCase() === "select a stock") {
            return;
        }
        else if (numShares === 0 || numShares === "") {
            return;
        }

        setStockSymbolState(stockSymbol);
        setNumSharesState(numShares);

    };

    return (
        <div>
            <h3 className='text-center'>Buy Stocks</h3>
            <div className="container my-5">
                <label for="  Select" className="form-label h4">Browse below:</label>
                <select id="stocks" className="form-select mb-1" ref={inputStockSymbol}>
                    <option>Select a Stock</option>
                    <option value="BRK.A">Berkshire Hathaway (Class A)</option>
                    <option value="AAPL">Apple</option>
                    <option value="MSFT">Microsoft</option>
                    <option value="NFLX">Netflix</option>
                    <option value="MMM">3M Company</option>
                    <option value="LMT">Lockheed Martin Corporation</option>
                    <option value="LULU">Lululemon Athletica Inc.</option>
                    <option value="LYFT">LYFT, Inc.</option>
                    <option value="VZ">Verizon Communications Inc.</option>
                    <option value="GE">General Electric Company</option>
                </select>
                <input id="numShares" className="form-control mb-1" type="text" placeholder="Number of Shares" ref={inputNumShares}></input>
                <button className="form-control bg-success-subtle" onClick={getValues}>Get Stock Quote</button>
            </div>
            <div className="container my-5">
                    <PurchaseConfirm stockSymbol={stockSymbolState} numShares={numSharesState} />
            </div>
        </div>
    )
};

export default Purchase;