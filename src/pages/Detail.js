import { useLocation } from "react-router-dom";
import React from "react";

const Detail = () => {
  const location = useLocation();
  const value = location.state.value;

  return (
    <div>
      <div>{value.scheduleIdx}</div>
      <div>{value.scheduleName}</div>
      <div>{value.scheduleTime}</div>
      <div>{value.modifiedDt}</div>
    </div>
  );
};
export default Detail;
