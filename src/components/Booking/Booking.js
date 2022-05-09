import { connect } from "react-redux";
import { format } from "date-fns";
import UserForm from "./UserForm";
import FareDetail from "./FareDetail";

function Booking(props) {
  return (
    <>
      <div className="booking-header">
        <div className="container  flex space-between">
          <h1>Complete your booking</h1>
          <nav>
            <ul className="flex">
              {[
                `Flights Summary`,
                `Travel Insurance`,
                `Traveller Details`,
                `Seats & Meals`,
                `Add-ons`,
              ].map((elm, i) => {
                return <li key={i}>{elm}</li>;
              })}
            </ul>
          </nav>
        </div>
        <section className="booking-section">
          <div className="container flex space-between">
            <div className="booking-col1">
              <div className="booking-details margin-b5">
                <div className="flex space-between margin">
                  <div>
                    <h2>
                      {props.from}{" "}
                      <i className="fa-solid fa-arrow-right-long"></i>{" "}
                      {props.to}
                    </h2>
                    <p>
                      {format(new Date(props?.date || null), "E, MMM d yyyy")}{" "}
                    </p>
                  </div>
                  <div className="cancle">
                    <p>CANCELLATION FEES APPLY</p>
                    <span>View Fare Rules</span>
                  </div>
                </div>
                <div className="flex space-between margin">
                  <div>
                    <div className="indigo-center">
                      <img src={props.flightImage} alt="indigo" />
                      <span className="bold">{props.flightName}</span>
                      <span>6E-6261</span>
                    </div>
                  </div>
                  <p>
                    Economy <i className="fa-solid fa-angle-right"></i>
                    <span className="green bold"> SAVER </span>
                    <i className="fa-solid fa-circle-info"></i>
                  </p>
                </div>
                <div className="flex space-between flight-from">
                  <div className="">
                    <div className="flex">
                      <span className="bold">17:18 -</span>
                      <p>
                        <span className="bold"> {props.from}</span> . Indira
                        Gandhi International Airport, Terminal 1
                      </p>
                    </div>
                    <div className="flight-time">
                      <p className="green bold"> Time</p>
                    </div>
                    <div className="flex">
                      <span className="bold">19:45 -</span>
                      <p>
                        <span className="bold">{props.to}</span> . Indira Gandhi
                        International Airport, Terminal 1
                      </p>
                    </div>
                  </div>
                  <div className="flex w-45 flight-from-box2">
                    {Array.from(new Array(3)).map((_, i) => (
                      <div key={i}>
                        <span>Baggage</span>
                        <p className="bold">ADULT</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {props.returnDate && (
                <div className="booking-details">
                  <div className="flex space-between margin">
                    <div>
                      <h2>
                        {props.to}
                        <i className="fa-solid fa-arrow-right-long"></i>{" "}
                        {props.from}
                      </h2>
                      <p>
                        {format(
                          new Date(props?.returnDate || null),
                          "E, MMM d yyyy"
                        )}{" "}
                      </p>
                    </div>
                    <div className="cancle">
                      <p>CANCELLATION FEES APPLY</p>
                      <span>View Fare Rules</span>
                    </div>
                  </div>
                  <div className="flex space-between margin">
                    <div>
                      <div className="indigo-center">
                        <img src={props.returnFlightImage} alt="indigo" />
                        <span className="bold">{props.returnFlightName}</span>
                        <span>6E-6261</span>
                      </div>
                    </div>
                    <p>
                      Economy <i className="fa-solid fa-angle-right"></i>
                      <span className="green bold"> SAVER </span>
                      <i className="fa-solid fa-circle-info"></i>
                    </p>
                  </div>
                  <div className="flex space-between flight-from">
                    <div className="">
                      <div className="flex">
                        <span className="bold">17:18 -</span>
                        <p>
                          <span className="bold"> {props.to}</span> . Indira
                          Gandhi International Airport, Terminal 1
                        </p>
                      </div>
                      <div className="flight-time">
                        <p className="green bold"> Time</p>
                      </div>
                      <div className="flex">
                        <span className="bold">19:45 -</span>
                        <p>
                          <span className="bold">{props.from}</span> . Indira
                          Gandhi International Airport, Terminal 1
                        </p>
                      </div>
                    </div>
                    <div className="flex w-45 flight-from-box2">
                      {Array.from(new Array(3)).map((_, i) => (
                        <div key={i}>
                          <span>Baggage</span>
                          <p className="bold">ADULT</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <UserForm />
            </div>
            <FareDetail />
          </div>
        </section>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Booking);
