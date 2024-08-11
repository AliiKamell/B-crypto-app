import './TopLosers.css'
import TopLosersTable from '../../components/TopLosersTable/TopLosersTable'
import { FaArrowTrendDown } from "react-icons/fa6";


function TopLosers() {
  return (
    <div className="top-Losers-pg">
      <div className='topL-head'>
        <h1>Top losers</h1>
        <FaArrowTrendDown className='losers-icon' />
      </div>
      <TopLosersTable />
      <p className='p-TopL'>The table above showcases the top 10 losers among the top 100 cryptocurrencies over the past 24 hours.</p>
    </div>
  )
}

export default TopLosers
