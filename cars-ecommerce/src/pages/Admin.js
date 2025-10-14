import React from "react";

export default function Admin() {
  const stats = [
    { label: "Leads", value: 128 },
    { label: "Sales", value: 56 },
    { label: "Monthly Profit", value: "Ksh 1,250,000" }
  ];

  return (
    <section className="container py-5">
      <h2>SalesPilot Dashboard</h2>
      <div className="row mt-4">
        {stats.map((s,i)=>(
          <div className="col-md-4 mb-3" key={i}>
            <div className="card p-4 text-center shadow-sm">
              <h3 className="mb-0">{s.value}</h3>
              <p className="text-muted">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
