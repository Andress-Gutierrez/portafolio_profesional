import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export function EmailTemplate({
  firstName,
  message,
  email,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Mail enviado de: {firstName}</h1>
      <h2>Mensaje: {message}</h2>
      <h3>Correo enviado de: {email}</h3>
    </div>
  );
}
