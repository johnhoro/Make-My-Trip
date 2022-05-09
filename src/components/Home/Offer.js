import data from "../../data/data.json";

function Offer() {
  let offer = data[0].offer;
  return (
    <>
      <section className="offer-section">
        <div className="container">
          <div className="offer">
            <header className="flex offer-header">
              <h3>Offers</h3>
              <nav className="flex align-center">
                <ul className="flex">
                  {[
                    `ALL OFFERS`,
                    `BANK OFFERS`,
                    `FLIGHTS`,
                    `HOTELS`,
                    `HOLIDAYS`,
                    `TRAINS`,
                  ].map((elm, i) => (
                    <li className="bold" key={i}>
                      {elm}
                    </li>
                  ))}
                </ul>
              </nav>
            </header>
            <div className="offer-box">
              {offer.map((elm, i) => {
                return (
                  <article className="offer-article" key={i}>
                    <div className="flex">
                      <div className="offer-img">
                        <img src={elm.image} alt="flight" />
                        <span>T&C's Apply</span>
                      </div>
                      <div className="offer-heading">
                        <span>{elm.name}</span>
                        <h4>{elm.description}</h4>
                        <p>{elm.discount}</p>
                        <div className="flex space-between offer-details ">
                          <span>{elm.coupon}</span>
                          <a href="/">{elm.details}</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-evenly"></div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Offer;
