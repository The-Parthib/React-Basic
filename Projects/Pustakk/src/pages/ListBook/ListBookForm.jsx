import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../../context/FirebaseContext";

const ListBook = () => {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");

    const fbase = useFirebase();
    console.log('fbase', fbase)

    const handleSubmit = async(e) => { 
        e.preventDefault();
        await fbase.dataUpload(title,isbn,price,file);
     }

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter book title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicIsbn">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="ISBN number"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price : xx INR"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFile">
          <Form.Label>Cover Pic : </Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
  />
        </Form.Group>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </div>
  )
}

export default ListBook