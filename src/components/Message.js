import React from "react";
import Ticker from "react-ticker";

function Message() {
  return (
    <div className="mx-1 lg:mx-96 border-8 border-l-sky-700 border-r-sky-700 border-t-0 rounded-lg shadow-lg shadow-lime-700">
      <Ticker mode="await">
        {({ index }) => (
          <>
            <h1 className="font-montserrat text-xl text-sky-900 font-bold">
              fruits and vegetables loved by the family !
            </h1>
          </>
        )}
      </Ticker>
    </div>
  );
}

export default Message;
