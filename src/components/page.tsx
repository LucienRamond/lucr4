import type { ReactNode } from "react";

export default function Page({
  children,
  title,
  style,
}: {
  children: ReactNode;
  title?: string;
  style?: string;
}) {
  return (
    <div className={`pt-[100px] ${style}`}>
      {title && (
        <div>
          <div className="">{title}</div>
          <div className=""></div>
        </div>
      )}
      <div className=" flex justify-center">{children}</div>
    </div>
  );
}
