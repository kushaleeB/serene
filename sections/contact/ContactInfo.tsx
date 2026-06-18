"use client";

import Link from "next/link";
import { Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { contactPageContent, siteConfig } from "@/data";

const socialIcons = [
  { icon: Globe, href: siteConfig.social[0]?.href ?? "#", label: "Website" },
  { icon: Share2, href: siteConfig.social[0]?.href ?? "#", label: "Social" },
  { icon: MessageCircle, href: `mailto:${siteConfig.contact.email}`, label: "Message" },
];

export function ContactInfo() {
  const { info } = contactPageContent;

  const contactItems = [
    { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: MapPin, label: "Address", value: siteConfig.contact.address, href: undefined },
  ];

  return (
    <div>
      <h2 className="type-display-lg text-primary-container">{info.title}</h2>

      <ul className="mt-8 space-y-6">
        {contactItems.map((item) => (
          <li key={item.label} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d6e6e2]">
              <item.icon size={18} className="text-primary-container" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-xs text-body-muted">{item.label}</p>
              {item.href ? (
                <Link
                  href={item.href}
                  className="type-body-sm mt-0.5 block font-medium text-heading transition-colors hover:text-primary-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {item.value}
                </Link>
              ) : (
                <p className="mt-0.5 text-sm font-medium text-heading">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <p className="label-caps text-body-muted">{info.followLabel}</p>
        <div className="mt-3 flex items-center gap-4">
          {socialIcons.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="flex h-11 w-11 items-center justify-center text-heading transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              aria-label={social.label}
            >
              <social.icon size={20} strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </div>

      <div
        className="mt-10 flex aspect-[16/10] items-center justify-center rounded-2xl bg-stone-200/80"
        role="img"
        aria-label={info.mapLabel}
      >
        <div className="text-center">
          <MapPin size={28} className="mx-auto text-stone-400" strokeWidth={1.5} />
          <p className="mt-2 text-sm text-body-muted">{info.mapLabel}</p>
        </div>
      </div>
    </div>
  );
}
