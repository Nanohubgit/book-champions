import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const NewBook = () => {
  const [ title, setTitle ] = useState("");
  const [ author, setAthor ] = useState("");
  const [ rating, setRating ] = useState("");
  const [ pageCount, setPageCount ] = useState("");
  const [ imageUrl, setImageUrl ] = useState("");
  const [ available, setAvailable ] = useState(false);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  const handleChangeAuthor = (event) => {
    setAthor(event.target.value);
  }
  const handleChangeRating = (event) => {
    setRating(event.target.value);
  }
  const handleChangePageCount = (event) => {
    setPageCount(event.target.value);
  }
  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  }
  const handleChangeAvailable = (event) => {
    setAvailable(event.target.value);
  }

const handleAddBook = (e) => {
  e.preventDefault();

  const bookData = {
    title,
    author,
    rating: parseInt(rating, 10),
    pageCount: parseInt(pageCount, 10),
    imageUrl,
    available
  }

  console.log(bookData)
  setTitle("");
  setAthor("");
  setRating("");
  setPageCount("");
  setImageUrl("");
}

  return (
    <Card className="m-4 w-50" bg="success" j="center">
      <Card.Body>
        <Form className="text-white" onSubmit={ handleAddBook }>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Ingresar título" onChange={ handleChangeTitle}/>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Ingresar autor" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de estrellas"
                  max={5}
                  min={0}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="pageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  min={1}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control type="text" placeholder="Ingresar url de imagen" />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
              <Form.Check
                type="switch"
                id="available"
                className="mb-3"
                label="¿Disponible?"
              />
              <Button variant="primary" type="submit">
                Agregar lectura
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};


export default NewBook;