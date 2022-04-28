const initialState = {
  from: "",
  to: "",
  date: "",
  passenger: 1,
  price: 0,
  flightName: "",
  flightImage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "from":
      return { ...state, from: action.payload };
    case "to":
      return { ...state, to: action.payload };
    case "date":
      return { ...state, date: action.payload };
    case "passenger":
      return { ...state, passenger: action.payload };
    case "price":
      return { ...state, price: action.payload };
    case "flightName":
      return { ...state, flightName: action.payload };
    case "flightImage":
      return { ...state, flightImage: action.payload };
    default:
      return state;
  }
}

export default reducer;
