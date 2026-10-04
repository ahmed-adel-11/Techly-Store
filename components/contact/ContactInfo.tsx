import ContactInfoCard from "./ContactInfoCard";
import OpeningHours from "./OpeningHours";
import SocialLinks from "./SocialLinks";

const contactInfo = [
  {
    icon: "lucide:mail",
    label: "Email",
    value: "support@kaontech.com",
    href: "mailto:support@kaontech.com",
  },
  {
    icon: "lucide:phone",
    label: "Phone",
    value: "+44 20 7946 0142",
    href: "tel:+442079460142",
  },
  {
    icon: "lucide:map-pin",
    label: "Address",
    value: "Unit 12, Harbour Works, Bristol BS1 6XT",
  },
];

const ContactInfo = () => {
  return (
    <aside className="space-y-4">
      {contactInfo.map((item) => (
        <ContactInfoCard
          key={item.label}
          icon={item.icon}
          label={item.label}
          value={item.value}
          href={item.href}
        />
      ))}

      <SocialLinks />

      <OpeningHours />
    </aside>
  );
};

export default ContactInfo;
