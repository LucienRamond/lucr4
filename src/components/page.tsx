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
    <div className={`pt-[100px] grid justify-center ${style}`}>
      {title && (
        <div>
          <div className="">{title}</div>
        </div>
      )}
      <div className="">{children}</div>
    </div>
  );
}
