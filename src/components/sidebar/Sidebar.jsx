import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react';

const Sidebar = () => {

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Registered Users</span>
            </li>
          </Link>

          {/* <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CreditScoreIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li> */}
          {/* <p className="title">USEFUL</p>
          <li>
            <AnalyticsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">ADMIN</p>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}

          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <LogoutOutlinedIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
          
        </ul>
      </div>
      {/* <div className='bottom'>
        <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
      </div> */}
    </div >
  )
}

export default Sidebar
