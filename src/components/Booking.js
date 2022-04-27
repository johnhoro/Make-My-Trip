function Booking() {
  return (
    <>
      <header className="booking-header">
        <div className="container  flex space-between">
          <h1>Complete your booking</h1>
          <nav>
            <ul className="flex">
              {[
                `Flights Summary`,
                `Travel Insurance`,
                `Traveller Details`,
                `Seats & Meals`,
                `Add-ons`,
              ].map((elm, i) => {
                return <li>{elm}</li>;
              })}
            </ul>
          </nav>
        </div>
        <section className="booking-section">
          <div className="container flex space-between">
            <div className="booking-col1">
              <div className="booking-details">
                <div className="flex space-between margin">
                  <div>
                    <h2>
                      New Delhi <i class="fa-solid fa-arrow-right-long"></i>{" "}
                      Mumbai
                    </h2>
                    <p>Tuesday,Apr 26 </p>
                  </div>
                  <div className="cancle">
                    <p>CANCELLATION FEES APPLY</p>
                    <span>View Fare Rules</span>
                  </div>
                </div>
                <div className="flex space-between margin">
                  <div>
                    <div className="indigo-center">
                      <img
                        src="https://logodix.com/logo/831606.png"
                        alt="indigo"
                      />
                      <span className="bold">IndiGo</span>
                      <span>6E-6261</span>
                    </div>
                  </div>
                  <p>
                    Economy <i class="fa-solid fa-angle-right"></i>
                    <span className="green bold"> SAVER </span>
                    <i class="fa-solid fa-circle-info"></i>
                  </p>
                </div>
                <div className="flex space-between flight-from">
                  <div className="">
                    <div className="flex">
                      <span className="bold">19:45 -</span>
                      <p>
                        <span className="bold"> New Delhi</span> . Indira Gandhi
                        International Airport, Terminal 1
                      </p>
                    </div>
                    <div className="flight-time">
                      <p className="green bold"> Time</p>
                    </div>
                    <div className="flex">
                      <span className="bold">19:45 -</span>
                      <p>
                        <span className="bold">New Delhi</span> . Indira Gandhi
                        International Airport, Terminal 1
                      </p>
                    </div>
                  </div>
                  <div className="flex w-45 flight-from-box2">
                    <div>
                      <span>Baggage</span>
                      <p className="bold">ADULT</p>
                    </div>
                    <div>
                      <span>Baggage</span>
                      <p className="bold">ADULT</p>
                    </div>
                    <div>
                      <span>Baggage</span>
                      <p className="bold">ADULT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="traveller-section">
                <h2>Traveller Details</h2>
                <div className="flex space-between">
                  <div className="flex align-center">
                    <i class="fa-solid fa-circle-user"></i>
                    <p>
                      Log in to view your
                      <span className="bold">
                        {" "}
                        saved traveller list, unlock amazing deals
                      </span>
                      & much more!
                    </p>
                  </div>
                  <h3>LOGIN NOW</h3>
                </div>
                <div className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-user"></i>
                    <span className="bold">ADULT (12 yrs+)</span>
                  </div>
                  <p>
                    1/1 <span>added</span>
                  </p>
                </div>
                <form className="user-details-form">
                  <div className="form-control">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="flex">
                    <div>
                      <input type="checkbox" />
                      <span>MALE</span>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <span>FEMALE</span>
                    </div>
                  </div>
                  <div className="form-control">
                    <input type="number" placeholder="Mobile No" />
                    <input type="email" placeholder="Email" />
                  </div>
                  <button>CONTINUE</button>
                </form>
              </div>
            </div>
            <div className="booking-col2">
              <h2>Fare Summary</h2>
              <ul>
                <li className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-plus"></i>{" "}
                    <span className="bold">Base Fare</span>
                  </div>
                  <p>$543</p>
                </li>
                <li className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-plus"></i>
                    <span className="bold"> Fee & Surcharges</span>
                  </div>
                  <p>$543</p>
                </li>
                <li className="flex space-between">
                  <div>
                    <i class="fa-solid fa-circle-minus"></i>
                    <span className="bold"> Other Services</span>
                  </div>
                  <p>$543</p>
                </li>
              </ul>
              <div className="flex space-between total-fare">
                <p className="bold">Total Amount</p>
                <p className="bold">$543</p>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
export default Booking;
