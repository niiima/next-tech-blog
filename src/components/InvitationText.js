"use client";
import { useInvitation } from "@/context/InvitationContext";

export default function InvitationText() {
  const { invitationText } = useInvitation();
  return (
    <h4 className='mt-1 text-lg text-center text-gray-700 max-w-xl leading-relaxed bg-brand-50 text-brand-700 p-6 rounded-lg shadow'>
      {invitationText}
    </h4>
  );
}
