import React from "react";
import ProductRow from "./ProductRow";

function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow
            data={props.data}
            inputField={props.inputField}
            checked={props.checked}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
