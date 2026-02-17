"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Section = {
  id: string;
  title: string;
};

export default function TableOfContents({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4 pl-3">
        On this page
      </p>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(
            "block text-[13px] py-1.5 pl-3 border-l-2 transition-all duration-200",
            activeSection === section.id
              ? "border-blue-600 text-blue-700 font-medium bg-blue-50/50"
              : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
          )}
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
}
