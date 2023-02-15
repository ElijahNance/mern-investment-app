import { React } from "react";
import { Link } from 'react-router-dom';


function Purchase() {

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null); 

    // useEffect(() => {
    //     fetch(`https://data.alpaca.markets/v2/stocks/AAPL/trades/latest?feed=iex&currency=USD`)
    //       .then(response => response.json())
    //       .then((usefulData) => {
    //         console.log(usefulData);
    //         setLoading(false);
    //         setData(usefulData);
    //       })
    //       .catch((e) => {
    //         console.error(`An error occurred: ${e}`)
    //       });
    //   }, []);

    // const renderConfirm = () => {
    //     return(
    //         <button>
    //             <Link to='/confirm'>Confirm Purchase</Link>
    //         </button>
    //     )
    // }

    return (
    <div>
        <h3 className='text-center'>Buy Stocks</h3>
        <div className="container my-5">
            <label for="  Select" className="form-label h4">Browse below:</label>
            <select id="stocks" className="form-select mb-1">
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
            <input id="numShares" className="form-control mb-1" type="text" placeholder="Number of Shares"></input>
            <button className="form-control bg-success-subtle">Get Stock Quote</button>
        </div>
        {/* <div>
            {loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
        </div> */}
    </div>
    )
};

export default Purchase;