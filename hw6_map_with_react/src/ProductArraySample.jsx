import React from "react";
import { productsdata } from "./products/productsdata";

function ProductArraySample() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Unit Price</th>
            <th>Unit Stock</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {productsdata.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductArraySample;
