import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaSackDollar } from 'react-icons/fa6';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SideBar({ handlePage }) {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const handleSubmenuClick = (submenuId) => {
        setActiveSubmenu(prev => (prev === submenuId ? null : submenuId));
    }

    const handleSidebar = (page) => {
        handlePage(page)
    }

    const menuItems = [
        {
            label: 'Dashboard',
            key: 'dashboard',
            items: [{ label: 'Overview', key: 'overview' }]
        },
        {
            label: 'Inventory Management',
            key: 'management',
            items: [
                { label: 'Products', key: 'products' },
                { label: 'Categories', key: 'categories' },
                { label: 'Stock Movements', key: 'stockMovement' },
                { label: 'Suppliers', key: 'suppliers' },
                // { label: 'Purchase Orders', key: 'purchaseOrders' },
                // { label: 'Sales Orders', key: 'salesOrders' }
            ]
        },
        // {
        //     label: 'Reports',
        //     key: 'reports',
        //     items: [
        //         { label: 'Inventory Report', key: 'inventoryReport' },
        //         { label: 'Sales Report', key: 'salesReport' },
        //         { label: 'Purchase Report', key: 'purchaseReport' },
        //         { label: 'Low Stock Alerts', key: 'lowStockAlerts' }
        //     ]
        // },
        // {
        //     label: 'Orders & Fulfillment',
        //     key: 'orders',
        //     items: [
        //         { label: 'All Orders', key: 'allOrders' },
        //         { label: 'Pending Orders', key: 'pendingOrders' },
        //         { label: 'Completed Orders', key: 'completedOrders' },
        //         { label: 'Returns', key: 'returns' }
        //     ]
        // },
        {
            label: 'User Management',
            key: 'userManagement',
            items: [
                { label: 'Users', key: 'users' },
                { label: 'Roles & Permissions', key: 'rolesPermissions' }
            ]
        },
        {
            label: 'Settings',
            key: 'settings',
            items: [
                { label: 'General Settings', key: 'generalSettings' },
                { label: 'Tax Settings', key: 'taxSettings' },
                { label: 'Integrations', key: 'integrations' }
            ]
        },
        {
            label: 'Help & Support',
            key: 'help',
            items: [
                { label: 'FAQ', key: 'faq' },
                { label: 'Contact Support', key: 'contactSupport' },
                { label: 'Documentation', key: 'documentation' }
            ]
        },
        // {
        //     label: 'Help & Support',
        //     key: 'help2',
        // }
    ];

    return (
        <div className="container-sidebar">
            <Sidebar collapsed={false}>
                <Menu>
                    {menuItems.map((menu) => (
                        menu.items ?
                            <SubMenu
                                key={menu.key}
                                className='submenu'
                                label={menu.label}
                                open={activeSubmenu === menu.key}
                                onClick={() => handleSubmenuClick(menu.key)}
                            >
                                {menu.items?.map(menuItem => (
                                    <MenuItem
                                        key={menuItem.key}
                                        className='menu-item'
                                        onClick={() => handleSidebar(menuItem.key)}
                                    >
                                        {menuItem.label}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                            :
                            <MenuItem
                                key={menu.key}
                                className='menu-item'
                                onClick={() => handleSubmenuClick(menu.key)}
                            >
                                {menu.label}
                            </MenuItem>
                    ))}
                </Menu>
            </Sidebar>;
        </div>
    );
}

export default SideBar;