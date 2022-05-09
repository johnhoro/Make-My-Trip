import { connect } from "react-redux";

function FareDetail(props) {
  return (
    <div className="booking-col2">
      <h2>Fare Summary</h2>
      <ul>
        <li className="flex space-between">
          <div>
            <i className="fa-solid fa-circle-plus"></i>{" "}
            <span className="bold">Base Fare</span>
          </div>
          {props.returnDate ? (
            <p>
              ₹{props.price + props.returnPrice} * {props.passenger}
            </p>
          ) : (
            <p>
              ₹{props.price} * {props.passenger}
            </p>
          )}
        </li>
        <li className="flex space-between">
          <div>
            <i className="fa-solid fa-circle-plus"></i>
            <span className="bold"> Fee & Surcharges</span>
          </div>
          <p>₹1000</p>
        </li>
        <li className="flex space-between">
          <div>
            <i className="fa-solid fa-circle-minus"></i>
            <span className="bold"> Other Services</span>
          </div>
          <p>₹0</p>
        </li>
      </ul>
      <div className="flex space-between total-fare">
        <p className="bold">Total Amount</p>
        {props.returnDate ? (
          <p className="bold">
            ₹
            {Number(props.price + props.returnPrice) * Number(props.passenger) +
              1000}
          </p>
        ) : (
          <p className="bold">
            ₹{Number(props.price) * Number(props.passenger) + 1000}
          </p>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    passenger: state.passenger,
    price: state.price,
    returnPrice: state.returnPrice,
    returnDate: state.returnDate,
  };
}

export default connect(mapStateToProps)(FareDetail);
