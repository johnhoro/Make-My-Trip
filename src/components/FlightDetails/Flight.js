import FlightHeader from "./FlightHeader";
import Filter from "./Filter";
import FlightList from "./FlightList";

function Flight() {
  return (
    <>
      <div className="flight-header">
        <FlightHeader />
        <section className="flight-main-section ">
          <div className="container flex space-between">
            <Filter />
            <FlightList />
          </div>
        </section>
      </div>
    </>
  );
}

export default Flight;
