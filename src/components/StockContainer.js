import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockClick}) {
  const stockJSX = stocks.map(stock=><Stock key={stock.id} stock={stock} onStockClick={onStockClick} isPortfolio={false}/>)
  return (
    <div>
      <h2>Stocks</h2>
      {stockJSX}
    </div>
  );
}

export default StockContainer;
