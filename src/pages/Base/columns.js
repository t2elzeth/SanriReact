import React from "react";


const columns= [
    { text: "id", dataField: "id", sort: true },
    { text: "Date created", dataField: "created_at", sort: true },
    { text: "Client", dataField: "client.fullName" },
    {
      text: "CarModel",
      dataField: "carModel",
      formatter: (cellContent, row) => {
        return (<p className="mb-0">{row.carModel.mark.name} | {row.carModel.name}</p>);
      }
    },
    { text: "Auction", dataField: "auction.name" },
    { text: "Lot Number", dataField: "lotNumber" },
    { text: "Documents", dataField: "documentsGiven" },
    { text: "VIN", dataField: "vinNumber" },
    { text: "Year", dataField: "year" },
    { text: "Price", dataField: "price" },
    { text: "Recycle", dataField: "recycle" },
    { text: "Auction fees", dataField: "auctionFees" },
    { text: "Transport", dataField: "transport" },
    { text: "FOB", dataField: "fob" },
    { text: "Amount", dataField: "amount" },
    { text: "Numbers", dataField: "carNumber" },
    { text: "Total", dataField: "total" },
    { text: "Total FOB", dataField: "total_FOB" },
    { text: "Total FOB2", dataField: "total_FOB2" },
    { text: "Tr.company", dataField: "transportCompany.name" },
    { text: "+Expenses", dataField: "additional_expenses" },
    { text: "Comment", dataField: "comment" }
  ];

export default columns;