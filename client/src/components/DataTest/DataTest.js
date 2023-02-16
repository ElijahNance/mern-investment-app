
import {useState, useEffect} from 'react';
import getHTTPData from '../../utils/SvcClient';

function DataTest({svcEndpoint, svcParms, svcConfig, numShares}) {

    const [svcData, setSvcData] = useState([]);

    useEffect(() => {
        async function fetchData(svcUrl, svcParms, svcConfig) {
            if(svcUrl.length > 0){
                const response = await getHTTPData(svcUrl, svcParms, svcConfig);
                setSvcData([response]);
            };
        };

        fetchData(svcEndpoint, svcParms, svcConfig);
    },[svcEndpoint, svcParms, svcConfig]
    )
    
    return (
        <>
        <table>
            <tbody>
                <tr>
                    <td>Service Endpoint:</td><td>{svcEndpoint}</td>
                </tr>
                <tr>
                    <td>Service Parms:</td><td>{JSON.stringify(svcParms)}</td>
                </tr>
                <tr>
                    <td>Fetch Config:</td><td>{JSON.stringify(svcConfig)}</td>
                </tr>
            </tbody>
        </table>
        <hr/>
        <table>
            <tbody>
                {svcData.map(rec =>
                    <tr key={1}>
                        <td>Stock Symbol:</td><td>{rec.symbol}</td>
                        <td>Stock Price:</td><td>{rec.trade.p}</td>
                        <td>Requested Shares:</td><td>{numShares}</td>
                        <td>Purchase Price:</td><td>{(numShares * rec.trade.p).toFixed(2)}</td>
                    </tr>)}
            </tbody>
        </table>
        </>
    );

};

export default DataTest;

