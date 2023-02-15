import axios from "axios";


/**
 * This function performs GET operations against an HTTP service supporting REST-type operations
 * and has support for both QueryString-based and Route-based parameters.
 * The 
 * @param {string} svcUrl - The URL including protocol and host/port name of the service endpoint
 * @param {Object} svcParms - An array of JSON objects representing the parameters and values to use. Uses format {parmKey:string, parmValue:string}
 * @param {Object} svcConfig - A JSON object with configurations to use for the service call. Currently has one parameter: useRouteParms: boolean
 */
export default async function getHTTPData(svcUrl, svcParms, svcConfig) {

    //Validate if a URL was passed for the service endpoint
    if( !svcUrl ) {
        //Problem - return error object
        return [{error: "No Service URL provider", addtlInfo : "Error in Custom Service Library"}];
    };

    //Set passed url as the final url base
    let finalUrl = svcUrl;

    console.log(svcConfig.useRouteParms, svcConfig.encodeParms, finalUrl)

    //Process parms and encode them to Final URL
    if ( svcParms ) {
        if(svcConfig.useRouteParms) {
            finalUrl = processRouteParms(finalUrl, svcParms, svcConfig.encodeParms);
        } else {
            finalUrl = processQueryStringParms(finalUrl, svcParms, svcConfig.encodeParms);
        };
    };
    
    console.log(finalUrl);

    //Call the api via axios
    const response = await axios.get(finalUrl);
    console.log("BANG");
    console.log(response.data);
    return response.data;
}

function processRouteParms(svcUrl, parms, encodeParms) {

    //Verify if there is a slash at the end of the route

    if (svcUrl.charAt(svcUrl.length - 1) !== "/") {
        svcUrl += "/"
    }
    
    let parmCount = 1; //Use this to trigger adding / characters to the query string

    parms.forEach((parm) => {
        
        if ( parmCount > 1 ) {
            svcUrl += "/";
        }
        
        svcUrl += (encodeParms ? encodeParm(parm.parmValue) : parm.parmValue);
        parmCount++;
    });

    return svcUrl;

}

function processQueryStringParms(svcUrl, parms, encodeParms) {

    //Verify if there is a question mark at the end of the route
    if (svcUrl.charAt(svcUrl.length - 1) !== "?") {
        svcUrl += "?"
    }

    let parmCount = 1; //Use this to trigger adding & characters to the query string

    parms.forEach((parm) => {
        
        if ( parmCount > 1 ) {
            svcUrl += "&";
        }
        
        svcUrl = svcUrl + parm.parmName + "=" + (encodeParms ? encodeParm(parm.parmValue) : parm.parmValue);
        parmCount++;
    });

    return svcUrl;

}

function encodeParm(parmToEncode) {
    return encodeURIComponent(parmToEncode);
}