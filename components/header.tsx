import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1120px",
      }}
    >
      <Image src="/logo.svg" alt="canto" width={100} height={40} />
    </div>
  );
};

export default Header;
