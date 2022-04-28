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

export {
  fromDestination,
  toDestination,
  travelDate,
  noOfPassenger,
  ticketPrice,
  flightName,
  flightImage,
};
