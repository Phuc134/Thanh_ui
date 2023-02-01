import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./PageProduct.css";

const PageProduct = () => {
  const PageSize = 2;
  const items = [
    {
      id: 2,
      name: "jean Nam",
      price: 10000000,
      skus: ["MA003"],
      thumbnailUrl:
        "https://uitk14-oop-online-clothes.s3.ap-southeast-1.amazonaws.com/product/MA003",
      createdAt: "0001-01-01T00:00:00",
    },
    {
      id: 1,
      name: "Thành ",
      price: 10000000,
      skus: ["MA0002", "MA001", "MA005"],
      thumbnailUrl:
        "https://uitk14-oop-online-clothes.s3.ap-southeast-1.amazonaws.com/product/MA001",
      createdAt: "0001-01-01T00:00:00",
    },
    {
      id: 5,
      name: "Jordan 1",
      price: 250000,
      skus: ["MA007"],
      thumbnailUrl:
        "https://uitk14-oop-online-clothes.s3.ap-southeast-1.amazonaws.com/product/MA007",
      createdAt: "0001-01-01T00:00:00",
    },
    {
      id: 3,
      name: "Hoodie Đen",
      price: 10000000,
      skus: ["MA004", "MA006"],
      thumbnailUrl:
        "https://uitk14-oop-online-clothes.s3.ap-southeast-1.amazonaws.com/product/MA004",
      createdAt: "0001-01-01T00:00:00",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(items.length / PageSize)
  );

  const startIndex = currentPage * PageSize;
  const endIndex = startIndex + PageSize;
  const paginatedProducts = items.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <Header />
        <div className="container-page-product">
          {paginatedProducts.map((item) => {
            return <Product />;
          })}
          <button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              style={{
                backgroundColor: index === currentPage ? "lightblue" : "white",
                color: index === currentPage ? "white" : "black",
              }}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={endIndex >= items.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default PageProduct;
