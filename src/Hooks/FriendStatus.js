import React, { useState, useEffect } from "react";

const FriendStatus = (props) => {
  const [isOnline, setIsOnline] = useState(null);

  const handleStatusChange = (status) => {
    setIsOnline(status.isOnline);
  };

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
};

export default FriendStatus;
