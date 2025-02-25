import { useEffect, useRef } from "react";
import "../css/AboutUs.css"
export function AboutUs() {
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
      <div className="aboutus-main-div">
        <h2 ref={headingRef1} className="heading-animation">
          <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" />{" "}
          BEST FOOD{" "}
          <img src="https://gramentheme.com/html/fresheat/assets/img/icon/titleIcon.svg" />
        </h2>
        <h1 ref={headingRef2} className="heading-animation">
          Variety of flavours from american cuisine
        </h1>
        <p>
          It is a long established fact that a reader will be distracted the
          readable content of a page when looking at layout the point
          established fact that
        </p>
        <button >ORDER NOW</button>
      </div>
    );
}