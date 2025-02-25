import "../css/SpecialFood.css"

export function SpecialFood() {
    return (
      <>
        <div className="special-offer-main-div">
          <div className="special-first-div">
            <h2>WELCOME FRESHEAT</h2>
            <h1>TODAY SPECIAL FOOD</h1>
            <h3>Limits Time Offer</h3>
            <button>ORDER NOW</button>
          </div>
          <div className="banner-container">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/banner/bannerThumb1_2.png"
              className="animated-banner"
            />
          </div>
        </div>
      </>
    );
}