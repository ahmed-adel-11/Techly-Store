interface IContactInputProps {
  label: string;
  children: React.ReactNode;
}

const ContactInput = ({ label, children }: IContactInputProps) => {
  return (
    <div>
      <label className="mb-3 block text-[11px] font-medium uppercase tracking-[0.25em] text-[#9c9c96]">
        {label}
      </label>

      {children}
    </div>
  );
};

export default ContactInput;
