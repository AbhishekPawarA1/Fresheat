import React, { useEffect, useRef } from "react";
import "../css/Popularfood.css";
import french from "../images/food/french.png"
import burger1 from "../images/food/burger1.png"
import rockandroll from "../images/food/rockandroll.png"

export function Popularfood() {
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);

  useEffect(() => {
    const headings = [headingRef1.current, headingRef2.current];

    function animateHeadings() {
      headings.forEach((heading) => {
        if (heading && isElementInViewport(heading)) {
          heading.classList.add("animated");
        }
      });
    }

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    window.addEventListener("scroll", animateHeadings);
    animateHeadings();

    return () => {
      window.removeEventListener("scroll", animateHeadings);
    };
  }, []);
  return (
    <div className="popularfood-dev">
      <h2 ref={headingRef1} className="heading-animation">
        <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" />{" "}
        BEST FOOD{" "}
        <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" />
      </h2>
      <h1 ref={headingRef2} className="heading-animation">
        Popular Food Items
      </h1>
      <div className="food-container">
        <div className="food-slider">
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png"
              alt="Chicken fried Rice"
            />
            <h1>Chicken fried Rice</h1>
            <p>The Registration Fees</p>
            <h2>$ 100.99</h2>
          </div>
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png"
              alt="Egg and Cucumber"
            />
            <h1>Egg and Cucumber</h1>
            <p>The Registration Fees</p>
            <h2>$ 28.00</h2>
          </div>
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png"
              alt="Chicken Leg Piece"
            />
            <h1>Chicken Leg Piece</h1>
            <p>The Registration Fees</p>
            <h2>$ 20.99</h2>
          </div>
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png"
              alt="Chicken Pizza"
            />
            <h1>Chicken Pizza</h1>
            <p>The Registration Fees</p>
            <h2>$ 26.99</h2>
          </div>

          {/* Duplicate items for smooth infinite scrolling */}
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png"
              alt="Chicken fried Rice"
            />
            <h1>Chicken fried Rice</h1>
            <p>The Registration Fees</p>
            <h2>$ 100.99</h2>
          </div>
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png"
              alt="Egg and Cucumber"
            />
            <h1>Egg and Cucumber</h1>
            <p>The Registration Fees</p>
            <h2>$ 28.00</h2>
          </div>
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png"
              alt="Chicken Leg Piece"
            />
            <h1>Chicken Leg Piece</h1>
            <p>The Registration Fees</p>
            <h2>$ 20.99</h2>
          </div>
          <div className="food-sep-dev">
            <img
              src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png"
              alt="Chicken Pizza"
            />
            <h1>Chicken Pizza</h1>
            <p>The Registration Fees</p>
            <h2>$ 26.99</h2>
          </div>
        </div>
      </div>
      <div className="food-main-dev">
        <div className="food-grid-sep-dev">
          <h4>ON THIS WEEK</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "-70px",
            }}
          >
            <h1>SPICY FRIED CHICKEN</h1>
            <img src={french} alt="" />
          </div>
          <h5>Limits Time Offer</h5>
          <button>ORDER NOW</button>
        </div>
        <div className="food-grid-sep-dev">
          <h4>ON THIS WEEK</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "-70px",
            }}
          >
            <h1>TODAY SPACIAL FOOD</h1>
            <img src={burger1} alt="" />
          </div>
          <h5>Limits Time Offer</h5>
          <button>ORDER NOW</button>
        </div>
        <div className="food-grid-sep-dev">
          <h4>ON THIS WEEK</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "-70px",
            }}
          >
            <h1>SPECIAL CHICKEN ROLL</h1>
            <img src={rockandroll} alt="" />
          </div>
          <h5>Limits Time Offer</h5>
          <button>ORDER NOW</button>
        </div>
      </div>
    </div>
  );
}
