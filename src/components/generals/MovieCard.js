import Card from "react-bootstrap/Card";

function MovieCard(props) {
  return (
    <Card className="border-0" style={{ height: "350px" }}>
      <Card.Img className="h-70" variant="top" src={props.src} />
      <Card.Body className="h-30">
        <Card.Title className="overflow-hidden">{props.title}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
