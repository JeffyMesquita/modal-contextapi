"use client";

import { Smile } from "lucide-react";
import { useContext } from "react";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { ModalContext } from "./modal-context";

function Modal() {
  const { show, setShow } = useContext(ModalContext);

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
        <DialogHeader onClick={() => setShow(false)}>
          <Smile size={80} color="green" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
