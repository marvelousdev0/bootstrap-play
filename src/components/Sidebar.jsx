import cx from "classnames";
import { Link, useLocation } from "react-router-dom";
import { sidebarOptions } from "../constants/sidebar";

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="sidebar p-3">
      <nav className="container-fluid">
        <div
          className="list-group list-group-flush"
          id="list-tab"
          role="tablist"
        >
          {sidebarOptions.map((option) => (
            <Link
              key={option.id}
              id={option.id}
              className={cx("list-group-item list-group-item-action rounded", {
                "active fw-bold": pathname === option.to,
              })}
              to={option.to}
            >
              {option.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
