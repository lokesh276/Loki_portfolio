import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function NavBar() {
  return (
    <div>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
                  <div className="text-5xl font-mediu
          ">LT</div>
        </div>
        <div className="flex items-center justify-center m-8 gap-4 ">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
