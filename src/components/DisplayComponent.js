import React from "react";

const DisplayComponent = ({data }) => {
// data (props)

  return (
    <div>
      <table rules="none">
        <tr className="tHead">
          <th>Image</th>
          <th>ID</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Current_price</th>
          <th>Total_volume</th>
        </tr>

        {data.map((val, index) => (
          <tr className="tbody" key={index}>
            <td>
              <img src={val.image} width={55} alt="img" />
            </td>
            <td>{val.id}</td>
            <td>{val.symbol}</td>
            <td>{val.name}</td>
            <td>{val.current_price}</td>
            <td>{val.total_volume}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayComponent;
