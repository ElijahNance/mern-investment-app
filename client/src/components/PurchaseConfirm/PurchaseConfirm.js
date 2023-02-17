import { React, useState, useEffect } from 'react';
import getHTTPData from '../../utils/SvcClient';
import { useMutation } from '@apollo/client';
import { ADD_STOCK } from '../../utils/mutations';

const styles = {
    h3: {
        marginTop: '3%'
    }
}

function PurchaseConfirm({ stockSymbol, numShares }) {

    const baseUrl=window.location.href.split("/purchase")[0];
    const svcEndpoint = baseUrl + "/api/stockprice?stocksymbol=" + stockSymbol;

    const svcParms = null;
    const svcConfig = {
        "useRouteParms": false,
        "encodeParms": false
    };

    const [svcData, setSvcData] = useState([]);
    const [warningMessage, setWarningMessage] = useState("");
    const [confirmMessage, setConfirmMessage] = useState("");

    const [addStock, {data, error}] = useMutation(ADD_STOCK);

    useEffect(() => {
        async function fetchData(svcUrl, svcParms, svcConfig) {
            if (svcUrl.length > 0) {
                const response = await getHTTPData(svcUrl, svcParms, svcConfig);
                setSvcData(response);
            };
        };

        fetchData(svcEndpoint, svcParms, svcConfig);
    }, [stockSymbol, numShares]

    )

    const completePurchase = () => {

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
            setConfirmMessage("Return to the Home Page to see your stock!");
        }


        addStock({
            variables: {
                "stockId": "685",
                "stockName": stockSymbol,  
                "price": svcData.trade.p.toString(),
                "shares": parseInt(numShares.toString())
            }
        })
        
        console.log(error);


    }

    return (
        <>
            <h3 className='text-center'>Confirm Purchase</h3>
            <p>Stock Symbol: {svcData.symbol}</p>
            <p>Number of Shares: {typeof svcData.trade !== "undefined" ? numShares : ""}</p>
            <p>Price Per Share: {typeof svcData.trade !== "undefined" ? svcData.trade.p.toFixed(2) : ""}</p>
            <p>Total Purchase Cost: {typeof svcData.trade !== "undefined" ? (svcData.trade.p * numShares).toFixed(2) : ""}</p>
            <p>{warningMessage}</p>
            <button className="form-control bg-success-subtle" onClick={completePurchase}>Complete Purchase</button>
            <h3 className='text-center' style={styles.h3}>{confirmMessage}</h3>
        </>
    );

};

export default PurchaseConfirm;

