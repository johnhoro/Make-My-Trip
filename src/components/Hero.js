import { useEffect, useState } from "react";
import data from "../dummy/data.json";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { connect } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const options = ["DEL", "MUM"];

function Hero(props) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {});
  let travelTags = data[3].travelTags;
  let flight = data[2].flight[0];
  console.log(value, inputValue);
  return (
    <>
      <section>
        <div className="container">
          <div className="hero-section">
            <div className="flex hero-nav">
              {travelTags.map((travel, i) => {
                return (
                  <div>
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
                      <li className="flex align-center ">
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
                  onMouseLeave={() => props.dispatch({ type: "isShowFrom" })}
                >
                  {props.showInputFrom ? (
                    <div onClick={() => props.dispatch({ type: "isShowFrom" })}>
                      <p>FROM</p>
                      <h1>{flight.from}</h1>
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
                  onMouseLeave={() => props.dispatch({ type: "isShowTo" })}
                >
                  {props.showInputTo ? (
                    <div onClick={() => props.dispatch({ type: "isShowTo" })}>
                      <p>TO</p>
                      <h1>{flight.to}</h1>
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

                <div className="border pointer">
                  {props.date ? (
                    <div>
                      <p>Departure</p>
                      <span className="flex item-end">
                        <h1>{flight.data}</h1>
                        <span className="date">Apr'22</span>
                      </span>
                      <span>Tuesday</span>
                    </div>
                  ) : (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DesktopDatePicker
                        label="For desktop"
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
                <div className="border pointer">
                  <p>RETURN</p>
                  <span>
                    Tap to add a return <br /> date for bigger discounts
                  </span>
                </div>
                <div className="border pointer">
                  <p> TRAVELLERS & CLASS</p>
                  <span className="flex item-end">
                    <h1>1</h1>
                    <span className="date">Traveller</span>
                  </span>
                  <span>Economy/Premium Economy</span>
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
                <NavLink className="NavLink" to="/flight">
                  <button>SEARCH</button>
                </NavLink>
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
    showInputTo: state.showInputTo,
    showInputFrom: state.showInputFrom,
  };
}

export default connect(mapStateToProps)(Hero);
