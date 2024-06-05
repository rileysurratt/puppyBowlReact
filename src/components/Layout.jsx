// import tailwind ??
import Nav from "./NavBar";
import { PropTypes } from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

Layout.PropType = {
  children: PropTypes.node,
};

export default Layout;
