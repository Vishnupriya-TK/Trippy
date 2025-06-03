import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    clicked: false,
    showSignup: false, // State for signup form visibility
    isSignedIn: false, // State to track sign-in status
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleSignupClick = () => {
    this.setState({ showSignup: true });
  };

  handleCloseSignup = (e) => {
    if (e.target.className === "signup-overlay") {
      this.setState({ showSignup: false });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful!");
    this.setState({ showSignup: false, isSignedIn: true });
  };

  handleSignOut = () => {
    this.setState({ isSignedIn: false });
    alert("Signed out successfully!");
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Trippy</h1>
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItem.map((item, index) => (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}

            {/* Show Sign Up or Sign Out Button */}
            {this.state.isSignedIn ? (
              <button onClick={this.handleSignOut}>Sign Out</button>
            ) : (
              <button onClick={this.handleSignupClick}>Sign Up</button>
            )}
          </ul>
        </nav>

        {/* Signup Modal */}
        {this.state.showSignup && (
          <div className="signup-overlay" onClick={this.handleCloseSignup}>
            <div className="signup-form">
              <h2>Sign Up</h2>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Navbar;
