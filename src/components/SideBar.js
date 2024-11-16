import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaSackDollar } from 'react-icons/fa6';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar() {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleSubmenuClick = (submenuId) => {
        setActiveSubmenu(prev => (prev === submenuId ? null : submenuId));
    }

    return (
        <div className="container-sidebar">
            <Sidebar collapsed={false}>
                <Menu>
                    <SubMenu
                        className='submenu'
                        label="Dashboard"
                        open={activeSubmenu === 'dashboard'}
                        onClick={() => handleSubmenuClick('dashboard')}>
                        <MenuItem className='menu-item'>Overview</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Inventory Management"
                        open={activeSubmenu === 'management'}
                        onClick={() => handleSubmenuClick('management')}>
                        <MenuItem className='menu-item'>Products</MenuItem>
                        <MenuItem className='menu-item'>Categories</MenuItem>
                        <MenuItem className='menu-item'>Stock Levels</MenuItem>
                        <MenuItem className='menu-item'>Suppliers</MenuItem>
                        <MenuItem className='menu-item'>Purchase Orders</MenuItem>
                        <MenuItem className='menu-item'>Sales Orders</MenuItem>
                        <MenuItem className='menu-item'>Stock Movements</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Reports"
                        open={activeSubmenu === 'reports'}
                        onClick={() => handleSubmenuClick('reports')}>
                        <MenuItem className='menu-item'>Inventory Report</MenuItem>
                        <MenuItem className='menu-item'>Sales Report</MenuItem>
                        <MenuItem className='menu-item'>Purchase Report</MenuItem>
                        <MenuItem className='menu-item'>Low Stock Alerts</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Orders & Fulfillment"
                        open={activeSubmenu === 'orders'}
                        onClick={() => handleSubmenuClick('orders')}>
                        <MenuItem className='menu-item'>All Orders</MenuItem>
                        <MenuItem className='menu-item'>Pending Orders</MenuItem>
                        <MenuItem className='menu-item'>Completed Orders</MenuItem>
                        <MenuItem className='menu-item'>Returns</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="User Management"
                        open={activeSubmenu === 'userManagement'}
                        onClick={() => handleSubmenuClick('userManagement')}>
                        <MenuItem className='menu-item'>Users</MenuItem>
                        <MenuItem className='menu-item'>Roles & Permissions</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Settings"
                        open={activeSubmenu === 'settings'}
                        onClick={() => handleSubmenuClick('settings')}>
                        <MenuItem className='menu-item'>General Settings</MenuItem>
                        <MenuItem className='menu-item'>Tax Settings</MenuItem>
                        <MenuItem className='menu-item'>Shipping Settings</MenuItem>
                        <MenuItem className='menu-item'>Integrations</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Inventory Adjustments"
                        open={activeSubmenu === 'inventoryAdjustments'}
                        onClick={() => handleSubmenuClick('inventoryAdjustments')}>
                        <MenuItem className='menu-item'>Adjustments</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Barcode Scanning"
                        open={activeSubmenu === 'barcode'}
                        onClick={() => handleSubmenuClick('barcode')}>
                        <MenuItem className='menu-item'>Scan Products</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Help & Support"
                        open={activeSubmenu === 'help'}
                        onClick={() => handleSubmenuClick('help')}>
                        <MenuItem className='menu-item'>FAQ</MenuItem>
                        <MenuItem className='menu-item'>Contact Support</MenuItem>
                        <MenuItem className='menu-item'>Documentation</MenuItem>
                    </SubMenu>

                    <SubMenu
                        className='submenu'
                        label="Optional Sections"
                        open={activeSubmenu === 'optional'}
                        onClick={() => handleSubmenuClick('optional')}>
                        <MenuItem className='menu-item'>Audit Logs</MenuItem>
                        <MenuItem className='menu-item'>Notifications</MenuItem>
                        <MenuItem className='menu-item'>Activity Feed</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>;
        </div>
    );
}

export default SideBar;