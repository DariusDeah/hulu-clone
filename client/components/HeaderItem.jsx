import React from "react";

function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20  group">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest group-hover:text-green-500">
        {title.toUpperCase()}
      </p>
    </div>
  );
}

export default HeaderItem;
