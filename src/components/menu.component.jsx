const Menu = ({menuLinks}) => {
  return (
    <ul className="lg:flex h-full items-center hidden transition-transform duration-75 ease-in-out">
      {menuLinks.map(({ page, link }) => (
        <li key={page}>
          <a className="px-4" href={link}>
            {[page]}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
