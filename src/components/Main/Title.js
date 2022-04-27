import React from "react";

const Title = ({ title, quote, quotee, source }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h2>
        "{quote}"
        <br /> - {quotee}
        {source && <>
            , <i>{source}</i>
          </>}
      </h2>
      <div className="line" />
    </div>
  );
  
  // {/* {source ? (
  //   <>
  //     , <i>{source}</i>
  //   </>
  // ) : null} */}

  
  // if (source) {
  //   return (
  //     <div className="title">
  //       <h1>{title}</h1>
  //       <h2>
  //         "{quote}"
  //         <br /> - {quotee}, <i>{source}</i>
  //       </h2>
  //       <div className="line" />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="title">
  //       <h1>{title}</h1>
  //       <h2>
  //         "{quote}" <br /> - {quotee}
  //       </h2>
  //       <div className="line" />
  //     </div>
  //   );
  // }
};

export default Title;
