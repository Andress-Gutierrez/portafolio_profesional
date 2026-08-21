"use client";

// components/WhatsAppButton.tsx
import { Button } from "@/Components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phone: string; // Ejemplo: "573001112233"
  message?: string; // Mensaje opcional
}

export function WhatsAppButton({ phone, message }: WhatsAppButtonProps) {
  // Armar la URL de WhatsApp
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(
    message || "¡Hola! Me gustaría ponerme en contacto contigo."
  )}`;

  return (
    <Button
      onClick={() => window.open(url, "_blank")}
      className="bg-green-500 hover:bg-green-600 text-white"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      WhatsApp
    </Button>
  );
}
