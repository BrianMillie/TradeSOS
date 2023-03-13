import { useState } from "react";
import { Route, Redirect, NavLink } from 'react-router-dom';

function EmployerForm() {
    const [success, setSuccess] = useState(false);

    const [formData, setFormData] = useState({
        userName: "",
        password: "",
        accountHolderName: "",
        company: "",
        companyAddress: "",
        email: "",
        questionSeven: "",
        questionEight: "",
        questionNine: "",
        questionTen: "",
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
                To start using TradeSkills 24/7 today for posting job positions all details below need to be provided.
            </h5>

            <form style={{ padding: "6px" }}>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>User Name:</h5>
                    <input style={{ width: "70%" }}
                        name="userName"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter a user name"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Unique Password:</h5>
                    <input style={{ width: "70%" }}
                        name="password"
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter a unique log in password"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Account Holder Name:</h5>
                    <input style={{ width: "70%" }}
                        name="accountHolderName"
                        onChange={handleChange}
                        type="text"
                        placeholder="Account holder name"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Company Name:</h5>
                    <input style={{ width: "70%" }}
                        name="company"
                        onChange={handleChange}
                        type="text"
                        placeholder="Company acting as the employer"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Registered Company Address:</h5>
                    <input style={{ width: "70%" }}
                        name="companyAddress"
                        onChange={handleChange}
                        type="text"
                        placeholder="Registered employer address"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Account Holder Email:</h5>
                    <input style={{ width: "70%" }}
                        name="email"
                        onChange={handleChange}
                        type="text"
                        placeholder="Account holder Email"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Q7:</h5>
                    <input style={{ width: "70%" }}
                        name="questionThree"
                        onChange={handleChange}
                        type="text"
                        placeholder="Question placeholder"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Q8:</h5>
                    <input style={{ width: "70%" }}
                        name="questionFour"
                        onChange={handleChange}
                        type="text"
                        placeholder="Question placeholder"
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Q9:</h5>
                    <input style={{ width: "70%" }}
                        name="questionFive"
                        onChange={handleChange}
                        type="text"
                        placeholder="Question placeholder"
                    /></div>
                <div style={{ display: "flex", flexDirection: "row", marginBottom: "3%" }}>
                    <h5 style={{ color: "white", fontFamily: "Saira", width: "25%" }}>Q10:</h5>
                    <input style={{ width: "70%" }}
                        name="questionSix"
                        onChange={handleChange}
                        type="text"
                        placeholder="Question placeholder"
                    />
                    <div></div>
                </div>

                <NavLink style={{ height: "100%", width: "100%", display: "Flex", flexDirection: "row", justifyContent: "space-around", textDecoration: "none" }}
                    to="/EmployerPaymentOptions"
                >
                    <button style={{ backgroundColor: "#ffc107", borderRadius: "0.375rem", padding: "3% 8%", margin: "6% 25%", width: "50%" }}>Submit
                    </button>
                </NavLink>
            </form>


        </div>
    );
}

export default EmployerForm;