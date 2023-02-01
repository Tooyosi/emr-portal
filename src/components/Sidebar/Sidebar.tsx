import Logo from "components/Logo";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Badge } from "reactstrap";
import routes from "Routes";


const SidebarItem: React.FC<any> = ({ name, classProp, badgeColor, badgeText, icon: Icon, to, onClick, image
}) => {
  const location = useLocation();

  const getSidebarItemClass = (path: String) => {
    return location?.pathname === path ? "active" : "";
  };

  return (
    <li className={"sidebar-item " + getSidebarItemClass(to)}>
      <NavLink to={to} onClick={onClick} className={`${classProp}  sidebar-link d-flex align-items-center`} >
        {image !== null ? <>{image}</> : Icon ? <div className="icon-bg"><Icon size={18} className="align-middle mr-3" /></div> : null}
        {name}
        {badgeColor && badgeText ? (
          <Badge color={badgeColor} size={18} className="sidebar-badge">
            {badgeText}
          </Badge>
        ) : null}
      </NavLink>
    </li>
  );
};


const Sidebar: React.FC<any> = React.memo(({ toggled, toggleSidebar }) => {

  return (
    <div id='sidebar' className={`${toggled && 'toggled'} px-2`}>
      <div className="float-right">
        {toggled && <div id="hamburger-icon" onClick={toggleSidebar} className={toggled ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>}
      </div>
      <div className='my-3 logo'>
       <Link to="/dashboard"> <Logo /></Link>
      </div>
      <PerfectScrollbar>
        <ul className="sidebar-nav">
          {routes.map((category:any, index:any) => {
            return (
              <React.Fragment key={index}>
                  {category.header ? (
                      <li className="ml-2 mb-3 sidebar-header">{category.header}</li>
                    ) : null}
                <SidebarItem
                  name={category.name}
                  to={category.path}
                  image={category?.image || null}
                  icon={category.icon}
                  classProp={category?.classProp}
                  badgeColor={category.badgeColor}
                  badgeText={category.badgeText}
                />
              </React.Fragment>
            );
          })}
        </ul>
      </PerfectScrollbar>
    </div>
  )
})

export default Sidebar