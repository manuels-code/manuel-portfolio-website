export const Button = (props) => {
  let styles;
  if (props.color === "white") {
    styles = "bg-white text-[#999]";
  } else {
    styles = " bg-blue-600 text-white";
  }

  return (
    <button
      className={`px-6 py-3 rounded-md font-medium capitalize ${styles}`}>
      {props.children}
    </button>
  );
};
