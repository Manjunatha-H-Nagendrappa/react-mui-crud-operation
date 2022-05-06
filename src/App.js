import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState(null);

  const [fnameErr, setFnameErr] = useState(false);
  const [lnameErr, setLnameErr] = useState(false);
  const [genderErr, setGenderErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [address1Err, setAddress1Err] = useState(false);
  const [address2Err, setAddress2Err] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [zipErr, setZipErr] = useState(false);
  const [hobbiesErr, setHobbiesErr] = useState(false);
  const [fileErr, setFileErr] = useState(false);

  const checkFname = (e) => {
    const fname = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (fname.length < 3) {
      setFnameErr("minimum 3 character required");
    } else if (regExp.test(fname) === false) {
      setFnameErr("only alphabets are allowed");
    } else {
      setFnameErr(false);
    }
    setFname(fname);
  };

  const checkLname = (e) => {
    const lname = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (lname.length < 3) {
      setLnameErr("minimum 3 character required");
    } else if (regExp.test(lname) === false) {
      setLnameErr("only alphabets are allowed");
    } else {
      setLnameErr(false);
    }
    setLname(lname);
  };

  const checkGender = (e) => {
    const gender = e.target.value;
    if (e.target.checked) {
      setGenderErr(false);
    } else {
      setGenderErr(true);
    }
    setGender(gender);
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regExp.test(email) === false) {
      setEmailErr("invalid email address");
    } else {
      setEmailErr(false);
    }
    setEmail(email);
  };

  const checkDate = (e) => {
    const date = e.target.value;
    if (date === "mm / dd / yyyy") {
      setDateErr("please select date");
    } else {
      setDateErr(false);
    }
    setDate(date);
  };

  const checkPhone = (e) => {
    const phone = e.target.value;
    const regExp = /^[a-zA-Z\s]+$/;
    if (regExp.test(phone) === true) {
      setPhoneErr("only numbers are allowed ");
    } else if (phone.length < 10) {
      setPhoneErr("invalid phone number");
    } else {
      setPhoneErr(false);
    }
    setPhone(phone);
  };

  const checkAddress1 = (e) => {
    const address1 = e.target.value;
    if (address1.length < 40) {
      setAddress1Err("address should not preceed 40 character");
    } else if (address1.length > 60) {
      setAddress1Err("address should not exceed 60 character");
    } else {
      setAddress1Err(false);
    }
    setAddress1(address1);
  };

  const checkAddress2 = (e) => {
    const address2 = e.target.value;
    if (address2.length < 40) {
      setAddress2Err("address should not preceed 40 character");
    } else if (address2.length > 60) {
      setAddress2Err("address should not exceed 60 character");
    } else {
      setAddress2Err(false);
    }
    setAddress2(address2);
  };

  const checkCity = (e) => {
    const city = e.target.value;
    if (city === "City") {
      setCityErr("please select your city");
    } else {
      setCityErr(false);
    }
    setCity(city);
  };

  const checkZip = (e) => {
    const zip = e.target.value;
    if (zip.length < 5) {
      setZipErr("invalid zip code");
    } else {
      setZipErr(false);
    }
    setZip(zip);
  };

  const checkHobbies = (e) => {
    let hobbyList = [...hobbies];
    if (e.target.checked) {
      hobbyList = [...hobbies, e.target.value];
    } else {
      hobbyList.splice(hobbies.indexOf(e.target.value), 1);
    }
    if (!hobbyList) {
      setHobbiesErr(true);
    } else {
      setHobbiesErr(false);
    }
    setHobbies(hobbyList);
  };

  const checkFile = (e) => {
    const file = e.target.value;
    if (file === "") {
      setFileErr("please attach your document");
    } else {
      setFileErr(false);
    }
    setFile(file);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (
      fname.length === 0 ||
      lname.length === 0 ||
      gender.checked === 0 ||
      date.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      address1.length === 0 ||
      address2.length === 0 ||
      city.length === 0 ||
      zip.length === 0 ||
      hobbies.checked === 0 ||
      file.length === 0
    ) {
      setFnameErr("please enter your first name");
      setLnameErr("please enter your last name");
      setGenderErr("please select your gender");
      setDateErr("please select date");
      setEmailErr("please enter your email address");
      setPhoneErr("please enter your phone number");
      setAddress1Err("please enter your permanent address");
      setAddress2Err("please enter your secondary address");
      setCityErr("please select your city");
      setZipErr("please enter zipcode");
      setHobbiesErr("please select your hobbies");
      setFileErr("please attach your document");
      alert("please fill out all the form details");
    } else if (!editData) {
      const formData = {
        id: Math.floor(Math.random() * 100) + 1,
        fname: fname,
        lname: lname,
        address1: address1,
        city: city,
      };
      setData([...data, formData]);
      setFname("");
      setLname("");
      setGender("");
      setDate("");
      setEmail("");
      setPhone("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setZip("");
      setHobbies("");
      setFile("");
    } else {
      updateRecord(editData.id, fname, lname, address1, city);
    }
  };

  const viewRecord = (id) => {
    let records = data;
    records = data.map((record) => {
      if (record.id === id) {
        alert(`
        First Name = ${record.fname},
        Last Name = ${record.lname},
        Address = ${record.address1},
        City = ${record.city} `);
        console.log("--Records--", records);
      }
      return null;
    });
  };

  const editRecord = (id) => {
    const findRecord = data.find((record) => record.id === id);
    setEditData(findRecord);
  };

  const updateRecord = (id, fname, lname, address1, city) => {
    const newRecord = data.map((record) =>
      record.id === id ? { id, fname, lname, address1, city } : record
    );
    setData(newRecord);
    setEditData("");
  };

  useEffect(() => {
    if (editData) {
      setFname(editData.fname);
      setLname(editData.lname);
      setAddress1(editData.address1);
      setCity(editData.city);
    } else {
      setFname("");
      setLname("");
      setGender("");
      setDate("");
      setEmail("");
      setPhone("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setZip("");
      setHobbies("");
      setFile("");
    }
  }, [setFname, setLname, setAddress1, setCity, editData]);

  const deleteRecord = (id) => {
    alert("Are you sure want to delete the record permanently?");
    const records = data.filter((record) => record.id !== id);
    setData(records);
  };

  return (
    <>
      <Box
        sx={{
          width: "65%",
          marginLeft: "17%",
          marginTop: "2%",
          marginBottom: "2%",
          backgroundColor: "white",
          border: 1,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={formSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <h2>
                <center>
                  <u>Web Application Form</u>
                </center>
              </h2>
              <h4>All form fields are mandatory *</h4>
            </Grid>
            <Grid item xs={6}>
              <div className="item">
                <TextField
                  error={fnameErr ? true : false}
                  id="outlined-error-helper-text"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  helperText={fnameErr}
                  value={fname}
                  onChange={checkFname}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="item">
                <TextField
                  error={lnameErr ? true : false}
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  helperText={lnameErr}
                  value={lname}
                  onChange={checkLname}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="item">
                <FormControl error={genderErr ? true : false} value={gender}>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      checked={gender === "male"}
                      onChange={checkGender}
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      checked={gender === "female"}
                      onChange={checkGender}
                    />
                    <FormControlLabel
                      value="transgender"
                      control={<Radio />}
                      checked={gender === "transgender"}
                      label="Transgender"
                      onChange={checkGender}
                    />
                  </RadioGroup>
                  <FormHelperText>{genderErr}</FormHelperText>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="item">
                <TextField
                  error={dateErr ? true : false}
                  type="date"
                  label="Date of Birth"
                  id="outlined-start-adornment"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  helperText={dateErr}
                  value={date}
                  onChange={checkDate}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="item">
                <TextField
                  error={emailErr ? true : false}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                  helperText={emailErr}
                  value={email}
                  onChange={checkEmail}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="item">
                <TextField
                  error={phoneErr ? true : false}
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    maxLength: 10,
                  }}
                  helperText={phoneErr}
                  value={phone}
                  onChange={checkPhone}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="item">
                <TextField
                  error={address1Err ? true : false}
                  id="outlined-basic"
                  label="Address 1"
                  variant="outlined"
                  fullWidth
                  helperText={address1Err}
                  value={address1}
                  onChange={checkAddress1}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="item">
                <TextField
                  error={address2Err ? true : false}
                  id="outlined-basic"
                  label="Address 2"
                  variant="outlined"
                  fullWidth
                  helperText={address2Err}
                  value={address2}
                  onChange={checkAddress2}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="item">
                <FormControl fullWidth error={cityErr ? true : false}>
                  <InputLabel>City</InputLabel>
                  <Select label="City" value={city} onChange={checkCity}>
                    <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                    <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
                    <MenuItem value={"Chennai"}>Chennai</MenuItem>
                    <MenuItem value={"Kolkata"}>Kolkata</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                  </Select>
                  <FormHelperText>{cityErr}</FormHelperText>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="item">
                <TextField
                  error={zipErr ? true : false}
                  id="outlined-basic"
                  label="Zip Code"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    maxLength: 10,
                  }}
                  helperText={zipErr}
                  value={zip}
                  onChange={checkZip}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="item">
                <FormControl error={hobbiesErr ? true : false} value={hobbies}>
                  <FormLabel>Hobbies</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      value="music"
                      control={<Checkbox />}
                      label="Music"
                      checked={hobbies.includes("music")}
                      onChange={checkHobbies}
                    />
                    <FormControlLabel
                      value="dance"
                      control={<Checkbox />}
                      label="Dance"
                      checked={hobbies.includes("dance")}
                      onChange={checkHobbies}
                    />
                    <FormControlLabel
                      value="sports"
                      control={<Checkbox />}
                      label="Sports"
                      checked={hobbies.includes("sports")}
                      onChange={checkHobbies}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Checkbox />}
                      label="Other"
                      checked={hobbies.includes("other")}
                      onChange={checkHobbies}
                    />
                  </FormGroup>
                  <FormHelperText>{hobbiesErr}</FormHelperText>
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="item">
                <TextField
                  error={fileErr ? true : false}
                  type="file"
                  label="File"
                  id="outlined-start-adornment"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                  helperText={fileErr}
                  value={file}
                  onChange={checkFile}
                />
              </div>
            </Grid>
          </Grid>

          <div className="button">
            <Button variant="contained" type="submit" value="Submit">
              Submit
            </Button>
          </div>
        </form>
      </Box>
      <Box
        sx={{
          width: "90%",
          marginLeft: "4%",
          marginTop: "2%",
          marginBottom: "1%",
          backgroundColor: "white",
          border: 1,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>
          <center>
            <u>CRUD Operation</u>
            <br />
            <h6>
              Please submit a above form details to perform crud operation
              below:-
            </h6>
          </center>
        </h2>
      </Box>
      ;
      {data.map((currData) => {
        const { id, fname, lname, address1, city } = currData;

        return (
          <div key={id}>
            <Card
              sx={{
                width: "40%",
                padding: "1%",
                border: 1,
                marginLeft: "27%",
                marginTop: "2%",
                marginBottom: "2%",
              }}
            >
              <p>First Name: {fname}</p>
              <p>Last Name: {lname}</p>
              <p>Address: {address1}</p>
              <p>City: {city}</p>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  onClick={(e) => viewRecord(id, e)}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={(e) => editRecord(id, e)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={(e) => deleteRecord(id, e)}
                >
                  Delete
                </Button>
              </CardActions>
              <h5>
                In case edit operation please fill all fields in the form, I
                have edited only few fields *
              </h5>
            </Card>
          </div>
        );
      })}
    </>
  );
}

export default App;
