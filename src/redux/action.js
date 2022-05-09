const fromDestination = (data) => {
  return {
    type: "from",
    payload: data,
  };
};

const toDestination = (data) => {
  return {
    type: "to",
    payload: data,
  };
};

const travelDate = (data) => {
  return {
    type: "date",
    payload: data,
  };
};
const travelReturnDate = (data) => {
  return {
    type: "returnDate",
    payload: data,
  };
};

const noOfPassenger = (data) => {
  return {
    type: "passenger",
    payload: data,
  };
};

const ticketPrice = (data) => {
  return {
    type: "price",
    payload: data,
  };
};
const flightName = (data) => {
  return {
    type: "flightName",
    payload: data,
  };
};

const flightImage = (data) => {
  return {
    type: "flightImage",
    payload: data,
  };
};

const returnTicketPrice = (data) => {
  return {
    type: "returnPrice",
    payload: data,
  };
};
const returnFlightName = (data) => {
  return {
    type: "returnFlightName",
    payload: data,
  };
};

const returnFlightImage = (data) => {
  return {
    type: "returnFlightImage",
    payload: data,
  };
};

export {
  fromDestination,
  toDestination,
  travelDate,
  travelReturnDate,
  noOfPassenger,
  ticketPrice,
  flightName,
  flightImage,
  returnTicketPrice,
  returnFlightImage,
  returnFlightName,
};
