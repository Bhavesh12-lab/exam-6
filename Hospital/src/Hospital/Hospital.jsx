import Container from "react-bootstrap/Container";

const Hoeder = () => {
  return (
    <>
      <header
        className="navbar navbar-expand-lg  navbar-light "
        style={{ backgroundColor: "#00bffe" }}
      >
        <Container>
          <div className="d-flex align-items-center w-100">
            <div>
              <a href="#" className="navbar-brand fw-bold">
                <img
                  src="../public/logo.png"
                  alt="1"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div
              style={{
                marginLeft: "400px",
                marginTop: "10px",
                color: "white",
                fontSize: "25px",
              }}
            >
              <p>Patient Admission Form</p>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};
export default Hoeder;
