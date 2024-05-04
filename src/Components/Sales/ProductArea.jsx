import React, { useState } from "react";
import "./SalesStyle.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export default function ProductArea({ insuranceSale, setInsuranceSale }) {
  const handleInsuranceSaleSlider = (e) => {
    setInsuranceSale(insuranceSale ? false : true);
  };
  const [search, setSearch] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1em",
          borderBottom: "2px solid #f4f4f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button className="local-btn">Sale 1</button>
          <h5 style={{ color: "#b4b4b9" }}>Patient Name</h5>
          <button className="local-btn addSales-btn">+ Add Sale</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "15em",
            position: "absolute",
            right: "10px",
            border: "2px solid #f4f4f5",
            borderRadius: "10px",
            padding: "1em",
          }}
        >
          Insurance Sale
          <label class="switch">
            <input
              type="checkbox"
              onClick={(e) => handleInsuranceSaleSlider(e)}
            />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div style={{ position: "relative", minHeight: "68vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1em",
            gap: "10px",
          }}
        >
          <h1>Product List</h1>
          <div
            style={{
              border: "2px solid #f4f4f5",
              borderRadius: " 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: " center",
              flex: 2,
            }}
          >
            <input
              type="text"
              className="input-field"
              placeholder="Search for products | enter barcode | scan barcode"
              style={{ width: "90%", textAlign: "center" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="local-btn "
              style={{ width: "10%" }}
              onClick={() => setSearch("")}
            >
              Clear All
            </button>
          </div>
          <button className="local-btn local-btn-primary">Remove All</button>
        </div>
        <table className="salesTable">
          <thead>
            <tr>
              <td>Product Name</td>
              <td
                style={{
                  borderLeft: "2px solid rgb(180, 180, 185)",
                  borderRight: "2px solid rgb(180, 180, 185)",
                }}
              >
                Batch No. | Barcode No. | Expiry Date
              </td>
              <td>
                Available Stock
                <br />
                (Unit Per Stock)
              </td>
              <td>Unit Type</td>
              <td>Quantity</td>
              <td>Discount</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MaxiGESIC</td>
              <td>
                0120265757
                <span
                  style={{
                    borderLeft: "2px solid rgb(180, 180, 185)",
                    borderRight: "2px solid rgb(180, 180, 185)",
                    padding: "0 4px",
                    margin: "0 4px",
                    fontWeight: 400,
                  }}
                >
                  005113730001
                </span>
                01/02/2026
              </td>
              <td>4(16)</td>
              <td>Tablet</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CiCircleMinus />
                16
                <CiCirclePlus />
              </td>
              <td>
                <u>5%</u>
              </td>
              <td>AED 15.00</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>
                0120265757
                <span
                  style={{
                    borderLeft: "2px solid rgb(180, 180, 185)",
                    borderRight: "2px solid rgb(180, 180, 185)",
                    padding: "0 4px",
                    margin: "0 4px",
                    fontWeight: 400,
                  }}
                >
                  005113730001
                </span>
                01/02/2026
              </td>
              <td>4(16)</td>
              <td>Sachet</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CiCircleMinus />
                16
                <CiCirclePlus />
              </td>
              <td>
                <u>10%</u>
              </td>
              <td>AED 15.00</td>
            </tr>
            <tr>
              <td>Text</td>
              <td>
                0120265757
                <span
                  style={{
                    borderLeft: "2px solid rgb(180, 180, 185)",
                    borderRight: "2px solid rgb(180, 180, 185)",
                    padding: "0 4px",
                    margin: "0 4px",
                    fontWeight: 400,
                  }}
                >
                  005113730001
                </span>
                01/02/2026
              </td>
              <td>4(16)</td>
              <td>Sachet</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <CiCircleMinus />
                16
                <CiCirclePlus />
              </td>
              <td>
                <u>10%</u>
              </td>
              <td>AED 15.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="sales-footer-section1">
          <div className="sales-footer-section1-item-container">
            <div className="sales-footer-section1-item">
              <div className="sales-footer-section1-head">Co-Pay</div>
              <div className="sales-footer-section1-text">AED 0.00</div>
            </div>
            <div className="sales-footer-section1-item">
              <div className="sales-footer-section1-head">Disc.</div>
              <div className="sales-footer-section1-text">AED 0.00</div>
            </div>
            <div className="sales-footer-section1-item">
              <div className="sales-footer-section1-head">Net Amt.</div>
              <div className="sales-footer-section1-text">AED 1000.00</div>
            </div>
          </div>
          <div className="sales-footer-section1-item" style={{padding:"1em 1em"}}>
            <div className="sales-footer-section1-head">Total Amount</div>
            <div className="sales-footer-section1-text">AED 0.00</div>
          </div>
        </div>
        <div className="sales-footer-section2">
          <div className="local-d-flex" style={{ justifyContent: "flex-end" }}>
            <button className="local-btn local-btn-bgwhite local-m-3">
              Conitnue with Card
            </button>
            <button className="local-btn local-btn-bgwhite local-m-3">
              Conitnue with Cash
            </button>
          </div>
          <div className="local-d-flex" style={{ justifyContent: "flex-end" }}>
            <button className="local-btn  local-btn-bgwhite local-m-3">
              Split Pay
            </button>
            <button className="local-btn  local-btn-bgwhite local-m-3">
              Hold Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
