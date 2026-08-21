import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const LINES = [
  "Wrong lighting? I left a switch. Click me.",
  "Too bright? Too dim? Flip it. Click me.",
  "If this mood isn't yours, change it. Click me.",
  "I keep both looks. Take the one that sits right. Click me.",
  "One tap. Other light. Click me.",
];

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const [toast, setToast] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    let hideTimer = 0;
    let index = 0;

    const showNext = (): void => {
      window.clearTimeout(hideTimer);
      setLine(index % LINES.length);
      setToast(true);
      hideTimer = window.setTimeout(() => setToast(false), 6500);
      index += 1;
    };

    const first = window.setTimeout(showNext, 700);
    const tick = window.setInterval(showNext, 60_000);

    return () => {
      window.clearTimeout(first);
      window.clearTimeout(hideTimer);
      window.clearInterval(tick);
    };
  }, []);

  const changeTheme = (): void => {
    setToast(false);
    toggle();
  };

  return (
    <div className="theme-dock">
      <button
        className="theme-fab"
        type="button"
        onClick={changeTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Light mode" : "Dark mode"}
      >
        {isDark ? <Sun size={22} strokeWidth={2.25} /> : <Moon size={22} strokeWidth={2.25} />}
      </button>
      <p className={`theme-toast${toast ? " on" : ""}`} role="status">
        {LINES[line]}
      </p>
    </div>
  );
}
