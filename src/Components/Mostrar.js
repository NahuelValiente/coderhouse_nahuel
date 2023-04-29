import { useState, useEffect } from "react";
import withReactContent from "sweetalert2-react-content";
import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";




const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  let userTool = useSelector((state) => state.users.user);


  // console.log("db", db);
  // Llamamos a la colección de productos pasando como parámetro la referencia a la base de datos y la colección que queremos recuperar
  const productsCollection = collection(db, "products");
  // console.log("productsCollection", productsCollection);


  const getProducts = async () => {
    const dataProducts = await getDocs(productsCollection);
    // console.log("dataProducts", dataProducts);
    console.log("dataProducts.docs", dataProducts.docs);
    setProducts(
      dataProducts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };


  console.log("products", products);


  const confirmDeleteProduct = (id) => {
    console.log("id", id);
    MySwal.fire({
      title: "Are you sure to delete this product?",
      text: "This action don't have reverse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log("result", result);
      if (result.isConfirmed) {
        deleteProduct(id);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        MySwal.fire("Cancelled", "Your product is safe :)", "error");
      }
    });
  };


  const deleteProduct = async (id) => {
    const productToDelete = doc(db, "products", id);
    try {
      await deleteDoc(productToDelete);
      MySwal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      MySwal.fire({
        title: "Error!",
        text: "Your product has not been deleted.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    getProducts();
  };


  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <ItemList
      products={products}
      confirmDeleteProduct={confirmDeleteProduct}
      userTool={userTool}
    />
  );
};
export default ItemListContainer;