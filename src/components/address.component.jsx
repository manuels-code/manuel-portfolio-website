import React from "react";

const Address = () => {
  return (
    <address className="flex flex-col">
      <div>
        <h5>Location:</h5>
        <p>Dallas,TX 75287</p>
      </div>
      <div>
        <h5>My Email:</h5>
        <a href="mailto:manueldoescode@gmail.com">manueldoescode@gmail.com</a>
      </div>
    </address>
  );
};

export default Address;
