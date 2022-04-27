import { NavLink } from "react-router-dom";
import data from "../dummy/data.json";

function Flight() {
  let flights = data[2].flight;
  console.log(flights);
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
                <span>NEW Delhi,India</span>
              </li>
              <li>
                <p>TO</p>
                <span>MUMBAI,INDIA</span>
              </li>
              <li>
                <p>DEPART</p>
                <span>Tue,Apr 27,2022</span>
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
                <div className="flex space-between popular-filter">
                  <div>
                    <input type="checkbox" />
                    <span>Refundable Fares(41)</span>
                  </div>
                  <p>234324</p>
                </div>
                <div className="flex space-between popular-filter">
                  <div>
                    <input type="checkbox" />
                    <span>Refundable Fares(41)</span>
                  </div>
                  <p>234324</p>
                </div>
                <div className="flex space-between popular-filter">
                  <div>
                    <input type="checkbox" />
                    <span>Refundable Fares(41)</span>
                  </div>
                  <p>234324</p>
                </div>
                <div className="flex space-between popular-filter">
                  <div>
                    <input type="checkbox" />
                    <span>Refundable Fares(41)</span>
                  </div>
                  <p>234324</p>
                </div>
              </div>
              <div className="price-range">
                <h2>One Way Price</h2>
                <input type="range" width="100px" />
                <div className="flex space-between">
                  <span>$2283</span>
                  <span>$432</span>
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
                    <div className="flight-by-date select-box">
                      <p className="bold">Tue , Apr 26</p>
                      <p>$ 762</p>
                    </div>
                    <div className="flight-by-date">
                      <p>Tue , Apr 26</p>
                      <p>$ 762</p>
                    </div>
                    <div className="flight-by-date">
                      <p>Tue , Apr 26</p>
                      <p>$ 762</p>
                    </div>
                    <div className="flight-by-date">
                      <p>Tue , Apr 26</p>
                      <p>$ 762</p>
                    </div>
                    <div className="flight-by-date">
                      <p>Tue , Apr 26</p>
                      <p>$ 762</p>
                    </div>
                    <div className="flight-by-date">
                      <p>Tue , Apr 26</p>
                      <p>$ 762</p>
                    </div>
                    <div className="flight-by-date">
                      <p>Tue , Apr 26</p>
                      <p>$ 762</p>
                    </div>
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
                      <div className="all-flight">
                        <ul className="flex space-between">
                          <li className="indigo-center">
                            <img src={flight.image} alt="indigo" />
                            <span>{flight.name}</span>
                          </li>
                          <li>
                            <span className="bold">15:25</span>
                            <p>{flight.from}</p>
                          </li>
                          <li className="non-stop">
                            <p>02h 15m</p>
                            <span>Non stop</span>
                          </li>
                          <li>
                            <span className="bold">15:25</span>
                            <p>{flight.to}</p>
                          </li>
                          <li className="flight-price flex">
                            <img src="/rupee.png" alt="rupee" />
                            <p className="bold"> {flight.price}</p>
                          </li>
                        </ul>
                        <div className="flex justify-end">
                          <NavLink className="NavLink" to="/booking">
                            <button className="margin-r">Book Now</button>
                          </NavLink>
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

export default Flight;
