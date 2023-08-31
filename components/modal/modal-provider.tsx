"use client";

import { useState } from "react";
import { ModalContext } from "./modal-context";

function ModalProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider };
