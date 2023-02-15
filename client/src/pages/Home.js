// Node Modules
import { React } from 'react';
// Utilities
import Auth from '../utils/auth';



const styles = {
  p: {
    fontSize: 24
  }
}




const Home = () => {
  
  if (Auth.loggedIn()) {
    return (
      <div className="container my-5">
        <table className="table m-4">
          <thead>
            <tr>
              <th scope="col">Stock</th>
              <th scope="col">Shares</th>
              <th scope="col">Share Price</th>
              <th scope="col">Purchase Price</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
  return (
    <div>
      <div className='container my-5'>
        <h3 className="font-size-16 display-6 text-center">At Centaur Investments we believe all your problems can be solved with enough money!</h3>
      </div>
      <div>
        <p className="container-md mt-4 text-center" style={styles.p}>If you're ready to change your life forever, hit that sign up button! You can find out more in the About section above.</p>
      </div>
      {/*<DataTest svcConfig={{"useRouteParms" : false, "encodeParms" : false}} svcParms={null} svcEndpoint={"https://data.alpaca.markets/v2/stocks/AAPL/trades/latest?feed=iex&currency=USD"} />*/}
    </div>
  );
};

export default Home;
