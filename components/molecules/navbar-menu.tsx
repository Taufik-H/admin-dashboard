import React from "react";
import Avatar from "../atoms/avatar";
import Chat from "../atoms/chat";
import Notification from "../atoms/notification";

const NavbarMenu = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      <Chat />
      <Notification />
      <Avatar />
    </div>
  );
};

export default NavbarMenu;
