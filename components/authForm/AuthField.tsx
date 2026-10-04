import { UseFormRegister } from "react-hook-form";

interface AuthFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string | undefined;
  success?: string;
}

const AuthField = ({
  label,

  type = "text",
  placeholder,
  error,
  success,
  ...register
}: AuthFieldProps) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-3 block text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
      >
        {label}
      </label>

      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-[4px] border border-border bg-surface px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-[#f2f1ee]"
      />
      {error && <p className="mt-3 text-red-600">{error}</p>}
    </div>
  );
};

export default AuthField;
