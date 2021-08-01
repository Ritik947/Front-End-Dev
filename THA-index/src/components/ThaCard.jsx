import { Card, Button } from "react-bootstrap";
const ThaCard = ({ number, text }) => {
  return (
    <Card
      className="shadow p-3 mb-5"
      style={{
        padding: "0",
        width: "20rem",
        borderRadius: "1rem",
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontWeight: "600", fontSize: "2.5rem" }}>
          Day {number}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          onClick={() => {
            window.location.href =
              "/Front-End-Dev/Day_" +
              `${parseInt(number) < 10 ? "0" : ""}` +
              number +
              `${parseInt(number) >= 16 ? "/build" : ""}`;
          }}
        >
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ThaCard;
