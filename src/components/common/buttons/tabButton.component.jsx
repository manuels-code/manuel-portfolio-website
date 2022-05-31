const TabButton = (props) => {
  let styles;
  if (props.active === true) {
    styles = "bg-blue-500 text-white";
  } else {
    styles = "bg-white text-[#999]";
  }

  return (
    <a
      href="/"
      className={`rounded-sm px-4 py-2 drop-shadow-md capitalize ${styles}`}
    >
      {props.children}
    </a>
  );
};
export default TabButton;
