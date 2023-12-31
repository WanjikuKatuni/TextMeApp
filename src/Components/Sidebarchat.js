import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

function Sidebarchat({ id, name, addNewChat }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    // set image using random number
    setImage(Math.floor(Math.random() * 5000));
  }, []);

  // new chat
  const createChat = async () => {
    const roomName = prompt("Please enter name of chat");

    if (roomName) {
      const docRef = await addDoc(collection(db, "rooms"), {
        name: roomName
      })
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebar-chat flex p-5 cursor-pointer border-b border-solid border-black border-2 hover:bg-[#1D003A]">
        <Avatar
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${image}`}
          alt="avatar"
        />
        <div className="sidebarchat-info ml-4 text-[#FFFFFF]">
          <h2 className="mb-[8px] text-sm font-semibold">{name}</h2>
          <p className="font-extralight text-xs">Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div
      onClick={createChat}
      className="sidebar-chat flex p-5 cursor-pointer border-b border-solid border-black text-[#FFFFFF]hover:bg-[#1D003A]"
    >
      <h2 className="mb-[8px] text-xl font-bold">Add New Chat</h2>
    </div>
  );
}

export default Sidebarchat;
