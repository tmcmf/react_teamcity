import "./App.css";
import { useState } from "react";
function App() {
  const [details, setDetails] = useState({
    name: "",
    age: null,
    gender:"",
  });
  const [error, setError] = useState("");
  const handleSubmit = () => {
    console.log(details);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "age") {
      setDetails({ ...details, age: value });
      if (value >= 18) {
        setError("");
      } else {
        setError("Please enter valid age");
      }
    } else {
      setDetails({ ...details, name: value });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="mb-3 mt-3">
          <label for="name">Name:</label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={details.name}
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter age"
            name="age"
            value={details.age}
            onChange={handleChange}
          />
        </div>
        {/* <div className="mb-4">
          <label for="gender">Gender:</label>
          <input
            type="number"
            className="form-control"
            id="gender"
            placeholder="Enter gender"
            name="gender"
            value={details.gender}
            onChange={handleChange}
          />
        </div> */}
        
        <p className="text-danger">{error}</p>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{" "}
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
