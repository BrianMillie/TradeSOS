import { NavLink } from "react-router-dom"
function RegistrationOptions() {

    return (
        <div style={{
            display: "flex", flexDirection: "column", width: "100%", height: "max", display: "flex", alignItems: "center", backgroundColor: "#404042"
        }}>
            <h1 style={{ margin: "20px 20px", marginTop: "30px", color: "white", fontFamily: "Saira", fontWeight: "bolder", textAlign: "center", color: "#ffc107" }}>
                TradeSkills 24/7
            </h1>

            <h4 style={{ color: "white", fontFamily: "Saira", textAlign: "center" }}>At TradeSkills 24/7 we have 2 main registration options to chose from.</h4>
            <div>
                <div>
                    <NavLink style={{ height: "100%", width: "100%", display: "Flex", flexDirection: "row", justifyContent: "space-around", textDecoration: "none" }}
                        to="/RegisterFormEmployer">
                        <button style={{ backgroundColor: "#ffc107", borderRadius: "0.375rem", margin: "6% 25%", width: "40%" }}>Trades Employer</button>
                    </NavLink>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <img src="./vecteezy_man-in-suit-sitting-working-on-laptop-businessman-sitting_16857428.jpg" style={{ width: "30%", margin: "3% 2%", marginTop: "5px", }} />
                        <h6 style={{ width: "64%", margin: "10% 3%", fontFamily: "Saira", color: "white", textAlign: "center" }}>Trade Employers are the skill hunters that need a position filled today, tomorrow or ASAP.</h6>
                    </div>
                </div>
                <NavLink style={{ height: "100%", width: "100%", display: "Flex", flexDirection: "row", justifyContent: "space-around", textDecoration: "none" }}
                    to="/RegisterFormEmployer">
                    <button style={{ backgroundColor: "#ffc107", borderRadius: "0.375rem", margin: "6% 25%", width: "40%" }}>Trades Person</button>
                </NavLink>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <img src="./vecteezy_painter-paint-the-wall_6137360.jpg" style={{ width: "30%", margin: "6% 2%", marginTop: "5px", }} />
                    <h6 style={{ width: "64%", margin: "10% 3%", fontFamily: "Saira", color: "white", textAlign: "center" }}>A Trades Person is a skilled worker looking to fill a short notice position.</h6>
                </div>
            </div>
            <h5 style={{ color: "white", fontFamily: "Saira", textAlign: "center", paddingBottom: "100px", marginTop: "10%" }}>Select an option for registration.</h5>
        </div>)
}

export default RegistrationOptions