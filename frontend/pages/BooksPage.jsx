


import React, { useEffect, useState } from 'react';



const BooksPage = () => {
  
    const [products, setProducts] = useState([]);

    // fetch products from the server.js  <-- THIS WORKS
    // const fetchProducts = async () => {
    //     try {
    //         THIS WORKS
    //         const response = await fetch('http://localhost:8080/api/getallbooks');

    //         for testing controllers and routes
    //         const response = await fetch('http://localhost:8080/api/products');

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();

    //         setProducts(data); // the products state
    //     } catch (error) {
    //         console.error('There was a problem with the fetch operation:', error);
    //     }
    // };



    const fetchProducts = async () => {
      try {
          const response = await fetch('http://localhost:8080/api/products');
  
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          
          //console.log("from fetch() ==>", data); // Log the data to check its structure
          //setProducts(data); // Set the products state

          console.log("from fetch() ==>", data.data); // Array []  data to check its structure
          setProducts(data.data); // Array []   the products state
          //setProducts(data); // Object {}   the products state
          console.log("from fetch() ==>", data); // Object {}  

      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
      }
  };


    // useEffect to fetch products when the component mounts
    // for requests to/from MongoDB 
    useEffect(() => {
        fetchProducts();
    }, []);


    return (

        <div className='books-page'>
                {products.map((book) => (
                    <div className='book' key={book._id}>
                      <div className='book-page-img-wrapper'>
                        <img src={book.image} alt="" />
                      </div>
                        <h2>{book.title}</h2>
                        <p>Author: {book.author}</p>
                        <p>Price: {book.price}</p>
                    </div>
                ))}
        </div>

    );
};
export default BooksPage;



