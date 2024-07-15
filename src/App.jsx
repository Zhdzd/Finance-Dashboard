import { PureComponent, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StockForm from "./StockForm";
import StockList from "./StockList";
import StockContext from "./contexts/StockContext";
function App() {
  const [formData, setFormData] = useState({
    symbol: "",
    qty: "",
    purchasePrice: "",
  });
  const [stockList, setStockList] = useState({
    ...formData,
    currPrice: "",
  });
  return (
    <>
      <div className="container ">
        <h1>Finance Dashboard</h1>
        <hr></hr>

        <StockContext.Provider
          value={{ formData, setFormData, stockList, setStockList }}
        >
          <StockForm />
        </StockContext.Provider>
      </div>
    </>
  );
}

export default App;
