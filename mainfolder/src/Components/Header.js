import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header style={{
            display: "flex", flexDirection: "column", width: "100%", height: "max", display: "flex", alignItems: "center", backgroundColor: "#404042"
        }}>
            <h1 style={{ margin: "10px 20px", marginTop: "30px", color: "white", fontFamily: "Saira", fontWeight: "bolder", textAlign: "center", color: "#ffc107" }}>
                TradeSkills 24/7
            </h1>

            <h5 style={{ margin: "10px 20px", color: "white", fontFamily: "Saira", textAlignLast: "center" }}>Welcome to TradeSkills 24/7</h5>
            <h6 style={{ margin: "10px 20px", color: "white", fontFamily: "Saira", textAlignLast: "center" }}> We are the industry leading one stop shop to get the tradesperson you need or some short notice work! </h6>

            <img src="./construction-workers-annimation.webp" alt="Construction Workers Animation" style={{ width: "100%", marginTop: "20px" }} />
            <nav style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%", height: "auto", display: "flex", marginTop: "10px", }} >
                <NavLink style={{ height: "100%", width: "30%", display: "Flex", flexDirection: "row", justifyContent: "space-around", textDecoration: "none" }}
                    to="/Register"
                >
                    <button style={{ backgroundColor: "#ffc107", borderRadius: "0.375rem", padding: "3% 8%" }}>Register</button>
                </NavLink>
                <NavLink style={{ height: "100%", width: "30%", display: "Flex", flexDirection: "row", justifyContent: "space-around", textDecoration: "none" }}
                    to="/SignIn"
                >
                    <button style={{ backgroundColor: "#ffc107", borderRadius: "0.375rem", padding: "3% 8%" }}>Sign In</button>
                </NavLink>
            </nav>
            <img src="./set-of-vector-icons-of-working-tools.jpg" style={{ width: "40%", marginTop: "20px" }} />
            <h6 style={{ margin: "10px 20px", color: "white", fontFamily: "Saira", paddingBottom: "20px", textAlign: "center" }}>We specialise in placing skilled workers in short term possitions in as little as 2 hours.</h6>
            <h6 style={{ margin: "10px 20px", color: "white", fontFamily: "Saira", paddingBottom: "200px", textAlign: "center" }}> Register or log in to contine.</h6>
        </header>
    );
}
export default Header;