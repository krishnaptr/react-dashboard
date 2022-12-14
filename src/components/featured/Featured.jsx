import React from 'react'
import './featured.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Featured() {
  return (
    <div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Income</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">Rp 500.000</span>
        <span className="featuredMoneyRate">
          -11.4 <ArrowDownwardIcon  className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Total Users</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">2000</span>
        <span className="featuredMoneyRate">
          -20 <ArrowDownwardIcon className="featuredIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Total Transactions</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">500</span>
        <span className="featuredMoneyRate">
          +50 <ArrowUpwardIcon className="featuredIcon"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  </div>
  )
}
