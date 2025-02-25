import { useEffect, useRef } from "react";
import "../css/PopularDishes.css"

export function PopularDishes() {
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
      <>
        <div className="dishes-main-dev">
          <h2 ref={headingRef1} className="heading-animation">
            <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" />{" "}
            POPULAR DISHES{" "}
            <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" />
          </h2>
          <h1 ref={headingRef2} className="heading-animation">
            Best selling Dishes
          </h1>
          <div className="dishes-main-grid">
            <div className="dishes-sep-dev">
              <img
                src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_3.png"
                alt="Chicken fried Rice"
              />
              <h1>Chicken fried Rice</h1>
              <p>The Registration Fees</p>
              <h2>$ 100.99</h2>
            </div>
            <div className="dishes-sep-dev">
              <img
                src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_2.png"
                alt="Egg and Cucumber"
              />
              <h1>Egg and Cucumber</h1>
              <p>The Registration Fees</p>
              <h2>$ 28.00</h2>
            </div>
            <div className="dishes-sep-dev">
              <img
                src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_4.png"
                alt="Chicken Leg Piece"
              />
              <h1>Chicken Leg Piece</h1>
              <p>The Registration Fees</p>
              <h2>$ 20.99</h2>
            </div>
            <div className="dishes-sep-dev">
              <img
                src="https://gramentheme.com/html/fresheat/assets/img/food-items/item1_1.png"
                alt="Chicken Pizza"
              />
              <h1>Chicken Pizza</h1>
              <p>The Registration Fees</p>
              <h2>$ 26.99</h2>
            </div>
            <div className="dishes-sep-dev">
              <img
                src="https://gramentheme.com/html/fresheat/assets/img/dishes/dishes1_2.png"
                alt="Egg and Cucumber"
              />
              <h1>Chinese Pasta</h1>
              <p>The Registration Fees</p>
              <h2>$ 15.00</h2>
            </div>
          </div>
        </div>
      </>
    );
}