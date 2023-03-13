import { useState } from "react";
import { NavLink } from "react-router-dom";

function EmployerWaysToPay() {
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        subscriptionSelection: "",
        cardholderName: "",
        longCardNumber: "",
        expiryDate: "",
        cvvNumber: "",
        access_key: "768890a2-5b57-4e66-bb0c-417cd8996993",
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div style={{
            display: "flex", flexDirection: "column", width: "100%", height: "max", display: "flex", alignItems: "center", backgroundColor: "#404042"
        }}>
            <h1 style={{ margin: "20px 20px", marginTop: "30px", color: "white", fontFamily: "Saira", fontWeight: "bolder", textAlign: "center", color: "#ffc107" }}>
                TradeSkills 24/7
            </h1>
            <img src="./set-of-vector-icons-of-working-tools.jpg" style={{ width: "40%", marginTop: "10px" }} />
            <h5 style={{ color: "white", fontFamily: "Saira", textAlign: "center", margin: "4% 3%" }}>
                Trade 24/7 has 4 subscription options for Employers:
            </h5>
            <ul style={{ color: "white", fontFamily: "Saira", margin: "4% 3%" }}>
                <li>One off Job - List a one off Job for £20</li>
                <li>Set of 10 jobs - List 10 jobs inside a year for £160</li>
                <li>Unlimited jobs listings for 6 months - List as many jobs as you like over 6 months for £400</li>
                <li>Yearly unlimited job listings - List as many jobs as you like over 12 months for £700</li>
            </ul>

            <form>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Contract Type:</h5>
                    <input style={{ width: "70%" }}
                        name="subscriptionSelection"
                        onChange={handleChange}
                        type="text"
                        placeholder="DropDown"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Card Holder Name:</h5>
                    <input style={{ width: "70%" }}
                        name="cardholderName"
                        onChange={handleChange}
                        type="text"
                        placeholder="Name on card"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Long Card Number:</h5>
                    <input style={{ width: "70%" }}
                        name="longCardNumber"
                        onChange={handleChange}
                        type="text"
                        placeholder="Number on card"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Expiry date:</h5>
                    <input style={{ width: "70%" }}
                        name="cvvNumber"
                        onChange={handleChange}
                        type="text"
                        placeholder="format dd/yy"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>CVV 3 digit number:</h5>
                    <input style={{ width: "70%" }}
                        name="cvvNumber"
                        onChange={handleChange}
                        type="text"
                        placeholder="Last 3 numbers on back of card"
                    />
                </div>


                <button style={{ backgroundColor: "#ffc107", borderRadius: "0.375rem", padding: "3% 8%", margin: "6% 25%", width: "50%" }}>
                    Submit
                </button>
            </form>

        </div>
    );
}

export default EmployerWaysToPay;