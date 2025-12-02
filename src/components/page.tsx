import type { ReactNode } from "react";

export default function Page({
  children,
  style,
}: {
  children: ReactNode;
  title?: string;
  style?: string;
}) {
  return (
    <div
      className={`pt-[100px] max-w-[90%] min-w-[500px] mx-auto grid justify-center ${style}`}
    >
      {children}
    </div>
  );
}
