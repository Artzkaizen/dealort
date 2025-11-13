import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/launches", label: "Launches" },
  ] as const;

  

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <nav className="flex justify-between items-center w-full gap-4 px-2 sm:px-4 py-3">
          <img src="/logo.svg" alt="Logo" className="h-5 invert" />

            <div className="flex gap-3">
              {links.map(({ to, label }) => (
                <Link key={to} to={to} >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link to="/login" className="text-xs">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/login" className="text-xs">Signup</Link>
              </Button>
            </div>
        </nav>

        <div className="flex items-center gap-2"></div>
      </div>
      <hr />
    </div>
  );
}
