
import {useState, useEffect} from 'react';
import getHTTPData from '../../utils/SvcClient';

function DataTest({svcEndpoint, svcParms, svcConfig}) {

    const [svcData, setSvcData] = useState([]);

    useEffect(() => {
        async function fetchData(svcUrl, svcParms, svcConfig) {
            if(svcUrl.length > 0){
                const response = await getHTTPData(svcUrl, svcParms, svcConfig);
                setSvcData(response);
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
                    <tr key={rec.id}>
                        <td>User ID:</td><td>{rec.id}</td>
                        <td>Title:</td><td>{rec.title}</td>
                        <td>Completed:</td><td>{rec.completed}</td>
                    </tr>)}
            </tbody>
        </table>
        </>
    );

};

export default DataTest;

