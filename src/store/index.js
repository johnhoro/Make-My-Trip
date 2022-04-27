import { legacy_createStore } from "redux";

function reducer(
  state = { showInputTo: true, showInputFrom: true, date: true },
  action
) {
  switch (action.type) {
    case "isShowFrom":
      return { ...state, showInputFrom: !state.showInputFrom };
    case "isShowTo":
      return { ...state, showInputTo: !state.showInputTo };
    case "date":
      return { ...state, date: !state.date };
    default:
      return state;
  }
}

let store = legacy_createStore(reducer);
console.log(store);

export default store;
