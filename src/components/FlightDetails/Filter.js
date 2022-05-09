function Filter() {
  return (
    <aside className="flight-col1">
      <div>
        <h2>Popular Filter</h2>
        {Array.from(new Array(7)).map((_, i) => (
          <div className="flex space-between popular-filter" key={i}>
            <div>
              <input type="checkbox" />
              <span>Refundable Fares(41)</span>
            </div>
            <p>234324</p>
          </div>
        ))}
      </div>
      <div className="price-range">
        <h2>One Way Price</h2>
        <input type="range" width="100px" />
        <div className="flex space-between">
          <span>₹2283</span>
          <span>₹432</span>
        </div>
      </div>
    </aside>
  );
}

export default Filter;
