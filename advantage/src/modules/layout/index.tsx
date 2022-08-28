import { PropsWithChildren } from "react";

export const GameWrapper = ({ children }: PropsWithChildren) => (
  <div className="flex items-center justify-center p-6 fixed w-full h-full top-0 left-0 flex-col">
    {children}
  </div>
)
