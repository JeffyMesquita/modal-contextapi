"use client";

import { createContext } from "react";

interface ModalContextProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  show: false,
} as ModalContextProps);
