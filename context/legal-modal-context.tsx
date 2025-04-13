"use client";

import { createContext, useState, useContext, type ReactNode } from "react";

type ModalType = "terms" | "privacy" | null;

interface LegalModalContextType {
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const LegalModalContext = createContext<LegalModalContextType | undefined>(
  undefined
);

export function LegalModalProvider({ children }: { children: ReactNode }) {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <LegalModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
    </LegalModalContext.Provider>
  );
}

export function useLegalModal() {
  const context = useContext(LegalModalContext);
  if (context === undefined) {
    throw new Error("useLegalModal must be used within a LegalModalProvider");
  }
  return context;
}
