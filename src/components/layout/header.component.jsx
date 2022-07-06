import Menu from '../menu.component'

const Header = () => {
  const menuLinks = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "About",
      link: "/",
    },
    {
      page: "Services",
      link: "/",
    },
    {
      page: "Portfolio",
      link: "/",
    },
    {
      page: "Contact",
      link: "/",
    },
  ];

  return (
    <header className="p4 bg-blue-600 fixed w-full">
      <div
        className="
      flex items-center justify-between text-white 
       h-14 lg:h-20 px-4"
      >
        <a className="font-bold  tracking-wide" href="/">
          Manuel Nunez
        </a>
        <button className="lg:hidden">MENU</button>

        <Menu menuLinks={menuLinks} />
      </div>
    </header>
  );
};

export default Header;
