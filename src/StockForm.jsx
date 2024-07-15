import React, { useContext, useEffect, useState } from "react";
import StockList from "./StockList";
import StockContext from "./contexts/StockContext";
function StockForm() {
  const { formData, setFormData, stockList, setStockList } =
    useContext(StockContext);

  const [currPrice, setCurrPrice] = useState("");
  const [profitLoss, setProfitLoss] = useState("");
  const APIKEY = "CRNJ6WFK2MJ5K8MA";

  const handleForm = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  useEffect(() => {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${formData.symbol}&apikey=${APIKEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data["Global Quote"]["05. price"]);
        setCurrPrice(data["Global Quote"]["05. price"]);
        setProfitLoss(
          ((currPrice - formData.purchasePrice) * formData.qty).toFixed(2)
        );
      });
  }, [formData]);

  const handleAddStock = () => {
    setStockList(() => [{ ...formData, currPrice, profitLoss }]);
    setFormData({ symbol: "", qty: "", purchasePrice: "" });
    setCurrPrice("");
    setProfitLoss("");
  };
  return (
    <div className="container">
      <input
        onChange={(e) => handleForm(e)}
        placeholder="Stock Symbol"
        name="symbol"
        type="text"
        value={formData.symbol}
      />
      <input
        placeholder="Quantity"
        name="qty"
        onChange={(e) => handleForm(e)}
        value={formData.qty}
      />
      <input
        placeholder="Purchase Price"
        onChange={(e) => handleForm(e)}
        name="purchasePrice"
        value={formData.purchasePrice}
      />
      <button
        onClick={handleAddStock}
        type="button"
        className="btn btn-outline-primary"
      >
        Add Stock
      </button>

      <hr></hr>
      <StockList stockList={stockList} />
    </div>
  );
}

export default StockForm;
