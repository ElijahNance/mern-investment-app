// Node Modules
import { React } from 'react';
// Utilities
import Auth from '../utils/auth';
import Portfolio from '../components/Portfolio/Portfolio';



const styles = {
  p: {
    fontSize: 24
  }
}




const Home = () => {
  
  if (Auth.loggedIn()) {
    return (
      <div className="container my-5">
        <Portfolio />
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
    </div>
  );
};

export default Home;
