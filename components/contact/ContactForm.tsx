import ContactInput from "./ContactInput";

const inputClasses =
  "w-full rounded-[4px] border border-border bg-surface px-4 py-3 text-sm text-primary outline-none transition placeholder:text-[#777772] focus:border-[#f2f1ee]";

const ContactForm = () => {
  return (
    <div className="rounded-[4px] border border-border bg-surface p-6 sm:p-7">
      <h2 className="text-lg font-semibold text-foreground">Send a message</h2>

      <form className="mt-7 space-y-5">
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <ContactInput label="Name">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={inputClasses}
            />
          </ContactInput>

          <ContactInput label="Email">
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className={inputClasses}
            />
          </ContactInput>
        </div>

        {/* Subject */}
        <ContactInput label="Subject">
          <select
            name="subject"
            defaultValue="Order support"
            className={inputClasses}
          >
            <option value="Order support">Order support</option>
            <option value="Pre-sales">Pre-sales</option>
            <option value="Returns">Returns</option>
            <option value="Warranty">Warranty</option>
            <option value="Other">Other</option>
          </select>
        </ContactInput>

        {/* Message */}
        <ContactInput label="Message">
          <textarea
            name="message"
            rows={6}
            placeholder="How can we help?"
            className={`${inputClasses} resize-y`}
          />
        </ContactInput>

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer rounded-[4px] bg-primary px-6 py-3 text-sm font-medium text-background transition hover:bg-primary/70"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
