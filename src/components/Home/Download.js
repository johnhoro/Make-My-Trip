import data from "../../data/data.json";

function Download() {
  let download = data[1].download;
  return (
    <>
      <section className="download-section">
        <div className="container">
          <article>
            <h3>{download.name}</h3>
            <p>{download.description}</p>
            <div className="download-box">
              <div className="download-box1 flex">
                <img src="/online-shop.png" alt="shop" />
                <div>
                  <p>{download.useWelcomeCode}</p>
                  <form className="enter-no-form">
                    <input type="number" placeholder="Enter Mobile Number" />
                    <button>{download.getApp}</button>
                  </form>
                </div>
              </div>
              <div className="download-box2">
                <p>{download.moreWays}</p>
                <div className="flex">
                  <img src={download.playStoreImg} alt="store-logo" />
                  <img src={download.qrImage} alt="scan" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Download;
