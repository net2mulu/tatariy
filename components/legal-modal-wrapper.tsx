"use client";

import { LegalModal, TermsContent, PrivacyContent } from "./legal-modals";
import { useLegalModal } from "@/context/legal-modal-context";

export function LegalModalWrapper() {
  const { modalType, closeModal } = useLegalModal();

  return (
    <>
      <LegalModal
        isOpen={modalType === "terms"}
        onClose={closeModal}
        title="Terms and Conditions"
      >
        <TermsContent />
      </LegalModal>

      <LegalModal
        isOpen={modalType === "privacy"}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <PrivacyContent />
      </LegalModal>
    </>
  );
}
