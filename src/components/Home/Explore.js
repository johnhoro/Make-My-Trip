import data from "../../data/data.json";

function Explore() {
  let flights = data[4].internationalFlight;
  return (
    <>
      <section>
        <div className="container">
          <div className="flex align-center trip-ideas">
            <div className="trip-box">
              <i className="fa-solid fa-suitcase-rolling"></i>
              <span>Trip ideas</span>
            </div>
            <div className="trip-box flex border">
              <i className="fa-solid fa-image"></i>
              <div>
                <span>TripMoney New</span>
                <p>Loan Creadit and More</p>
              </div>
            </div>
            <div className="trip-box flex bg-color border">
              <i className="fa-solid fa-jet-fighter-up"></i>
              <div>
                <span>Explore International Flights</span>
                <p className="green">
                  Cheapest Flights to Paris,Bali,Tokyo & more
                </p>
              </div>
            </div>
            <div className="trip-box border">
              <i className="fa-solid fa-location-dot"></i>
              <span>Nearby Getaways ideas</span>
            </div>
            <div className="trip-box border">
              <i className="fa-solid fa-gift"></i>
              <span>Gift Cards</span>
            </div>
          </div>
        </div>
      </section>
      <div className="container flight">
        {flights.map((elm, i) => {
          return (
            <div className="flight-box" key={i}>
              <i className={elm.tag}></i>
              <div className="flex column">
                <h2>{elm.name}</h2>
                <span>{elm.book}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Explore;
