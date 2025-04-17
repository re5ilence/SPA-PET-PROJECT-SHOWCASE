import {useLocation} from "react-router-dom";

function Success() {
    const location = useLocation();
    const name = location.state.name;

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Thank you, <span style={{color: 'white'}}>{name}</span>! <br/>Form submitted successfully. </h1>
        </div>
    );
}

export default Success;

