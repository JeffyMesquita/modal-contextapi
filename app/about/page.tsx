"use client";
import { ModalContext } from "@/components/modal/modal-context";
import { Button } from "@/components/ui/button";
import { useContext } from "react";

export default function AboutPage() {
  const { setShow } = useContext(ModalContext);

  return (
    <div className="flex flex-col justify-center items-center space-y-10 mt-10">
      <h1 className="text-2xl">Let&rsquo;s test our Modal</h1>
      <Button onClick={() => setShow(true)}>Open Modal</Button>
    </div>
  );
}
