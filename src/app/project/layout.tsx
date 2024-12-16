import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return <div className="bg-black-100 min-h-screen h-full">{children}</div>;
}
