import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import Form from "react-bootstrap/Form";




const CreateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: 0,
    stock: 0,
  });
  console.log("product", product);



  const navigate = useNavigate();

  const productCollection = collection(db, "products");

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await addDoc(productCollection, product);

      
      navigate("/");
    } catch (error) {
     
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="global-container-form">
      <div className="form-container-create">
        <Form onSubmit={addProduct}>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              value={product.title}
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>DescripciÃ³n</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              value={product.description}
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              name="image"
              placeholder="ImageLink"
              value={product.image}
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              placeholder="Stock"
              value={product.stock}
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="number"
              name="Tipo"
              placeholder="Tipo"
              value={product.tipo}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              required
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Crear
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateProduct;