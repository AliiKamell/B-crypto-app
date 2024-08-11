
import './TopGainers.css'
import '../../assets/Animation - 1716645514751.gif'
import TopGainersTable from '../../components/TopGTable/TopGTable';
import { FaArrowTrendUp } from "react-icons/fa6";

function TopGainers() {
  return (
    <div className="top-gainers-pg">
      <div className='head-tg'>
        <h1>Top-Gainers</h1>
        <FaArrowTrendUp className='head-icon' />
      </div>
      <TopGainersTable />
      <p className='p-topG'>The table above showcases the top 10 gainers among the top 100 cryptocurrencies over the past 24 hours.</p>
    </div>
  )
}

export default TopGainers;
