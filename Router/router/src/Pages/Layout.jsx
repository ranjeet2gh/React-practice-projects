import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
      <nav>
         <div className="layout">
         
            <Link className="item" to="/">Home</Link>
          
          
            <Link className="item" to="/blogs">Blogs</Link>
          
          
            <Link className="item" to="/about">About</Link>
          
          
            <Link className="item" to="/*">NoPages</Link>
          
            </div>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;