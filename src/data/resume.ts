export type ResumeJob = {
  title: string;
  company: string;
  companyUrl?: string;
  employmentType: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type ResumeProject = {
  name: string;
  description: string;
};

export type ResumeSkill = {
  label: string;
  items: string;
};

export type ResumeEducation = {
  degree: string;
  school: string;
  dates: string;
  grade?: string;
  bullets: string[];
};

export type ResumeContact = {
  label: string;
  href: string;
  text: string;
};

export type ResumeData = {
  title: string;
  description: string;
  name: string;
  experience: ResumeJob[];
  projects: ResumeProject[];
  skills: ResumeSkill[];
  education: ResumeEducation[];
  contact: ResumeContact[];
};

const resume: ResumeData = {
  title: "Resume",
  description: "Resume of Michael Ma",
  name: "Michael Ma",
  experience: [
    {
      title: "Software Developer",
      company: "Pay It Now (PIN)",
      companyUrl: "https://payitnow.io/",
      employmentType: "Full-time",
      location: "Christchurch, New Zealand · On-site",
      dates: "Oct 2024 – Present",
      bullets: [
        "Software programming, code modifications, and version upgrades for the PIN Network mobile app and web app",
      ],
    },
    {
      title: "Information Security Analyst Intern",
      company: "Pay It Now (PIN)",
      companyUrl: "https://payitnow.io/",
      employmentType: "Internship",
      location: "Christchurch, New Zealand · On-site",
      dates: "Jul 2024 – Oct 2024",
      bullets: [
        "Penetration testing for the Pay It Now app, website, and infrastructure network",
      ],
    },
    {
      title: "Information Security Analyst",
      company: "Teleperformance",
      companyUrl: "https://www.teleperformance.com/",
      employmentType: "Permanent",
      location: "Shaanxi, China · On-site",
      dates: "Dec 2019 – Jun 2023",
      bullets: [
        "Maintained and continuously improved the information security management system; compiled and translated security-related documents",
        "Coordinated with departments to communicate and implement information security policies",
        "Gathered, summarized, and reviewed computer system and network specifications across projects",
        "Conducted periodic information security risk assessments",
        "Led internal information security audits and compiled compliance documentation",
        "Prepared and coordinated external security audits; tracked and completed remediation plans",
        "Investigated information security incidents",
        "Managed Information Security Officers and their day-to-day operations",
      ],
    },
    {
      title: "Project Assistant",
      company: "Kinetic Development Group Limited",
      companyUrl: "https://www.kineticme.com/en/",
      employmentType: "Full-time",
      location: "Beijing, China · Hybrid (including Harare, Zimbabwe)",
      dates: "Jun 2018 – Nov 2019",
      bullets: [
        "Drafted MOUs and contracts; translated contract clauses and documents; contributed to feasibility and pre-feasibility studies",
        "Provided metallurgical engineering translation, planning, and documentation for the ZISCO steel plant project in Zimbabwe",
        "Supported metallurgical equipment evaluation and procurement",
        "Conducted mining rights research, local stakeholder communication, and market research",
        "Assisted with reception of Zimbabwean government officials and interpreted in selected meetings; supported managers on day-to-day tasks",
        "Lived and worked in Harare, Zimbabwe for about 1.5 years",
      ],
    },
    {
      title: "English Tour Guide",
      company: "Shaanxi China Travel Service Co., Ltd.",
      companyUrl: "https://www.chinaxiantour.com/about-us/team",
      employmentType: "Freelance",
      location: "Xi'an, Shaanxi, China · Hybrid",
      dates: "Apr 2016 – Jun 2018",
      bullets: [
        "Welcomed international tour groups and arranged travel and accommodation in Xi'an, with bilingual support throughout",
        "Hosted groups mainly from Europe, the US, India, Australia, and New Zealand; received 500+ guests per year with a positive feedback rate above 98%",
        "Provided fluent English communication and cross-cultural guidance on Chinese history and culture",
        "Supported business receptions (e.g. Ivy League professors, Thailand Director of Strategic Cooperation), including dinners, interpretation, and related administration",
      ],
    },
    {
      title: "Metallurgical Engineer",
      company: "Shaanxi Steel Group",
      companyUrl: "https://www.lm-steel.com/",
      employmentType: "Full-time",
      location: "Weinan, Shaanxi, China · On-site",
      dates: "Jul 2014 – Apr 2016",
      bullets: [
        "Directed daily blast furnace production operations",
        "Managed employee attendance and coordinated equipment overhauls",
        "Communicated and coordinated orders between directors and front-line workers",
        "Participated in technical meetings and process discussions",
      ],
    },
  ],
  projects: [
    {
      name: "Secure Voice Payment",
      description: "Voice-driven payment flow on Android",
    },
    {
      name: "Pay It Now Mobile App (Android & IOS)",
      description: "Build & Release & Maintenance",
    },
    {
      name: "Penetration Test For Pay It Now",
      description: "Black box penetration test for all Pay It Now products",
    },
    {
      name: "PIN Admin Dashboard Webapp",
      description: "Pay It Now layer 1 dashboard management system",
    },
  ],
  skills: [
    { label: "Languages", items: "TypeScript (primary), PHP, Python" },
    { label: "Ecosystem / Tools", items: "Expo / EAS" },
    { label: "Frameworks", items: "Laravel (Blade, Livewire), Node.js" },
    { label: "Architecture", items: "RESTful APIs" },
    { label: "Databases", items: "MySQL, SQLite" },
    {
      label: "CI/CD & App Stores",
      items: "App Store Connect, Google Play Console",
    },
    { label: "Cloud", items: "AWS (EC2, S3, RDS, Lambda), Azure" },
    { label: "Containers", items: "Docker" },
    { label: "Version Control", items: "Git" },
    { label: "AI Tools", items: "Cursor AI Agent" },
    { label: "API", items: "Postman" },
  ],
  education: [
    {
      degree: "Master of Applied Computing",
      school: "Lincoln University (NZ)",
      dates: "Nov 2023 – Dec 2024",
      grade: "7",
      bullets: [
        "Advanced Programming",
        "Database Management",
        "Business Engagement and User Experience",
      ],
    },
    {
      degree: "Bachelor of Metallurgical Engineering",
      school: "Xi'an University of Architecture and Technology (XAUAT)",
      dates: "Sep 2010 – Dec 2014",
      grade: "A",
      bullets: [
        "President of the Guitar Club",
        "Science and engineering thinking",
        "Established self-study habits and rapid learning ability",
        "Gained social experience through various part-time jobs",
        "Developed foundational computer skills",
      ],
    },
  ],
  contact: [
    {
      label: "Email",
      href: "mailto:michaelfromxian@gmail.com",
      text: "michaelfromxian@gmail.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/MichaelYupengMa",
      text: "MichaelYupengMa",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/michael-ma-b99685180/",
      text: "Michael Ma",
    },
    {
      label: "More",
      href: "/about",
      text: "About",
    },
  ],
};

export default resume;
