import { useHistory } from "react-router-dom";
import data from "../data/data.json";
import { connect } from "react-redux";
import { format } from "date-fns";
import { ticketPrice } from "../redux/action";
import { flightImage } from "../redux/action";
import { flightName } from "../redux/action";

function Flight(props) {
  let flights = data[2].flight;
  const history = useHistory();

  if (!(props.from && props.to && props.date)) {
    history.push("/");
  }

  const bookNowHandler = (price, name, image) => {
    props.dispatch(ticketPrice(price));
    props.dispatch(flightName(name));
    props.dispatch(flightImage(image));
    history.push("/booking");
  };

  return (
    <>
      <header className="flight-header">
        <div className="container">
          <div className="flight-header-box flex space-between">
            <ul className="flex">
              <li>
                <p>TRIP TYPE</p>
                <span>One Way</span>
              </li>
              <li>
                <p>FROM</p>
                <span>{props.from}</span>
              </li>
              <li>
                <p>TO</p>
                <span>{props.to}</span>
              </li>
              <li>
                <p>DEPART</p>
                <span>{format(props.date || new Date(), "E, MMM d yyyy")}</span>
              </li>
              <li>
                <p>RETURN</p>
                <span>Select Return</span>
              </li>
              <li>
                <p>PASSENGER & CLASS</p>
                <span>1 Adult,Economy</span>
              </li>
            </ul>
            <button>SEARCH</button>
          </div>
        </div>
        <section className="flight-main-section ">
          <div className="container flex space-between">
            <aside className="flight-col1">
              <div>
                <h2>Popular Filter</h2>
                {Array.from(new Array(7)).map((_, i) => (
                  <div className="flex space-between popular-filter">
                    <div>
                      <input type="checkbox" />
                      <span>Refundable Fares(41)</span>
                    </div>
                    <p>234324</p>
                  </div>
                ))}
              </div>
              <div className="price-range">
                <h2>One Way Price</h2>
                <input type="range" width="100px" />
                <div className="flex space-between">
                  <span>₹2283</span>
                  <span>₹432</span>
                </div>
              </div>
            </aside>
            <div className="flight-col2">
              <h1>Flights from New Delhi to Mumbai</h1>
              <div className="flight-col21">
                <div className="flight-by-date flex">
                  <div className="side-btn">
                    <i class="fa-solid fa-chevron-left"></i>
                  </div>
                  <div className="flight-by-date-box flex">
                    {Array.from(new Array(7)).map((_, i) => (
                      <div
                        className={`flight-by-date ₹{
                          i === 0 ? "select-box" : ""
                        }`}
                      >
                        <p className="bold">
                          {format(props.date || new Date(), "E, MMM d")}
                        </p>
                        <p>₹ 5055</p>
                      </div>
                    ))}
                  </div>
                  <div className="side-btn">
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="select-flight">
                  <ul className="flex space-between">
                    <li className="bold">Sorted By:</li>
                    <li>Departure</li>
                    <li>Duration</li>
                    <li>Arrival</li>
                    <li className="bold">Price</li>
                  </ul>
                </div>
                <div className="select-flight-box">
                  {flights.map((flight, i) => {
                    return (
                      <div className="all-flight" key={i}>
                        <ul className="flex space-between">
                          <li className="indigo-center">
                            <img src={flight.image} alt="indigo" />
                            <span>{flight.name}</span>
                          </li>
                          <li>
                            <span className="bold">15:25</span>
                            <p>{props.from}</p>
                          </li>
                          <li className="non-stop">
                            <p>02h 15m</p>
                            <span>Non stop</span>
                          </li>
                          <li>
                            <span className="bold">15:25</span>
                            <p>{props.to}</p>
                          </li>
                          <li className="flight-price flex">
                            <img src="/rupee.png" alt="rupee" />
                            <p className="bold"> {flight.price}</p>
                          </li>
                        </ul>
                        <div className="flex justify-end">
                          <button
                            className="margin-r"
                            onClick={() =>
                              bookNowHandler(
                                flight.price,
                                flight.name,
                                flight.image,
                                flight.from,
                                flight.to
                              )
                            }
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

function mapStateToProps(state) {
  return {
    from: state.from,
    to: state.to,
    date: state.date,
  };
}

export default connect(mapStateToProps)(Flight);
