import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { GrDocumentUpdate } from "react-icons/gr";
import { FaUserEdit } from "react-icons/fa";
import React from "react";

const getData = () => {
  return JSON.parse(localStorage.getItem("patientData")) || [];
};
const Patient = () => {
  const stateVariable = {
    id: "",
    fname: "",
    givenName: "",
    address: "",
    contactno: "",
    date: "",
    gender: "",
    department: "",
    age: "",
  };

  const [inputData, setInputData] = useState(stateVariable);
  const [Edit, setEdit] = useState(false);
  const [localStorageData, setLocalStorageData] = useState(getData());

  const handelClick = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit", inputData);
    if (Edit) {
      let updataData = localStorageData.map((patient) => {
        if (patient.id == inputData.id) {
          return inputData;
        } else {
          return patient;
        }
      });
      setLocalStorageData(updataData);
      setEdit(false);
    } else {
      let uniqueNumber = Math.floor(Math.random() * 100);
      // console.log(uniqueNumber);
      setLocalStorageData([
        ...localStorageData,
        { ...inputData, id: uniqueNumber },
      ]);
    }
    setInputData(stateVariable);
  };

  const handleEdit = (id) => {
    let patientData = localStorageData.find((patient) => patient.id == id);
    // console.log(patientData);
    setInputData(patientData);
    setEdit(true);
  };
  const handleDelete = (id) => {
    let updateData = localStorageData.filter((patient) => patient.id != id);
    setLocalStorageData(updateData);
  };

  useEffect(() => {
    localStorage.setItem("patientData", JSON.stringify(localStorageData));
  }, [localStorageData]);

  return (
    <>
      <Container>
        <h2 className="text-center fw-bold text-white my-4 bg-secondary py-2">
          Patient Form
        </h2>

        <Col>
          <Form onSubmit={handelSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Patient Name:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  value={inputData.fname}
                  name="fname"
                  onChange={handelClick}
                />
              </Col>
              <Form.Label column sm="2">
                Patient Father/Husband Name:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  value={inputData.givenName}
                  name="givenName"
                  onChange={handelClick}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Patient Address:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  value={inputData.address}
                  name="address"
                  onChange={handelClick}
                />
              </Col>
              <Form.Label column sm="2">
                Patient Telephone:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="number"
                  value={inputData.contactno}
                  name="contactno"
                  onChange={handelClick}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Patient Date of Birth:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="date"
                  value={inputData.date}
                  name="date"
                  onChange={handelClick}
                />
              </Col>
              <Form.Label column sm="2">
                Patient Gender:
              </Form.Label>
              <Col sm="2">
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  value={"Male"}
                  onChange={handelClick}
                />
              </Col>
              <Col sm="2">
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  value={"Female"}
                  onChange={handelClick}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Doctors Professions:
              </Form.Label>
              <Col sm="4">
                <Form.Select
                  aria-label="Default select example"
                  name="department"
                  onChange={handelClick}
                >
                  <option>Type of Doctors</option>
                  <option value="Cardiologist">Cardiologist</option>
                  <option value="Dentist">Dentist</option>
                  <option value="Optometrist">Optometrist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Nephrologist">Nephrologist</option>
                </Form.Select>
              </Col>
              <Form.Label column sm="2">
                Patient Age:
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="number"
                  value={inputData.age}
                  name="age"
                  onChange={handelClick}
                />
              </Col>
            </Form.Group>

            <div className="text-center">
              <button type="submit" className="btn btn-info text-white my-3">
                {Edit ? " Update " : " Add "}
                Data
              </button>
            </div>
          </Form>
        </Col>
        <Col>
          <Table striped bordered hover variant="black">
            <thead>
              <tr>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  No.
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Patient Name
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Gender
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Patient Address
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Patient ContactNo
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Age
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Date
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Edit
                </th>
                <th style={{ color: "white", backgroundColor: "black" }}>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {localStorageData.map((patient) => (
                <tr>
                  <td>{patient.id}</td>
                  <td>
                    {patient.fname} {patient.givenName}
                  </td>
                  <td>{patient.gender}</td>
                  <td>{patient.address}</td>
                  <td>{patient.contactno}</td>
                  <td>{patient.age}</td>
                  <td>{patient.date}</td>
                  <td>
                    <Button
                      onClick={() => {
                        handleEdit(patient.id);
                      }}
                    >
                      <FaUserEdit />
                    </Button>{" "}
                  </td>

                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleDelete(patient.id);
                      }}
                    >
                      <GrDocumentUpdate />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Container>
    </>
  );
};
export default Patient;
