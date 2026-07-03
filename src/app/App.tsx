import { useState } from "react";
import { ArrowRight, Mail, Github, Linkedin, Facebook, Target, BarChart2, Megaphone, DollarSign, Users, Menu, X } from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1748439435495-722cc1728b7e?w=1800&h=900&fit=crop&auto=format";
const ABOUT_IMG = "/profile.png";

// Real marketing foundation — verifiable against John's resume. No invented metrics.
const foundation = [
  {
    title: "Assistant Marketing Coordinator",
    tag: "Foundation",
    year: "2025",
    org: "LetzMarket · Canada (Remote)",
    desc: "Supported marketing campaigns and content creation across social media, web, and print. Collaborated with the creative team to keep branding consistent and handled administrative tasks that kept operations running smoothly.",
    platforms: ["Campaign Support", "Content", "Branding"],
  },
  {
    title: "Social Media Manager",
    tag: "Foundation",
    year: "2024–2025",
    org: "No Boundaries Marketing Group · USA (Remote)",
    desc: "Designed and published content — reels, graphics, and stories — using scheduling tools. Monitored engagement, responded to online conversations, and kept up with platform trends to keep content relevant.",
    platforms: ["Organic Social", "Content Calendar", "Engagement"],
  },
];

// What John is actively learning in paid media. Clearly framed as in-progress.
const learning = [
  {
    title: "Meta Ads Manager",
    tag: "Learning",
    year: "In progress",
    org: "Facebook & Instagram campaigns",
    desc: "Learning how to structure campaigns, ad sets, and ads — building audiences, setting budgets, and launching test creatives within Meta Ads Manager.",
    platforms: ["Campaign setup", "Audiences", "Budgeting"],
  },
  {
    title: "Google Ads",
    tag: "Learning",
    year: "In progress",
    org: "Search & basics of PMax",
    desc: "Studying keyword research, search campaign structure, and how Google Ads bidding works, so I can plan and read campaigns with confidence.",
    platforms: ["Search", "Keywords", "Bidding"],
  },
  {
    title: "Audience Targeting & Budgeting",
    tag: "Learning",
    year: "In progress",
    org: "Practical fundamentals",
    desc: "Building a working understanding of audience segmentation, daily vs. lifetime budgets, and how to allocate spend across ad sets without wasting it.",
    platforms: ["Segmentation", "Pacing", "Allocation"],
  },
  {
    title: "Reading Ad Metrics",
    tag: "Learning",
    year: "In progress",
    org: "CTR · CPC · ROAS",
    desc: "Learning to read the metrics that matter — CTR, CPC, CPM, and ROAS — and to A/B test creatives so decisions are based on data, not guesswork.",
    platforms: ["CTR / CPC", "A/B testing", "ROAS"],
  },
];

const capabilities = [
  { icon: Target, label: "Social & Content", items: ["Social media content & strategy", "Content calendars & scheduling", "Reels, stories & graphics", "Audience engagement"] },
  { icon: Users, label: "Campaign Support", items: ["Campaign & content support", "Creative briefs & input", "Brand consistency", "Cross-team collaboration"] },
  { icon: Megaphone, label: "Creative & Copy", items: ["Ad copy & captions", "Graphic design (Canva)", "Photoshop basics", "Video editing (CapCut)"] },
  { icon: DollarSign, label: "Coordination", items: ["Marketing coordination", "Email & calendar management", "Client communication", "Administrative support"] },
  { icon: Target, label: "Paid Media — Learning", items: ["Meta Ads Manager", "Google Ads (Search)", "Audience targeting", "Budgeting & pacing"] },
  { icon: BarChart2, label: "Metrics — Learning", items: ["Reading CTR, CPC, CPM", "Understanding ROAS", "A/B testing creatives", "Performance analysis"] },
];

const timeline = [
  { year: "2025", role: "Assistant Marketing Coordinator", org: "LetzMarket", note: "Canada (Remote)" },
  { year: "2024–2025", role: "Social Media Manager", org: "No Boundaries Marketing Group", note: "USA (Remote)" },
  { year: "2026", role: "BS Information System", org: "Caraga State University", note: "Graduated" },
];

function NavBar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const links = ["Foundation", "Learning", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 border-b border-border bg-[#1c1916]/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a
          href="#"
          onClick={() => { setActive("hero"); setMenuOpen(false); }}
          style={{ fontFamily: "'Roboto Slab', serif" }}
          className="text-[#f4ece0] font-bold tracking-tight text-base"
        >
          John Louie <span style={{ color: "#c08a2d" }}>Caparoso</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l.toLowerCase())}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.65)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="mailto:johnlouiecaparoso@gmail.com"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            background: "#a8341f",
            color: "#fbf6ee",
          }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
        >
          Get in Touch <ArrowRight size={12} />
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen ? "true" : "false"}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-[0.4rem] text-[#f4ece0] hover:bg-[rgba(241,233,219,0.08)] transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-[#1c1916]/98 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => { setActive(l.toLowerCase()); setMenuOpen(false); }}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: active === l.toLowerCase() ? "#c08a2d" : "rgba(241,233,219,0.7)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                className="py-3"
              >
                {l}
              </a>
            ))}
            <a
              href="mailto:johnlouiecaparoso@gmail.com"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                background: "#a8341f",
                color: "#fbf6ee",
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[0.4rem] uppercase hover:bg-[#8f2c1a] transition-colors"
            >
              Get in Touch <ArrowRight size={12} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-20 md:pt-14 overflow-hidden"
      style={{ backgroundColor: "#1c1916" }}
    >
      <img
        src={HERO_IMG}
        alt="Multi-screen trading desk lit with analytics charts and data"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.4 }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(28,25,22,0.97) 0%, rgba(28,25,22,0.6) 55%, rgba(28,25,22,0.15) 100%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end">
        <div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "#c08a2d",
              textTransform: "uppercase",
            }}
            className="mb-6"
          >
            &#9632; Available for projects
          </p>
          <h1
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              color: "#f4ece0",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            From organic
            <br />
            reach to <span style={{ color: "#c08a2d" }}>paid</span>
            <br />results.
          </h1>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "rgba(241,233,219,0.7)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: "42ch",
            }}
            className="mt-6 mb-10"
          >
            I'm John Louie — a social media and marketing professional moving
            into paid media buying. Strong foundation in content, audience
            engagement, and campaign support; actively learning Meta Ads and
            Google Ads.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#foundation"
              style={{
                fontFamily: "'Roboto Slab', serif",
                background: "#a8341f",
                color: "#fbf6ee",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors"
            >
              See My Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                border: "1px solid rgba(241,233,219,0.25)",
                color: "#f1e9db",
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[0.4rem] hover:border-[rgba(241,233,219,0.5)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="flex flex-row flex-wrap md:flex-col gap-x-6 gap-y-4 md:gap-5 self-end pb-2">
          {[
            { num: "3 yrs", label: "Marketing & social media" },
            { num: "US & CA", label: "Remote roles supported" },
            { num: "Now", label: "Learning paid ads" },
          ].map((s) => (
            <div key={s.label} className="flex items-baseline gap-4">
              <span
                style={{
                  fontFamily: "'Roboto Slab', serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
                  color: "#c08a2d",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(241,233,219,0.5)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="foundation" className="py-16 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a8341f",
            }}
            className="mb-3"
          >
            The Foundation
          </p>
          <h2
            style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}
            className="text-foreground"
          >
            My Marketing Foundation
          </h2>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "#6f6354",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
            className="mt-4"
          >
            Real, verifiable experience in organic social media and marketing
            coordination — the groundwork I'm building paid media on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {foundation.map((c) => (
            <article
              key={c.title}
              className="group bg-card border border-border rounded-[0.4rem] p-6 md:p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              style={{ boxShadow: "0 2px 8px rgba(33,28,23,0.07)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  style={{
                    background: "rgba(168,52,31,0.08)",
                    border: "1px solid rgba(168,52,31,0.2)",
                    borderRadius: "0.4rem",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.63rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#a8341f",
                    }}
                  >
                    {c.tag}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    color: "#6f6354",
                    letterSpacing: "0.06em",
                  }}
                >
                  {c.year}
                </span>
              </div>

              <h3
                style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.35rem" }}
                className="text-foreground"
              >
                {c.title}
              </h3>

              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  color: "#a8341f",
                }}
              >
                {c.org}
              </p>

              <p
                style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  color: "#6f6354",
                  lineHeight: 1.65,
                  fontSize: "0.92rem",
                }}
              >
                {c.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {c.platforms.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.63rem",
                      letterSpacing: "0.08em",
                      background: "rgba(33,28,23,0.06)",
                      color: "#6f6354",
                      padding: "0.2rem 0.55rem",
                      borderRadius: "0.25rem",
                      border: "1px solid rgba(33,28,23,0.1)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Performance() {
  return (
    <section
      id="learning"
      className="py-16 md:py-28"
      style={{ background: "#211c17" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c08a2d",
            }}
            className="mb-3"
          >
            In Progress
          </p>
          <h2
            style={{
              fontFamily: "'Roboto Slab', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#f4ece0",
            }}
          >
            What I'm Learning in Paid Media
          </h2>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "#b3a48d",
              fontSize: "0.9rem",
              marginTop: "0.6rem",
              maxWidth: "56ch",
              lineHeight: 1.7,
            }}
          >
            I'm transitioning from organic social into paid media buying. These
            are the areas I'm actively studying and practicing — honestly framed
            as in-progress, not delivered work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learning.map((l) => (
            <div
              key={l.title}
              className="rounded-[0.4rem] p-6 md:p-8 flex flex-col gap-4"
              style={{ background: "rgba(251,246,238,0.04)", border: "1px solid rgba(241,233,219,0.1)" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  style={{
                    background: "rgba(192,138,45,0.12)",
                    border: "1px solid rgba(192,138,45,0.3)",
                    borderRadius: "0.4rem",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.63rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#c08a2d",
                    }}
                  >
                    {l.tag}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.66rem",
                    color: "#b3a48d",
                    letterSpacing: "0.06em",
                  }}
                >
                  {l.year}
                </span>
              </div>

              <h3
                style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "1.35rem", color: "#f4ece0" }}
              >
                {l.title}
              </h3>

              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.06em",
                  color: "#c08a2d",
                }}
              >
                {l.org}
              </p>

              <p
                style={{
                  fontFamily: "'Libre Franklin', sans-serif",
                  color: "#b3a48d",
                  lineHeight: 1.65,
                  fontSize: "0.92rem",
                }}
              >
                {l.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {l.platforms.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.63rem",
                      letterSpacing: "0.08em",
                      background: "rgba(251,246,238,0.06)",
                      color: "#b3a48d",
                      padding: "0.2rem 0.55rem",
                      borderRadius: "0.25rem",
                      border: "1px solid rgba(241,233,219,0.12)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-16 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a8341f",
            }}
            className="mb-3"
          >
            The Toolkit
          </p>
          <h2
            style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}
            className="text-foreground"
          >
            Skills &amp; What
            <br />I'm Building
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="bg-card border border-border rounded-[0.4rem] p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-[0.35rem]"
                  style={{ background: "rgba(168,52,31,0.1)", color: "#a8341f" }}
                >
                  <cap.icon size={16} />
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#a8341f",
                  }}
                >
                  {cap.label}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'Libre Franklin', sans-serif",
                      color: "#6f6354",
                      fontSize: "0.88rem",
                    }}
                    className="flex items-start gap-2"
                  >
                    <span style={{ color: "#c08a2d", fontSize: "0.5rem", marginTop: "0.4rem", flexShrink: 0 }}>&#9632;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-28 bg-background border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#a8341f",
              }}
              className="mb-3"
            >
              The Person
            </p>
            <h2
              style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 2.6rem)" }}
              className="text-foreground mb-6"
            >
              Building paid media
              <br />on real marketing roots.
            </h2>
            <div
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                color: "#6f6354",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
              className="space-y-4 mb-10"
            >
              <p>
                I'm John Louie Caparoso, a social media and marketing professional
                with around three years of experience in organic content and
                marketing coordination — including remote roles for teams in the
                US and Canada.
              </p>
              <p>
                My foundation is content and audience: planning calendars, creating
                reels and graphics in Canva, writing copy, and keeping branding
                consistent. I'm detail-oriented, work well independently and with a
                team, and care about getting things right.
              </p>
              <p>
                Now I'm transitioning into paid media buying. I'm actively learning
                Meta Ads and Google Ads — campaign setup, audience targeting,
                budgeting, A/B testing, and reading metrics like CTR, CPC, and ROAS.
                I'd be glad to support real campaigns as I grow these skills.
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.63rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#6f6354",
                }}
                className="mb-5"
              >
                Experience
              </p>
              <div className="space-y-5">
                {timeline.map((t) => (
                  <div key={t.year} className="flex items-start gap-4 md:gap-5">
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        color: "#c08a2d",
                        letterSpacing: "0.06em",
                        minWidth: "6rem",
                        flexShrink: 0,
                        paddingTop: "0.1rem",
                      }}
                    >
                      {t.year}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Libre Franklin', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.92rem",
                          color: "#211c17",
                        }}
                      >
                        {t.role}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Libre Franklin', sans-serif",
                          fontSize: "0.83rem",
                          color: "#6f6354",
                        }}
                      >
                        {t.org} · {t.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/5] rounded-[0.4rem] overflow-hidden"
              style={{ background: "#c4b49c" }}
            >
              <img
                src={ABOUT_IMG}
                alt="John Louie Caparoso"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 left-3 md:-bottom-5 md:-left-5 rounded-[0.4rem] px-5 py-4"
              style={{
                background: "#c08a2d",
                color: "#1c1916",
                fontFamily: "'Roboto Slab', serif",
                fontWeight: 700,
                boxShadow: "0 8px 32px rgba(192,138,45,0.4)",
              }}
            >
              <div style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>3 yrs</div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(28,25,22,0.7)",
                }}
              >
                Marketing &amp; social
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-28 border-t border-border"
      style={{ background: "#fbf6ee" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a8341f",
            }}
            className="mb-3"
          >
            Let's Talk
          </p>
          <h2
            style={{ fontFamily: "'Roboto Slab', serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)" }}
            className="text-foreground mb-4"
          >
            Let's build your
            <br />next campaign together.
          </h2>
          <p
            style={{
              fontFamily: "'Libre Franklin', sans-serif",
              color: "#6f6354",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              maxWidth: "46ch",
            }}
            className="mb-10"
          >
            I'm available for projects in social media, content, and campaign
            support — and eager to assist with paid media as I keep learning Meta
            Ads and Google Ads. If you need a reliable, detail-oriented marketing
            hand, reach out and let's talk.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: "Availability", value: "For projects" },
              { label: "Foundation", value: "Social & content" },
              { label: "Learning", value: "Meta & Google Ads" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-[0.4rem] p-4"
                style={{ border: "1px solid rgba(33,28,23,0.14)", background: "#fbf6ee" }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#6f6354",
                  }}
                  className="mb-1"
                >
                  {s.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Roboto Slab', serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#211c17",
                  }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="mailto:johnlouiecaparoso@gmail.com"
              style={{
                fontFamily: "'Roboto Slab', serif",
                background: "#a8341f",
                color: "#fbf6ee",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[0.4rem] hover:bg-[#8f2c1a] transition-colors"
            >
              <Mail size={16} /> johnlouiecaparoso@gmail.com
            </a>
            <a
              href="/resume.html"
              style={{
                fontFamily: "'Libre Franklin', sans-serif",
                border: "1px solid rgba(33,28,23,0.2)",
                color: "#211c17",
                fontSize: "0.9rem",
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[0.4rem] hover:border-[rgba(33,28,23,0.4)] transition-colors"
            >
              View Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-louie-caparoso-0a344a256/" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/louiecaparoso4" },
              { icon: Github, label: "GitHub", href: "https://github.com/johnlouiecaparoso" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ color: "#6f6354" }}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <s.icon size={18} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                  className="hidden sm:block"
                >
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-7" style={{ background: "#1c1916" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(241,233,219,0.35)",
          }}
        >
          © 2025 John Louie Caparoso · Magallanes, Agusan del Norte, PH
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(241,233,219,0.25)",
          }}
        >
          Social media · Content · Learning paid ads
        </span>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("hero");

  return (
    <div className="min-h-screen bg-background overflow-x-hidden" style={{ fontFamily: "'Libre Franklin', sans-serif" }}>
      <NavBar active={active} setActive={setActive} />
      <Hero />
      <Work />
      <Performance />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
