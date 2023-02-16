import React from 'react';

const styles = {
  footer: {
    backgroundColor: "#FFFFFF"
  }
}

const Footer = () => {
  return (
    <div>
        <div className="container">
        <footer className="text-center text-black sticky-bottom" style={styles.footer}>
          <section className="mt-5">

            <div className="row text-center d-flex justify-content-center pt-5">

              <section className="mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <p>
                      Invest in Yourself. © 2020 Copyright: Centaur Investments
                    </p>
                  </div>
                </div>
              </section>
            </div>
            </section>
          </footer>
        </div>
    </div>
  );
};

export default Footer;
