export const navItems = [
  { name: "Features", link: "#about" },
  { name: "System", link: "#projects" },
  { name: "Testimonial", link: "#clients" },
  { name: "Experience", link: "#experience" },
  { name: "Pricing", link: "#pricing" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#footer" },
];

export const gridItems = [
  {
    id: 1,
    title: "AI-powered email cleanup that works while you sleep Automatically detects and processes unsubscribe requests from emails",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-1/4 h-2/4 object-contain mx-auto",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },

  {
    id: 2,
    title: "Works with any email provider",
    description: "Gmail, Outlook, Yahoo, Apple Mail - we support them all",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 3,
    title: "Automated System",
    description: "Machine learning algorithms that get smarter over time",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "Privacy-first approach to email management",
    description: "Your emails are processed securely and never stored",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Built for modern inboxes",
    description: "Designed to handle the complexity of today's email ecosystem",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 6,
    title: "Ready to clean up your inbox?",
    description: "Start with UnsubHero today and experience the difference",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "One-Click Unsubscribe",
    des: "Automated unsubscribe process",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/automation",
  },
  {
    id: 2,
    title: "Smart Newsletter Detection",
    des: "Intelligent newsletter identification system",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/detection",
  },
  {
    id: 3,
    title: "Clean Inbox in Minutes",
    des: "Fast inbox cleanup solution",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/cleanup",
  },
  {
    id: 4,
    title: "AI-Powered Email Management",
    des: "Advanced email management system",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/management",
  },
];

export const testimonials = [
  {
    quote:
      "UnsubHero has completely transformed my inbox. I was drowning in newsletters and promotional emails, but now I just forward them to unsub@unsubhero.com and they're gone. It's like magic! My inbox is finally manageable again.",
    name: "Sarah Chen",
    title: "Marketing Manager at TechFlow",
  },
  {
    quote:
      "The one-click unsubscribe feature is a game-changer. I used to spend hours manually unsubscribing from emails. Now it's automated and works perfectly. UnsubHero has saved me countless hours every week.",
    name: "David Rodriguez",
    title: "Product Manager at InnovateCorp",
  },
  {
    quote:
      "As a small business owner, I was getting overwhelmed with email clutter. UnsubHero's smart detection automatically identifies newsletters and handles the unsubscribe process. My productivity has increased dramatically.",
    name: "Emily Watson",
    title: "Founder of GreenStart Solutions",
  },
  {
    quote:
      "The AI-powered classification is incredibly accurate. It knows exactly which emails are newsletters and handles everything automatically. I've recommended UnsubHero to my entire team - it's that good.",
    name: "Marcus Thompson",
    title: "CTO at DataSync Inc",
  },
  {
    quote:
      "Clean inbox in minutes - that's exactly what UnsubHero delivers. The bulk unsubscribe manager is brilliant for handling multiple emails at once. This tool has become essential for my daily workflow.",
    name: "Lisa Park",
    title: "Operations Director at ScaleUp",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "UnsubHero - AI Email Cleanup",
    desc: "Revolutionary email management solution using AI to automatically detect and process unsubscribe requests.",
    className: "md:col-span-2",
    thumbnail: "/ues.png",
  },
  {
    id: 2,
    title: "Smart Newsletter Detection System",
    desc: "Advanced automation that works with Gmail, Outlook, Yahoo, Apple Mail - cleaning inboxes in minutes.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "One-Click Unsubscribe Automation",
    desc: "Forward unwanted newsletters to unsub@unsubhero.com and watch the magic happen with privacy-first approach.",
    className: "md:col-span-2",
    thumbnail: "/ues.png",
  },
  {
    id: 4,
    title: "Modern Inbox Management Platform",
    desc: "Machine learning algorithms that get smarter over time, designed for today's email ecosystem complexity.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
