import "../css/NavBar.css"

export function NavBar() {
    return (
      <nav className="nav-bar">
        <div className="img-div">
          <img
            src="https://gramentheme.com/html/fresheat/assets/img/logo/logo.svg"
            alt="Company_logo"
          />
        </div>
        <div className="nav-right-side">
          <div className="one-nav-right-side">
            <div>
              <h1 style={{ color: "white", paddingLeft: "20px" }}>
                09:00 am - 06:00 pm
              </h1>
            </div>
            <div>
              <h1 style={{ color: "white", paddingRight: "20px" }}>
                Follow us
              </h1>
            </div>
          </div>
          <div className="two-nav-right-side">
            <div className="two-nav-one-div">
              <h2>Home +</h2>
              <h2>About Us +</h2>
              <h2>Shop +</h2>
              <h2>Pages +</h2>
              <h2>Blog +</h2>
              <h2>Contact Us +</h2>
            </div>
            <div className="two-nav-two-div">
              <h3>Search</h3>
              <h3>cart</h3>
              <h3>description</h3>
            </div>
          </div>
        </div>
      </nav>
    );
}