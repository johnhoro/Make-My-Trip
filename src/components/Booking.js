import { useState } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

function Booking(props) {
  const [info, setInfo] = useState({
    firstName: [],
    lastName: [],
    email: [],
    number: [],
    gender: [],
  });

  const changeHandler = (e, i) => {
    const { name, value } = e.target;
    console.log(name, value);
    const clonedDetail = [...info[name]];
    clonedDetail[i] = value;
    setInfo({ ...info, [name]: clonedDetail });
  };

  const handleSubmit = (e) => {
    console.log(info.firstName, info);
    e.preventDefault();
    if (
      info.firstName.length === props.passenger &&
      info.lastName.length === props.passenger &&
      info.gender.length === props.passenger &&
      info.number.length > 0 &&
      info.email.length > 0
    )
      alert(`You Booking Successfull`);
  };

  return (
    <>
      <header className="booking-header">
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
              <div className="booking-details">
                <div className="flex space-between margin">
                  <div>
                    <h2>
                      {props.from} <i class="fa-solid fa-arrow-right-long"></i>
                      {props.to}
                    </h2>
                    <p>{format(props.date || new Date(), "E, MMM d yyyy")} </p>
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
                    Economy <i class="fa-solid fa-angle-right"></i>
                    <span className="green bold"> SAVER </span>
                    <i class="fa-solid fa-circle-info"></i>
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
                      <div>
                        <span>Baggage</span>
                        <p className="bold">ADULT</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="traveller-section">
                <h2>Traveller Details</h2>
                <div className="flex space-between">
                  <div className="flex align-center">
                    <i class="fa-solid fa-circle-user"></i>
                    <p>
                      Log in to view your
                      <span className="bold">
                        {" "}
                        saved traveller list, unlock amazing deals
                      </span>
                      & much more!
                    </p>
                  </div>
                  <h3>LOGIN NOW</h3>
                </div>
                <div className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-user"></i>
                    <span className="bold">ADULT (12 yrs+)</span>
                  </div>
                  <p>
                    1/1 <span>added</span>
                  </p>
                </div>
                <form className="user-details-form">
                  {Array.from(new Array(props.passenger)).map((_, i) => (
                    <div key={i} className="border-b margin-b padding-b">
                      <div className="form-control">
                        <input
                          name="firstName"
                          type="text"
                          value={info.firstName[i] || ""}
                          onChange={(e) => changeHandler(e, i)}
                          placeholder="First Name"
                        />
                        <input
                          name="lastName"
                          type="text"
                          value={info.lastName[i] || ""}
                          onChange={(e) => changeHandler(e, i)}
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="flex">
                        <div>
                          <input
                            name="gender"
                            type="radio"
                            checked={info.gender[i] === "male"}
                            value="male"
                            onClick={(e) => changeHandler(e, i)}
                          />
                          <span>MALE</span>
                        </div>
                        <div>
                          <input
                            name="gender"
                            type="radio"
                            checked={info.gender[i] === "female"}
                            value="female"
                            onClick={(e) => changeHandler(e, i)}
                          />
                          <span>FEMALE</span>
                        </div>
                      </div>
                      <div className="form-control">
                        <input
                          name="number"
                          type="number"
                          value={info.number[i] || ""}
                          onChange={(e) => changeHandler(e, i)}
                          placeholder="Mobile No"
                        />
                        <input
                          name="email"
                          type="email"
                          value={info.email[i] || ""}
                          onChange={(e) => changeHandler(e, i)}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  ))}
                  <button onClick={handleSubmit}>CONTINUE</button>
                </form>
              </div>
            </div>
            <div className="booking-col2">
              <h2>Fare Summary</h2>
              <ul>
                <li className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-plus"></i>{" "}
                    <span className="bold">Base Fare</span>
                  </div>
                  <p>
                    ₹{props.price} * {props.passenger}
                  </p>
                </li>
                <li className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-plus"></i>
                    <span className="bold"> Fee & Surcharges</span>
                  </div>
                  <p>₹1000</p>
                </li>
                <li className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-minus"></i>
                    <span className="bold"> Other Services</span>
                  </div>
                  <p>₹0</p>
                </li>
              </ul>
              <div className="flex space-between total-fare">
                <p className="bold">Total Amount</p>
                <p className="bold">
                  ₹{Number(props.price) * Number(props.passenger) + 1000}
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(Booking);
