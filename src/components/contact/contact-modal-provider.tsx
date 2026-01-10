"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import ContactModal from "./contact-modal";

type ContactModalContextValue = {
  openModal: (topic?: string) => void;
  closeModal: () => void;
  topic: string;
  isOpen: boolean;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used inside ContactModalProvider");
  return ctx;
}

export default function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState<string>("General Contact");

  const value = useMemo<ContactModalContextValue>(
    () => ({
      isOpen,
      topic,
      openModal: (t?: string) => {
        setTopic(t?.trim() || "General Contact");
        setIsOpen(true);
      },
      closeModal: () => setIsOpen(false),
    }),
    [isOpen, topic]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {/* Modal rendered globally so it works from any page */}
      <ContactModal open={isOpen} onClose={() => setIsOpen(false)} defaultTopic={topic} />
    </ContactModalContext.Provider>
  );
}
