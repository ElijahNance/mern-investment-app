import React from "react";
import Cash from './money.jpg';

const styles = {
    img: {
        marginLeft: "3%" 
    },
    p: {
        marginLeft: "3%",
        fontSize: 24
    }
}

function About() {
return (
    <div>
        <header className="ms-4 mt-2">
            <h1 className="font-size-16 display-6 text-center">About Centaur Investments</h1>
            <hr className=" container-md border border border-2 opacity-75"></hr>
        </header>
        <div className="d-flex justify-content-right">
        <img src={Cash} className="rounded float-right img-fluid" style={styles.img}></img>
        <p className="container-md mt-4 text-right" style={styles.p}>Investing in stocks can seem a little overwhelming. Centaur Investments was created to make it simple! With an easy-to-use interface, users can create an account and immediately start browsing available stocks to purchase. A ready-made portfolio with all shares and associated stocks they’ve invested in is then created for review. We take the complexity into our own hands to make the profits come easy. Get started today!</p>
        </div>
        
    </div>
)
};

export default About;