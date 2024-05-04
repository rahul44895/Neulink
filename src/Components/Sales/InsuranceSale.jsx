import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

export default function InsuranceSale() {
  return (
    <div style={{ backgroundColor: "#f9fafb", padding: "5em 1em 0 1em", height:"93vh" }}>
      <form>
        <div className="local-mb-3">
          <label>
            <h4>
              Emirates ID<span style={{ color: "red" }}>*</span>
            </h4>
          </label>
          <input
            type="text"
            className="input-field local-w-100"
            placeholder="784-1997-xxxxxxxx"
          />
        </div>
        <div className="local-mb-3">
          <label>
            <h4>
              ERX Number<span style={{ color: "red" }}>*</span>
            </h4>
          </label>
          <input
            type="text"
            className="input-field local-w-100"
            placeholder="784-1997-xxxxxxxx"
          />
        </div>
        <button className="local-mb-3 local-btn local-btn-primary local-w-100">
          <LuBadgeCheck /> Submit and Review Items
        </button>
        <button
          className="local-mb-3 local-btn local-w-100"
          style={{ color: "#b4b4b9" }}
        >
          <LuBadgeCheck /> Print Description
        </button>
      </form>
    </div>
  );
}
