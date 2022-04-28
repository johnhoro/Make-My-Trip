import { useState } from "react";
import data from "../data/data.json";
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
  noOfPassenger,
} from "../redux/action";

const options = ["DEL", "MUM", "PNP", "SMK", "KUK"];
const traveller = [1, 2, 3, 4];

function Hero(props) {
  const [isShowFrom, setIsShowFrom] = useState(true);
  const [isShowTo, setIsShowTo] = useState(true);
  const [isShowTravlers, setIsShowTravelers] = useState(true);
  const [isShowDate, setIsShowDate] = useState(true);

  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  const [value1, setValue1] = useState(options[1]);
  const [inputValue1, setInputValue1] = useState("");

  const [value2, setValue2] = useState(traveller[0]);
  const [inputValue2, setInputValue2] = useState("");

  const [date, setDate] = useState(new Date());
  let ans = format(date, "MMM d E yyyy");
  console.log(date, ans);

  const history = useHistory();

  let travelTags = data[3].travelTags;

  const searchHandler = (e) => {
    if (value && value1 && date) {
      props.dispatch(fromDestination(value));
      props.dispatch(toDestination(value1));
      props.dispatch(travelDate(date));
      props.dispatch(noOfPassenger(value2));

      history.push("/flight");
    }

    return;
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
                    <i class={travel.tag}></i>
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
                      <h1>{value}</h1>
                      <span>DEL,Delhi Airport India</span>
                    </div>
                  ) : (
                    <Autocomplete
                      fullWidth
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
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
                      <h1>{value1}</h1>
                      <span>MUM,Mumbai Airport India</span>
                    </div>
                  ) : (
                    <Autocomplete
                      fullWidth
                      value={value1}
                      onChange={(event, newValue) => {
                        setValue1(newValue);
                      }}
                      inputValue={inputValue1}
                      onInputChange={(event, newInputValue) => {
                        setInputValue1(newInputValue);
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
                        <h1>{format(date, "d")}</h1>
                        <span className="date">
                          {" "}
                          {format(date, "MMM")} {format(date, "yyyy")}
                        </span>
                      </span>
                      <span>{format(date, "eeee")}</span>
                    </div>
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        value={date}
                        minDate={new Date("2017-01-01")}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  )}
                </div>
                <div className="border pointer return-box ">
                  <p>RETURN</p>
                  <span>
                    Tap to add a return <br /> date for bigger discounts
                  </span>
                </div>
                <div
                  className="border pointer w-170"
                  onMouseLeave={() => setIsShowTravelers(true)}
                >
                  {isShowTravlers ? (
                    <div onClick={() => setIsShowTravelers(false)}>
                      <p> TRAVELLERS & CLASS</p>
                      <span className="flex item-end">
                        <h1>{value2}</h1>
                        <span className="date">Traveller</span>
                      </span>
                      <span>Economy/Premium Economy</span>
                    </div>
                  ) : (
                    <Autocomplete
                      fullWidth
                      value={value2}
                      onChange={(event, newValue) => {
                        setValue2(newValue);
                      }}
                      inputValue={inputValue2}
                      onInputChange={(event, newInputValue) => {
                        setInputValue2(newInputValue);
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
                      Benguluru <i class="fa-solid fa-arrow-right"></i>{" "}
                      Singapure
                    </li>
                    <li>
                      Mumbai <i class="fa-solid fa-arrow-right"></i> Bangkok
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search-btn">
                <button onClick={searchHandler}>SEARCH</button>
                <div className="flex align-center">
                  <i class="fa-solid fa-angles-down"></i>
                  <p>Explore More</p>
                  <i class="fa-solid fa-angles-down"></i>
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
  };
}

export default connect(mapStateToProps)(Hero);
