import homebanner from "../images/Home_page_banner.jpg"
import "../css/Home.css"
export function Home() {
    return (
        <div className="banner-dev">
            <h2 >WELCOME FRESHEAT</h2>
            <h1>CHICAGO DEEP</h1>
            <h1 style={{marginTop:"-100px"}}>PIZAA KING</h1>
            <button className="order-now-button">ORDER NOW</button>
        </div>
    )
}