import Invoice from '@/src/components/Invoice';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const form = () => {
  return (
    <Router>
    <div style={{ padding: "20px" }}>
      <h1>Invoice Generator</h1>
      <p>Click a link below to generate the invoice:</p>

      {/* Dynamic Links */}
      <ul>
      <li>
  <Link to="/invoice?name=Joe+Selvaraj&plan=Elite&due=16">
    /invoice?name=Joe+Selvaraj&plan=Elite&due=16
  </Link>
</li>

        <li>
          <Link to="/invoice?name=Alice Smith&plan=Standard&due=50">
            Generate Invoice for Alice Smith
          </Link>
        </li>
      </ul>

      {/* Routes */}
      <Routes>
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  </Router>
  )
}

export default form