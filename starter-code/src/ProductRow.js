import React from "react";

export default function ProductRow(props) {
  console.log(props);
  const listProducts = props.data.map(item => {
    var red = {
      color: "red"
    };
    if (item.name.toLowerCase().includes(props.inputField)) {
      if (props.checked && !item.stocked) return null;

      return (
        <React.Fragment>
          <tr>
            <td style={item.stocked === false ? red : {}}>{item.name}</td>
            <td style={item.stocked === false ? red : {}}>{item.price}</td>
          </tr>
        </React.Fragment>
      );
    }
  });
  return listProducts;
}
