const initialState = {
  from: "",
  to: "",
  date: "",
  returnDate: "",
  passenger: "",
  price: 0,
  flightName: "",
  flightImage: "",
  returnPrice: 0,
  returnFlightName: "",
  returnFlightImage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "from":
      return { ...state, from: action.payload };
    case "to":
      return { ...state, to: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "returnDate":
      return { ...state, returnDate: action.payload };
    case "passenger":
      return { ...state, passenger: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "flightName":
      return { ...state, flightName: action.payload };
    case "flightImage":
      return { ...state, flightImage: action.payload };
    case "returnPrice":
      return { ...state, returnPrice: action.payload };
    case "returnFlightName":
      return { ...state, returnFlightName: action.payload };
    case "returnFlightImage":
      return { ...state, returnFlightImage: action.payload };
    case "updateState": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
