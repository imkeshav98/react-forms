import { useEffect, useState } from "react";
import { DataTable } from "./DataTable";
import axios from "axios";

function FormHandler() {
  const [data, setData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    maritalState: false,
  });
  const [td, setTd] = useState([]);

  // getting data from the API and making table
  const getData = () => {
    axios.get("http://localhost:3005/data").then((res) => {
      setTd(res.data);
      console.log(res.data);
    });
  };

  // Calling get data on page load only once
  useEffect(() => {
    getData();
  }, []);

  //

  // making data from input of form
  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;

    setData({ ...data, [name]: value });
  };

  // posting data to database
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/data", data)
      .then(() => {
        alert("user created");
      })
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
          <br />
          <label>Age</label>

          <input
            type="Number"
            name="age"
            onChange={handleChange}
            placeholder="Enter Your Age"
          />
          <br />
          <label>Address</label>
          <input
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Enter Your Address"
          />
          <br />
          <label>Choose Department</label>

          <select name="department" onChange={handleChange}>
            <option value="Admission">Admission </option>
            <option value="Placement">Placement</option>
            <option value="Development">Development</option>
            <option value="HR">HR</option>
          </select>
          <br />
          <label>Salary</label>
          <input
            name="salary"
            onChange={handleChange}
            type="Number"
            placeholder="Enter Your Salary"
          />
          <br />

          <label>maritalState</label>
          <input type="checkbox" name="maritalState" onChange={handleChange} />
          <br />
          <br />
          <input type="submit" value={"Create User"} />
        </form>
      </div>

      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>isMarried</th>
        </thead>

        {td.map((item) => {
          return <DataTable user={item} key={item.id} />;
        })}
      </table>
    </>
  );
}
export { FormHandler };
