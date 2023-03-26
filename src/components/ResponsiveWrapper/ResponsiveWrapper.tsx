import React from "react";

type Props = {
  children: React.ReactNode;
};

const ResponsiveWrapper = (props: Props) => {
  return (
    <div className="grid items-center grid-cols-1 place-items-center md:grid-cols-3">
      {props.children}
    </div>
  );
};

export default ResponsiveWrapper;
