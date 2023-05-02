import React from 'react';
import './Sidebar.css';
import SidebarLink from './Link/Link';

const Sidebar = ({ activeLink, className }) => {
  return (
    <div className={`${' ' + className}`}>
      <SidebarLink />
    </div>
  );
};

export default Sidebar;
