import { connect } from "react-redux";
import { format } from "date-fns";

function FlightHeader(props) {
  return (
    <header className="container">
      <div className="flight-header-box flex space-between">
        <ul className="flex">
          <li>
            <p>TRIP TYPE</p>
            {!props.returnDate ? <span>One Way</span> : <span>Round Trip</span>}
          </li>
          <li>
            <p>FROM</p>
            <h4>{props.from}, India</h4>
          </li>
          <li>
            <p>TO</p>
            <span>{props.to}, India</span>
          </li>
          <li>
            <p>DEPART</p>
            <span>{format(new Date(props.date || null), "E, MMM d yyyy")}</span>
          </li>
          <li>
            <p>RETURN</p>
            {props.returnDate ? (
              <span>
                {format(new Date(props?.returnDate || null), "E, MMM d yyyy")}
              </span>
            ) : (
              <span>Select Return</span>
            )}
          </li>
          <li>
            <p>PASSENGER & CLASS</p>
            <span>{props.passenger} Adult, Economy</span>
          </li>
        </ul>
        <button>SEARCH</button>
      </div>
      <div className="select-fare1 flex align-center">
        <p>Fare Type:</p>
        <ul className="flex">
          <li className="flex align-center color">
            <input type="checkbox" name="checkbox" value="checked" />{" "}
            <p>Regular</p>
          </li>
          <li className="flex align-center color">
            <input type="checkbox" name="checkbox" value="checked" />{" "}
            <p>
              Armed Forces <span className="red">NEW</span>
            </p>
          </li>
          <li className="flex align-center color">
            <input type="checkbox" name="checkbox" value="checked" />{" "}
            <p>Student </p>
          </li>
          <li className="flex align-center color">
            <input type="checkbox" name="checkbox" value="checked" />{" "}
            <p>Senior Citizen</p>
          </li>
          <li className="flex align-center color">
            <input type="checkbox" name="checkbox" value="checked" />{" "}
            <p>Double Seat</p>
          </li>
        </ul>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    passenger: state.passenger,
    returnDate: state.returnDate,
    date: state.date,
    to: state.to,
    from: state.from,
  };
}

export default connect(mapStateToProps)(FlightHeader);
