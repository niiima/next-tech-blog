"use client";
import { createContext, useContext } from "react";

const InvitationContext = createContext();

export function InvitationProvider({ children }) {
  const invitationText =
    "با کمال احترام دعوت می‌شوید تا در آیین پیوند ما شرکت فرمایید";

  return (
    <InvitationContext.Provider value={{ invitationText }}>
      {children}
    </InvitationContext.Provider>
  );
}

export function useInvitation() {
  return useContext(InvitationContext);
}
