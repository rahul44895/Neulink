import React, { useState } from "react";
import ProductArea from "./ProductArea";
import InsuranceSale from "./InsuranceSale";

export default function Sales() {
  const [insuranceSale, setInsuranceSale] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 4 }}>
        <ProductArea
          insuranceSale={insuranceSale}
          setInsuranceSale={setInsuranceSale}
        />
      </div>
      {insuranceSale && (
        <div style={{ flex: 1 }}>
          <InsuranceSale />
        </div>
      )}
    </div>
  );
}
