import React, { useState } from "react";
import "./InventoryStyle.css";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import {
  IoIosInformationCircleOutline,
  IoIosArrowForward,
} from "react-icons/io";

export default function Inventory() {
  const [value, onChange] = useState();
  const CustomInput = ({ value, onClick }) => {
    return (
      <div
        className="input-field"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
      >
        <input
          type="text"
          value={value}
          onClick={onClick}
          readOnly
          placeholder="Month"
          style={{ border: "none", outline: "none" }}
        />
        <span>
          <FaCalendarAlt style={{ color: "#b4b4b9" }} />
        </span>
      </div>
    );
  };

  const medicineList = [
    {
      name: "MIDOTAB",
      desc: "MIDODRINE HYDROCHLORIDE",
      prevPrice: "190.00",
      updatedPrice: "210.00",
    },
    {
      name: "CAMDOL",
      desc: "MIDODRINE HYDROCHLORIDE",
      prevPrice: "190.00",
      updatedPrice: "210.00",
    },
    {
      name: "Paracetamol",
      desc: "MIDODRINE HYDROCHLORIDE",
      prevPrice: "190.00",
      updatedPrice: "210.00",
    },
    {
      name: "ICANZETOL",
      desc: "MIDODRINE HYDROCHLORIDE",
      prevPrice: "190.00",
      updatedPrice: "210.00",
    },
    {
      name: "MIDOTAB 5MG",
      desc: "MIDODRINE HYDROCHLORIDE",
      prevPrice: "190.00",
      updatedPrice: "210.00",
    },
  ];
  return (
    <div style={{ padding: "1em" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1>Inventory Overview</h1>
            <label>
              <Datepicker
                selected={value}
                onChange={(date) => onChange(date)}
                customInput={<CustomInput />}
              />
            </label>
          </div>
          <button className="local-btn local-btn-primary">Add Stock</button>
        </div>
        <div className="local-card-container">
          <div className="local-card">
            <h5>Total Inventory</h5>
            <h2>11,748</h2>
          </div>
          <div className="local-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5>Expiring Soon</h5>
              <span>></span>
            </div>
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "10px" }}
            >
              <h2>12</h2>
              <small style={{ textDecoration: "underline", fontWeight: "400" }}>
                Review all
              </small>
            </div>
          </div>
          <div className="local-card">
            <h5>Out Of Stock</h5>
            <h2>19</h2>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div>
          <div style={{ color: "#444444" }}>
            <h2>Inventory Updates</h2>
            <h5 style={{ fontWeight: "400", paddingTop: "1em" }}>
              Last Updated on 12th Jan, 2023
            </h5>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Pricing Changes by the Ministry</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="local-btn">Ignore</button>
              <button className="local-btn">Review and Confirm</button>
              <button className="local-btn">Update All</button>
            </div>
          </div>
          <table className="items-table">
            <thead>
              <tr className="items-table-thead">
                <td>
                  Medicine Name<h6 style={{ color: "#ababaf" }}>Ingredients</h6>
                </td>
                <td>Previous Price</td>
                <td></td>
                <td>Updated Price</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {medicineList.map((item) => {
                return (
                  <tr key={item.name}>
                    <td>
                      <div className="medicine-item">
                        <div className="info-icon">
                          <IoIosInformationCircleOutline />
                        </div>
                        <div className="medicine-item-details">
                          <h5>{item.name}</h5>
                          <h6 style={{ color: "#ababaf", fontWeight: "400" }}>
                            {item.desc}
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td>AED {item.prevPrice}</td>
                    <td>
                      <GoArrowRight />
                    </td>
                    <td>AED {item.updatedPrice}</td>
                    <td>
                      <button className="local-btn">Update Price</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
                <td colSpan={5} style={{padding:"1em", cursor:"pointer"}}><center>View All</center></td>
            </tfoot>
          </table>
        </div>
      </div>
      <div style={{ paddingTop: "2em" }}>
        <div style={{ color: "#444444" }}>
          <h2>Quick Links</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" ,marginTop:"2em"}}>
          <button
            className="local-btn"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "30vw",
            }}
          >
            View All Inventory
            <IoIosArrowForward />
          </button>
          <button
            className="local-btn"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "30vw",
            }}
          >
            Expiring Soon
            <IoIosArrowForward />
          </button>
          <button
            className="local-btn"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "30vw",
            }}
          >
            Expired
            <IoIosArrowForward />
          </button>
          <button
            className="local-btn"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "30vw",
            }}
          >
            View the latest ministry list
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
