import React from "react";
import { Link } from 'react-router-dom';

function Purchase() {

    const renderConfirm = () => {
        return(
            <button>
                <Link to='/confirm'>Confirm Purchase</Link>
            </button>
        )
    }

    return (
        <div class="mb-3">
            <label for="  Select" class="form-label h4">Browse below:</label>
            <select id="stocks" class="form-select mb-1">
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
            <input id="numShares" class="form-control mb-1" type="text" placeholder="Number of Shares"></input>
            <button class="form-control bg-success-subtle" onClick={renderConfirm()}>Get Stock Quote</button>
        </div>
    )
};

export default Purchase;