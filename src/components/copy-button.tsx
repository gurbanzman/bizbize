"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 saniye sonra eski haline dönsün
    } catch (error) {
      console.error("Kopyalama başarısız!", error);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="link"
      className="flex gap-2 items-center p-0 app-element"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </Button>
  );
}
