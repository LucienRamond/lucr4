import ComputerNavbar from "./ComputerNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className={`p-2`}>
      <div className={`sm:block hidden`}>
        <ComputerNavbar />
      </div>
      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
    </div>
  );
}
