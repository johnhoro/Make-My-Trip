import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import data from "../../data/data.json";
import { format } from "date-fns";

import {
  flightName,
  flightImage,
  ticketPrice,
  returnTicketPrice,
  returnFlightImage,
  returnFlightName,
} from "../../redux/action";

function FlightList(props) {
  const [toggleFlight1, setToggleFlight1] = useState(0);
  const [toggleFlight2, setToggleFlight2] = useState(0);

  let flights = data[2].flight;
  const history = useHistory();

  const selectfromHandler = (price, name, image) => {
    props.dispatch(ticketPrice(price));
    props.dispatch(flightName(name));
    props.dispatch(flightImage(image));
  };

  const selectReturnHandler = (price, name, image) => {
    props.dispatch(returnTicketPrice(price));
    props.dispatch(returnFlightName(name));
    props.dispatch(returnFlightImage(image));
  };

  useEffect(() => {
    selectfromHandler(
      flights[toggleFlight1].price,
      flights[toggleFlight1].name,
      flights[toggleFlight1].image,
      flights[toggleFlight1].from,
      flights[toggleFlight1].to
    );

    if (props.returnDate) {
      selectReturnHandler(
        flights[toggleFlight2].price,
        flights[toggleFlight2].name,
        flights[toggleFlight2].image,
        flights[toggleFlight2].from,
        flights[toggleFlight2].to
      );
    }
  });

  const bookNowHandler = () => {
    const returnInfo = props.returnDate ? flights[toggleFlight2] : {};
    console.log(returnInfo);
    localStorage.setItem(
      "flightInfo",
      JSON.stringify({
        ...props,
        ...flights[toggleFlight1],
        ...returnInfo,
      })
    );
    history.push("/booking");
  };

  const handleToggle = (type, id) => {
    switch (type) {
      case "flight1": {
        setToggleFlight1(id);
        break;
      }
      case "flight2": {
        setToggleFlight2(id);
        break;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div className="flight-col2">
      <h1>
        Flights from {props.from} to {props.to}
        {props.returnDate ? `, and back` : ``}
      </h1>
      {!props.returnDate ? (
        <div className="flex">
          <div className="side-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="flight-by-date-box w-100 flex">
            {Array.from(new Array(8)).map((_, i) => (
              <div
                key={i}
                className={`flight-by-date padding-1 ${
                  i === 0 ? "select-box" : ""
                }`}
              >
                <p className="bold">
                  {format(new Date(props.date || null), "E, MMM d")}
                </p>
                <span>₹ 5055</span>
              </div>
            ))}
          </div>
          <div className="side-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      ) : (
        ``
      )}

      <div className="flight-col21">
        <div className="position-relative flex space-between">
          <div
            className={`select-flight-box ${
              props.returnDate ? `w-48` : `w-100`
            }`}
          >
            <h3>
              <span className="bold"> {props.from} </span>{" "}
              <i className="fa-solid fa-arrow-right-long"></i>{" "}
              <span className="bold"> {props.to} </span>{" "}
              {format(new Date(props.date || null), "E, MMM d")}
            </h3>
            <div className="select-flight">
              <ul className="flex space-between">
                <li className="bold">Sorted By:</li>
                <li>Departure</li>
                <li>Duration</li>
                <li>Arrival</li>
                <li className="bold">Price</li>
              </ul>
            </div>
            {flights.map((flight, i) => {
              return (
                <div
                  key={i}
                  className={`all-flight pointer ${
                    props.returnDate
                      ? toggleFlight1 === i
                        ? `select-data`
                        : ``
                      : ``
                  }`}
                  onClick={() => {
                    handleToggle("flight1", i);
                    selectfromHandler(
                      flight.price,
                      flight.name,
                      flight.image,
                      flight.from,
                      flight.to
                    );
                  }}
                >
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
                    {!props.returnDate ? (
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
                    ) : (
                      <div className="customRadioBtn">
                        <div className="outer">
                          <div
                            className={i === toggleFlight1 ? `inner` : ``}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {props.returnDate && (
            <div className="select-flight-box w-48">
              <h3>
                <span className="bold"> {props.to} </span>{" "}
                <i className="fa-solid fa-arrow-right-long"></i>{" "}
                <span className="bold"> {props.from} </span>{" "}
                {format(new Date(props.returnDate || null), "E, MMM d")}
              </h3>
              <div className="select-flight">
                <ul className="flex space-between">
                  <li className="bold">Sorted By:</li>
                  <li>Departure</li>
                  <li>Duration</li>
                  <li>Arrival</li>
                  <li className="bold">Price</li>
                </ul>
              </div>
              {flights.map((flight, i) => {
                return (
                  <div
                    key={i}
                    className={`all-flight pointer ${
                      toggleFlight2 === i ? `select-data` : ``
                    }`}
                    onClick={() => {
                      handleToggle("flight2", i);

                      selectReturnHandler(
                        flight.price,
                        flight.name,
                        flight.image,
                        flight.from,
                        flight.to
                      );
                    }}
                  >
                    <ul className="flex space-between">
                      <li className="indigo-center">
                        <img src={flight.image} alt="indigo" />
                        <span>{flight.name}</span>
                      </li>
                      <li>
                        <span className="bold">15:25</span>
                        <p>{props.to}</p>
                      </li>
                      <li className="non-stop">
                        <p>02h 15m</p>
                        <span>Non stop</span>
                      </li>
                      <li>
                        <span className="bold">15:25</span>
                        <p>{props.from}</p>
                      </li>
                      <li className="flight-price flex">
                        <img src="/rupee.png" alt="rupee" />
                        <p className="bold"> {flight.price}</p>
                      </li>
                    </ul>
                    <div className="flex justify-end">
                      <div className="customRadioBtn">
                        <div className="outer">
                          <div
                            className={toggleFlight2 === i ? `inner ` : ``}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {!props.returnDate ? (
            ``
          ) : (
            <div className="journey-info flex space-between position-fixed w-70">
              <div className="journey-info-box w-30 border-r">
                <h6>Departure . {flights[toggleFlight1].name}</h6>
                <div className="flex space-between">
                  <div className="flex">
                    <img src={flights[toggleFlight1].image} alt="indigo" />
                    <div>
                      <p>07:20 - 09:35</p>
                      <span>Flight Details</span>
                    </div>
                  </div>
                  <p>₹ {flights[toggleFlight1].price}</p>
                </div>
              </div>
              {props.returnDate && (
                <div className="journey-info-box w-30 border-r">
                  <h6>Return . {flights[toggleFlight2].name}</h6>
                  <div className="flex space-between">
                    <div className="flex">
                      <img src={flights[toggleFlight2].image} alt="indigo" />
                      <div>
                        <p>07:20 - 09:35</p>
                        <span>Flight Details</span>
                      </div>
                    </div>
                    <p>₹ {flights[toggleFlight2].price}</p>
                  </div>
                </div>
              )}
              <div className="journey-info-box  flex space-between align-center padding-l">
                <div>
                  <h5>
                    ₹{" "}
                    {(flights[toggleFlight2].price +
                      flights[toggleFlight1].price) *
                      props.passenger}
                  </h5>
                  <span>Fare Details</span>
                </div>
                <div>
                  <button className="margin-l" onClick={bookNowHandler}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    from: state.from,
    to: state.to,
    date: state.date,
    returnDate: state.returnDate,
    passenger: state.passenger,
    flightImage: state.flightImage,
    flightName: state.flightName,
    price: state.price,
    returnPrice: state.returnPrice,
    returnFlightName: state.returnFlightName,
    returnFlightImage: state.returnFlightImage,
  };
}

export default connect(mapStateToProps)(FlightList);
