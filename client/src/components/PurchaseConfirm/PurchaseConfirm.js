import { React, useState, useEffect } from 'react';
import getHTTPData from '../../utils/SvcClient';
import { useMutation } from '@apollo/client';
import { ADD_STOCK } from '../../utils/mutations';

function PurchaseConfirm({ stockSymbol, numShares }) {

    
    
    //const baseUrl = "http://localhost:3001";
    const baseUrl=window.location.href.split("/purchase")[0];
    const svcEndpoint = baseUrl + "/api/stockprice?stocksymbol=" + stockSymbol;
    console.log("Service Endpoint:", svcEndpoint);

    const svcParms = null;
    const svcConfig = {
        "useRouteParms": false,
        "encodeParms": false
    };

    const [svcData, setSvcData] = useState([]);
    const [warningMessage, setWarningMessage] = useState("");

    const [addStock, {data, error}] = useMutation(ADD_STOCK);

    useEffect(() => {
        async function fetchData(svcUrl, svcParms, svcConfig) {
            if (svcUrl.length > 0) {
                const response = await getHTTPData(svcUrl, svcParms, svcConfig);
                console.log("Service Data", response);
                setSvcData(response);
            };
        };

        fetchData(svcEndpoint, svcParms, svcConfig);
    }, [stockSymbol, numShares]

    )

    const completePurchase = () => {
        console.log("Stock Symbol before confirm", stockSymbol);

        if (typeof stockSymbol === "undefined" || stockSymbol.trim().toLowerCase() === "select a stock" || stockSymbol==="") {
            console.log("No Stock To Purchase");
            setWarningMessage("Please select a Stock from the List");
            return;
        }
        else if (numShares === 0 || numShares === "") {
            console.log("No Shares To Purchase");
            setWarningMessage("Number of Shares must be at least 1");
            return;
        }
        else {
            setWarningMessage("");
        }

        console.log("Running Stock Mutation");

        addStock({
            variables: {
                "stockId": "685",
                "stockName": stockSymbol,  
                "price": svcData.trade.p.toString(),
                "shares": parseInt(numShares.toString()),
                "userID": "63eba8944b5d01625fe12ca1" //Cannot figure out where to get this from
            }
        })

        console.log("Stock Mutation Ran");
        console.log(error);


    }

    return (
        <>
            <h3 className='text-center'>Confirm Purchase</h3>
            <p>Stock Symbol: {svcData.symbol}</p>
            <p>Number of Shares: {typeof svcData.trade !== "undefined" ? numShares : ""}</p>
            <p>Price Per Share: {typeof svcData.trade !== "undefined" ? svcData.trade.p : ""}</p>
            <p>Total Purchase Cost: {typeof svcData.trade !== "undefined" ? (svcData.trade.p * numShares) : ""}</p>
            <p>{warningMessage}</p>
            <button className="form-control bg-success-subtle" onClick={completePurchase}>Complete Purchase</button>
        </>
    );

};

export default PurchaseConfirm;

