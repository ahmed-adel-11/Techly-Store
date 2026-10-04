"use client";

interface AuthTabsProps {
  activeTab: "signin" | "register";
  onChange: (tab: "signin" | "register") => void;
}

const AuthTabs = ({ activeTab, onChange }: AuthTabsProps) => {
  return (
    <div className="grid grid-cols-2 border-b border-border">
      <button
        type="button"
        onClick={() => onChange("signin")}
        className={`relative py-5 text-sm font-medium transition ${
          activeTab === "signin"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Sign in
        {activeTab === "signin" && (
          <span className="absolute inset-x-0 bottom-0 h-px bg-[#f2f1ee]" />
        )}
      </button>

      <button
        type="button"
        onClick={() => onChange("register")}
        className={`relative py-5 text-sm font-medium transition ${
          activeTab === "register"
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Create account
        {activeTab === "register" && (
          <span className="absolute inset-x-0 bottom-0 h-px bg-[#f2f1ee]" />
        )}
      </button>
    </div>
  );
};

export default AuthTabs;
