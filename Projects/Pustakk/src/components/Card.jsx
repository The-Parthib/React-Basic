import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Bookcard(props) {
  return (
    <div className="m-3">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          ISBN : {props.isbn}
          <br/>
          price : {props.price}
          <br/>
          contact : {props.userEmail}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Bookcard;
