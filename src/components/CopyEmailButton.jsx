import { useEffect, useRef, useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { site } from "../data/site";
import { secondaryButton } from "../lib/styles";

async function writeToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export default function CopyEmailButton({
  email = site.email,
  label = "Copy Email",
  className = "",
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await writeToClipboard(email);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`${secondaryButton} ${className}`.trim()}
        onClick={handleCopy}
        aria-label={`Copy email address ${email}`}
      >
        {copied ? (
          <LuCheck aria-hidden="true" size={16} />
        ) : (
          <LuCopy aria-hidden="true" size={16} />
        )}
        <span>{copied ? "Copied!" : label}</span>
      </button>

      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${email} copied to clipboard` : ""}
      </span>
    </>
  );
}
