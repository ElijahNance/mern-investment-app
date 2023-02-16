import { React,  } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER_STOCKS } from '../../utils/queries';

function Portfolio() {

    const {loading, error, data, refetch} = useQuery(QUERY_USER_STOCKS);

    if (loading) return 'Loading...';
    if(error) return `Error! ${error.message}`;

    console.log("Returned Data", data);
    // let keys = Object.keys(data.user.stocks);
    // console.log(keys);
    // console.log("user", data.user);

    //Run a second fetch to refresh the screen with new purchases when component is rendered
    const refreshView = () => refetch();
    refreshView();

    return (
        <table className="table m-4">
          <thead>
            <tr>
              <th scope="col">Stock</th>
              <th scope="col">Shares</th>
              <th scope="col">Share Price</th>
              <th scope="col">Purchase Price</th>
            </tr>
          </thead>
          <tbody>
          {data.user.stocks.map((item, index) =>
                    <tr key={index}>
                        <td>{item.stockName}</td>
                        <td>{item.shares}</td>
                        <td>${item.price}</td>
                        <td>${(item.price * item.shares).toFixed(2)}</td>
                    </tr>)}
          </tbody>
        </table>
    )


}

export default Portfolio;