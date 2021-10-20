import React from "react";


const columns = [
  {
    text: "Status",
    dataField: "is_shipped",
    formatter(cellContent, row) {
      return (
        <p className="mb-0">
          {row.is_shipped && <i className="mdi mdi-anchor"/>}
          {row.is_sold && <i className="mdi mdi-minus-circle text-success" />}
          {row.comment && <i className="mdi mdi-card-text-outline text-success" />}
        </p>
      );
    }
  },
  { text: "id", dataField: "id", sort: true },
  { text: "Date created", dataField: "created_at", sort: true },
  { text: "Client", dataField: "client.fullName" },
  {
    text: "Марка",
    dataField: "carModel",
    formatter: (cellContent, row) => {
      return (<p className="mb-0">{row.carModel.mark.name} | {row.carModel.name}</p>);
    }
  },
  { text: "Lot Number", dataField: "lotNumber" },
  { text: "Auction", dataField: "auction.name" },
  { text: "VIN", dataField: "vinNumber" },
  { text: "Price", dataField: "price" },
  { text: "Price 10%", dataField: "price10" },
  { text: "Auction fees", dataField: "auctionFees" },
  { text: "Recycle", dataField: "recycle" },
  { text: "Transport", dataField: "transport" },
  { text: "Total", dataField: "total" },
  { text: "Amount", dataField: "amount" },
  { text: "+Expenses", dataField: "additional_expenses" },
  { text: "FOB", dataField: "fob" },
  { text: "Total FOB", dataField: "total_FOB" },
  { text: "Total FOB2", dataField: "total_FOB2" }
];

export default columns;