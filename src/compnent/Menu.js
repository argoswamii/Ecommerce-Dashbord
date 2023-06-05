import React, { useState, useEffect } from "react";
import "./Menu.css";
import { ImSearch } from "react-icons/im";
import dots from "./image/COLOR.svg";

const Menu = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortProperty, setSortProperty] = useState("");

  useEffect(() => {
    // Fetch the JSON data and set the initial order state
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    // Simulate fetching data from the JSON file
    const jsonData = require("./orders.json");
    setOrders(jsonData);
    setFilteredOrders(jsonData);
  };

  const handleFilterChange = (e) => {
    const status = e.target.value;
    const filtered = orders.filter((order) => order.status === status);
    setFilteredOrders(filtered);
  };

  const handleSortChange = (e) => {
    const sortProp = e.target.value;
    setSortProperty(sortProp);
    sortOrders(sortProp);
  };

  const sortOrders = (property) => {
    const sorted = [...filteredOrders].sort((a, b) =>
      a[property] > b[property] ? 1 : -1
    );
    setFilteredOrders(sorted);
  };
  return (
    <>
      <div className="row">
        <div className="column">
          <ImSearch className="srchicon" />
          Search
        </div>
        <div className="column">
          <select
            className="cst-select"
            id="filter"
            onChange={handleFilterChange}
          >
            <option value="" disabled selected>
              ACTIVE ORDERS
            </option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div className="column">
          <select className="cst-select">
            <option value="" disabled selected>
              Amount
            </option>
          </select>
        </div>
        <div className="column">
          <select className="cst-select" id="sort" onChange={handleSortChange}>
            <option value="" disabled selected>
              Placed on
            </option>
            <option value="">None</option>
            <option value="brand_name">Brand Name</option>
            <option value="placed_on">Placed On</option>
          </select>
        </div>
        <div className="column">
          <select className="cst-select" onChange={handleFilterChange}>
            <option value="" disabled selected>
              Options
            </option>
          </select>
        </div>
      </div>
      {/* dynamic */}

      {filteredOrders.map((order, index) => (
        <div className="row">
          <div key={index} className="column" id="mdiv">
            <img
              className="product-img"
              src={order.logo}
              alt={order.brand_name}
            />
            <h3>{order.brand_name}</h3>
          </div>
          <p className="column"> {order.status}</p>
          <p className="column"> {order.price}</p>
          <p className="column"> {order.placed_on}</p>
          <div className="column" id="alpha">
            <img src={dots} alt="Dots" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
