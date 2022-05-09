import { useEffect, useState } from "react";
import data from "../../data/data.json";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { connect } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { format } from "date-fns";

import {
  fromDestination,
  toDestination,
  travelDate,
  travelReturnDate,
  noOfPassenger,
} from "../../redux/action";

const options = ["New Delhi", "Mumbai", "Bengaluru", "Chandigarh", "Jharkhand"];
const traveller = [1, 2, 3, 4];

function Hero(props) {
  const [isShowFrom, setIsShowFrom] = useState(true);
  const [isShowTo, setIsShowTo] = useState(true);
  const [isShowTravlers, setIsShowTravelers] = useState(true);
  const [isShowDate, setIsShowDate] = useState(true);
  const [isShowReturnDate, setIsShowReturnDate] = useState(true);
  const [isShowReturnDate1, setIsShowReturnDate1] = useState(false);

  const [from, setFrom] = useState(options[0]);
  const [fromInputValue, setFromInputValue] = useState(options[0]);

  const [to, setTo] = useState(options[1]);
  const [toInputValue, setToInputValue] = useState("");

  const [date, setDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState("");

  const [passenger, setPassenger] = useState(traveller[0]);
  const [passengerInputValue, setPassengerInputValue] = useState(traveller[0]);

  const history = useHistory();

  let travelTags = data[3].travelTags;

  useEffect(() => {
    const ls = localStorage.getItem("flightInfo");
    if (ls) {
      const { from, to, date, returnDate, passenger } = JSON.parse(ls);

      setFrom(from);
      setTo(to);
      setDate(date || new Date());
      setReturnDate(returnDate || "");
      setPassenger(passenger);
      if (returnDate) {
        setIsShowReturnDate1(true);
      }
    }
  }, []);

  const searchHandler = (e) => {
    localStorage.setItem(
      "flightInfo",
      JSON.stringify({
        from,
        to,
        passenger,
        date,
        returnDate,
      })
    );
    if (from && to && date) {
      props.dispatch(fromDestination(from));
      props.dispatch(toDestination(to));
      props.dispatch(travelDate(date));
      props.dispatch(travelReturnDate(returnDate));
      props.dispatch(noOfPassenger(passenger));
      console.log("Calling");
      history.push("/flight");
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="hero-section">
            <div className="flex hero-nav">
              {travelTags.map((travel, i) => {
                return (
                  <div key={i}>
                    <i className={travel.tag}></i>
                    <p>{travel.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="hero-body">
              <nav className="flex space-between">
                <ul className="flex">
                  {[`ONEWAY`, `ROUND TRIP`, `MULTI CITY`].map((elm, i) => {
                    return (
                      <li className="flex align-center " key={i}>
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="checked"
                        />
                        <p>{elm}</p>
                      </li>
                    );
                  })}
                </ul>
                <p>Book International and Domestic Flights</p>
              </nav>
              <div className="flex flight-search">
                <div
                  className="w-300 pointer"
                  onMouseLeave={() => setIsShowFrom(true)}
                >
                  {isShowFrom ? (
                    <div onClick={() => setIsShowFrom(false)}>
                      <p>FROM</p>
                      <h1>{from}</h1>
                      <span>DEL,Delhi Airport India</span>
                    </div>
                  ) : (
                    <Autocomplete
                      fullWidth
                      value={from}
                      onChange={(event, newValue) => {
                        setFrom(newValue);
                      }}
                      inputValue={fromInputValue}
                      onInputChange={(event, newInputValue) => {
                        setFromInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options}
                      sx={{ padding: 0 }}
                      renderInput={(params) => (
                        <TextField {...params} label="" />
                      )}
                    />
                  )}
                </div>

                <div
                  className="w-300 border pointer"
                  onMouseLeave={() => setIsShowTo(true)}
                >
                  {isShowTo ? (
                    <div onClick={() => setIsShowTo(false)}>
                      <p>TO</p>
                      <h1>{to}</h1>
                      <span>MUM,Mumbai Airport India</span>
                    </div>
                  ) : (
                    <Autocomplete
                      fullWidth
                      value={to}
                      onChange={(event, newValue) => {
                        setTo(newValue);
                      }}
                      inputValue={toInputValue}
                      onInputChange={(event, newInputValue) => {
                        setToInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options}
                      sx={{ padding: 0 }}
                      renderInput={(params) => (
                        <TextField {...params} label="" />
                      )}
                    />
                  )}
                </div>

                <div
                  className="border pointer w-150"
                  onMouseLeave={() => setIsShowDate(true)}
                >
                  {isShowDate ? (
                    <div onClick={() => setIsShowDate(false)}>
                      <p>Departure</p>
                      <span className="flex item-end">
                        <h1>{format(new Date(date || null), "d")}</h1>
                        <span className="date">
                          {format(new Date(date || null), "MMM")}{" "}
                          {format(new Date(date || null), "yyyy")}
                        </span>
                      </span>
                      <span>{format(new Date(date || null), "eeee")}</span>
                    </div>
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        value={date}
                        minDate={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  )}
                </div>
                <div
                  className="border pointer return-box w-150"
                  onMouseLeave={() => setIsShowReturnDate(true)}
                >
                  {isShowReturnDate ? (
                    <div
                      onClick={() => {
                        setIsShowReturnDate(false);
                        setIsShowReturnDate1(true);
                      }}
                    >
                      <p>RETURN</p>
                      {isShowReturnDate1 && returnDate ? (
                        <div className="flex space-between">
                          <div>
                            <span className="flex item-end">
                              <h1>
                                {returnDate &&
                                  format(new Date(returnDate || null), "d")}
                              </h1>
                              <span className="date">
                                {returnDate &&
                                  format(new Date(returnDate || null), "MMM")}
                                {returnDate &&
                                  format(new Date(returnDate || null), "yyyy")}
                              </span>
                            </span>
                            <span>
                              {returnDate &&
                                format(new Date(returnDate || null), "eeee")}
                            </span>
                          </div>
                          <p
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsShowReturnDate1(false);
                              setReturnDate("");
                            }}
                          >
                            ❌
                          </p>
                        </div>
                      ) : (
                        <span>
                          Tap to add a return <br /> date for bigger discounts
                        </span>
                      )}
                    </div>
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        value={returnDate}
                        minDate={date}
                        onChange={(newValue) => {
                          setReturnDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  )}
                </div>
                <div
                  className="border pointer w-170"
                  onMouseLeave={() => setIsShowTravelers(true)}
                >
                  {isShowTravlers ? (
                    <div onClick={() => setIsShowTravelers(false)}>
                      <p> TRAVELLERS & CLASS</p>
                      <span className="flex item-end">
                        <h1>{passenger}</h1>
                        <span className="date">Traveller</span>
                      </span>
                      <span>Economy/Premium Economy</span>
                    </div>
                  ) : (
                    <Autocomplete
                      fullWidth
                      value={passenger}
                      onChange={(event, newValue) => {
                        setPassenger(newValue);
                      }}
                      inputValue={passengerInputValue}
                      onInputChange={(event, newInputValue) => {
                        setPassengerInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={traveller}
                      sx={{ padding: 0 }}
                      renderInput={(params) => (
                        <TextField {...params} label="" />
                      )}
                    />
                  )}
                </div>
              </div>
              <div className="flex space-between">
                <div className="select-fare flex">
                  <p>
                    Select A <br /> Fare Type:
                  </p>
                  <ul className="flex">
                    <li className="flex align-center ">
                      <input type="checkbox" name="checkbox" value="checked" />{" "}
                      <p>Regular Fares</p>
                    </li>
                    <li className="flex align-center">
                      <input type="checkbox" name="checkbox" value="checked" />{" "}
                      <p>
                        Armed Forces Fares <span className="red">NEW</span>
                      </p>
                    </li>
                    <li className="flex align-center">
                      <input type="checkbox" name="checkbox" value="checked" />{" "}
                      <p>Student Fares</p>
                    </li>
                    <li className="flex align-center">
                      <input type="checkbox" name="checkbox" value="checked" />{" "}
                      <p>Senior Citizen Fares</p>
                    </li>
                    <li className="flex align-center">
                      <input type="checkbox" name="checkbox" value="checked" />{" "}
                      <p>Double Seat Fares</p>
                    </li>
                  </ul>
                </div>
                <div className="flex trending align-center">
                  <span>Trending Searches:</span>
                  <ul className="flex">
                    <li>
                      Benguluru <i className="fa-solid fa-arrow-right"></i>{" "}
                      Singapure
                    </li>
                    <li>
                      Mumbai <i className="fa-solid fa-arrow-right"></i> Bangkok
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button onClick={searchHandler}>SEARCH</button>
                <div className="flex align-center">
                  <i className="fa-solid fa-angles-down"></i>
                  <p>Explore More</p>
                  <i className="fa-solid fa-angles-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function mapStateToProps(state) {
  return {
    from: state.from,
    to: state.to,
    date: state.date,
    returnDate: state.returnDate,
  };
}

export default connect(mapStateToProps)(Hero);
