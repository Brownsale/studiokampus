import React from "react";

const GoogleMap = ({ extraClass }) => {
  return (
    <div className={`google-map__${extraClass}`}>

      <iframe
        title="template google map"
        src="https://www.google.com/maps/d/u/0/embed?mid=1lJkmvkAoFk8RT4_9Olyd7R2t7BjsuqA&ehbc=2E312F"
        className={`map__${extraClass}`}
        allowFullScreen
      ></iframe>
      
    </div>
  );
};

export default GoogleMap;
