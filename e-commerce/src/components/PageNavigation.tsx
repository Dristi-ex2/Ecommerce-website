import { ReactNode } from "react";
import { NavLink } from "react-router-dom";


type PageNavigationProps = {
  title: string;
  children: ReactNode; // ✅ accept children
};

const PageNavigation = ({ title, children }: PageNavigationProps) => {
  return (
    <>
      < NavLink to='/'>Home</NavLink>/{title}
      {children}
    </>
  );
};

export default PageNavigation;
