import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      src="/images/avatar.jpg"
      height={30}
      width={30}
      alt="avatar"
      className="object-cover rounded-full "
    />
  );
};

export default Avatar;
