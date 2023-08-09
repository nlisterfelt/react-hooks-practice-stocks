import React from "react";

function Stock({stock, onStockClick, isPortfolio}) {

  return (
    <div>
      <div className="card" onClick={e=>onStockClick(stock.id, isPortfolio)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
