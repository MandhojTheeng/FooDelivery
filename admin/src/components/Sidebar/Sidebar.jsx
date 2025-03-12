import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink 
                to='/add' 
                className={({ isActive }) => isActive ? 'sidebar-option active' : 'sidebar-option'}
            >
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink 
                to='/list' 
                className={({ isActive }) => isActive ? 'sidebar-option active' : 'sidebar-option'}
            >
                <img src={assets.order_icon} alt="" />
                <p>List Items</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink 
                to='/order' 
                className={({ isActive }) => isActive ? 'sidebar-option active' : 'sidebar-option'}
            >
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
