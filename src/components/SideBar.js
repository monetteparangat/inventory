import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaSackDollar } from 'react-icons/fa6';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="container-sidebar">
            <Sidebar collapsed={false}>
                <Menu closeOnClick={true}>
                    <SubMenu label="Dashboard">
                        <MenuItem>Overview</MenuItem>
                    </SubMenu>

                    <SubMenu label="Inventory Management">
                        <MenuItem>Products</MenuItem>
                        <MenuItem>Categories</MenuItem>
                        <MenuItem>Stock Levels</MenuItem>
                        <MenuItem>Suppliers</MenuItem>
                        <MenuItem>Purchase Orders</MenuItem>
                        <MenuItem>Sales Orders</MenuItem>
                        <MenuItem>Stock Movements</MenuItem>
                    </SubMenu>

                    <SubMenu label="Reports">
                        <MenuItem>Inventory Report</MenuItem>
                        <MenuItem>Sales Report</MenuItem>
                        <MenuItem>Purchase Report</MenuItem>
                        <MenuItem>Low Stock Alerts</MenuItem>
                    </SubMenu>

                    <SubMenu label="Orders & Fulfillment">
                        <MenuItem>All Orders</MenuItem>
                        <MenuItem>Pending Orders</MenuItem>
                        <MenuItem>Completed Orders</MenuItem>
                        <MenuItem>Returns</MenuItem>
                    </SubMenu>

                    <SubMenu label="User Management">
                        <MenuItem>Users</MenuItem>
                        <MenuItem>Roles & Permissions</MenuItem>
                    </SubMenu>

                    <SubMenu label="Settings">
                        <MenuItem>General Settings</MenuItem>
                        <MenuItem>Tax Settings</MenuItem>
                        <MenuItem>Shipping Settings</MenuItem>
                        <MenuItem>Integrations</MenuItem>
                    </SubMenu>

                    <SubMenu label="Inventory Adjustments">
                        <MenuItem>Adjustments</MenuItem>
                    </SubMenu>

                    <SubMenu label="Barcode Scanning">
                        <MenuItem>Scan Products</MenuItem>
                    </SubMenu>

                    <SubMenu label="Help & Support">
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Contact Support</MenuItem>
                        <MenuItem>Documentation</MenuItem>
                    </SubMenu>

                    <SubMenu label="Optional Sections">
                        <MenuItem>Audit Logs</MenuItem>
                        <MenuItem>Notifications</MenuItem>
                        <MenuItem>Activity Feed</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>;
        </div>
    );
}

export default SideBar;