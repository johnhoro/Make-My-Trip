import React, { useState } from "react";
import { connect } from "react-redux";

function UserForm(props) {
  const [info, setInfo] = useState([]);
  const [currentPassengerInfo, setCurrentPassengerInfo] = useState(1);

  const changeHandler = (e, i) => {
    const { name, value } = e.target;
    const passengerInfo = { ...info[i] };
    passengerInfo[name] = value;
    const clonedInfo = [...info];
    clonedInfo[i] = passengerInfo;
    setInfo(clonedInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify({ ...info }));
    alert(`You Booking Successfull`);
  };

  return (
    <div className="traveller-section">
      <h2>Traveller Details</h2>
      <div className="flex space-between">
        <div className="flex align-center">
          <i className="fa-solid fa-circle-user"></i>
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
          <i className="fa-solid fa-circle-user"></i>
          <span className="bold">ADULT (12 yrs+)</span>
        </div>
        <p>
          {currentPassengerInfo}/{props.passenger} <span>added</span>
        </p>
      </div>
      <form className="user-details-form">
        {Array.from(new Array(currentPassengerInfo)).map((_, i) => (
          <div key={i} className="border-b margin-b padding-b">
            <div className="form-control">
              <input
                name="firstName"
                type="text"
                value={info[i]?.firstName || ""}
                onChange={(e) => changeHandler(e, i)}
                placeholder="First Name"
              />
              <input
                name="lastName"
                type="text"
                value={info[i]?.lastName || ""}
                onChange={(e) => changeHandler(e, i)}
                placeholder="Last Name"
              />
            </div>
            <div className="flex">
              <div className="flex item-center">
                <div
                  className="customRadioBtn-box"
                  onClick={() => {
                    changeHandler(
                      {
                        target: { name: "gender", value: "male" },
                      },
                      i
                    );
                  }}
                >
                  <div className="outer-box">
                    <div
                      className={info[i]?.gender === "male" ? `inner-box` : ``}
                    ></div>
                  </div>
                </div>
                <span>MALE</span>
              </div>
              <div className="flex item-center margin-l">
                <div
                  className="customRadioBtn-box"
                  onClick={() => {
                    changeHandler(
                      {
                        target: { name: "gender", value: "female" },
                      },
                      i
                    );
                  }}
                >
                  <div className="outer-box">
                    <div
                      className={
                        info[i]?.gender === "female" ? `inner-box` : ``
                      }
                    ></div>
                  </div>
                </div>
                <span>Female</span>
              </div>
            </div>
            <div className="form-control">
              <input
                name="number"
                type="number"
                value={info[i]?.number || ""}
                onChange={(e) => changeHandler(e, i)}
                placeholder="Mobile No"
              />
              <input
                name="email"
                type="email"
                value={info[i]?.email || ""}
                onChange={(e) => changeHandler(e, i)}
                placeholder="Email"
              />
            </div>
          </div>
        ))}
        {currentPassengerInfo !== props.passenger ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              localStorage.setItem(
                "userInfo",
                JSON.stringify({
                  currentPassengerInfo,
                  info,
                })
              );
              setCurrentPassengerInfo(currentPassengerInfo + 1);
            }}
          >
            Add More Passenger
          </button>
        ) : null}

        <button onClick={handleSubmit}>CONTINUE</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    passenger: state.passenger,
  };
}
export default connect(mapStateToProps)(UserForm);
