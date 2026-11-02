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
      <h1>New message from: {firstName}</h1>
      <h2>Message: {message}</h2>
      <h3>Reply to: {email}</h3>
    </div>
  );
}
