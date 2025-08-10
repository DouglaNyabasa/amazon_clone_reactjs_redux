import React from "react";

const ProductBadge = ({ badge }) => {
  if (badge === "choice") {
    return (
      <span className="text-xs xl:text-sm bg-slate-800 text-white p-1">
        Amazons <span className="text-orange-500">Choice</span>
      </span>
    );
  } else if (badge === "seller") {
    return (
      <div className="text-xs xl:text-sm bg-orange-500 text-white p-1"></div>
    );
  } else if (badge === "limited") {
    return (
      <div className="text-xs xl:text-sm  bg-red-500 text-white p-1"></div>
    );
  }

  return <div></div>;
};

export default ProductBadge;
