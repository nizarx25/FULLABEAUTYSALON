"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  ChevronUp,
  Sparkles,
  Star,
  Heart,
  Scissors,
  Gem,
  Palette,
  Menu,
  X,
  ArrowLeft,
  Eye,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Image URLs ─── */
const IMAGES = {
  hero: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/06540282fdcc.jpg",
  salon2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a59dcce82b69.jpg",
  salon3: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/383b5c8a2edf.jpg",
  makeup1: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/504de3054bc4.jpg",
  makeup2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cc81b0a6ab13.jpeg",
  skincare2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8bb694e11e05.jpg",
  hair2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/432ab508f600.jpg",
  gallery: [
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/20d79b5e975f.jpg",
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9e14314f112b.jpg",
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0f3cd7d6bc71.jpg",
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ad237dedac8e.jpg",
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6ba2abc14768.jpg",
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/584afc9393be.jpg",
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0af2bdcd7ede.jpg",
    "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/504de3054bc4.jpg",
  ],
};

const WHATSAPP_URL = "https://wa.me/963938305491";
const PHONE_TEL = "tel:+963938305491";
const PHONE_DISPLAY = "0938305491";
const EMAIL = "hibasab89@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/Fullasalonbyhibasabbouh";
const INSTAGRAM_URL = "https://www.instagram.com/fulla_by_hibasabbouh/";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.5!2d36.7138!3d34.7325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQzJzU3LjAiTiAzNsKwNDInNDkuNyJF!5e0!3m2!1sar!2ssy!4v1700000000000!5m2!1sar!2ssy";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "معرض الأعمال", href: "#gallery" },
  { label: "تواصل معنا", href: "#contact" },
];

const SERVICES = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: "الميكاب الاحترافي",
    description:
      "ميكاب أعياد، ميكاب عروس، ومكياج سهرات بتقنيات حديثة ومستحضرات عالمية عالية الجودة تمنحك إطلالة مميزة تناسب ذوقك.",
    image: IMAGES.makeup1,
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "التسريحات",
    description:
      "تسريحات ناعمة، ويفي شعر، كعكة عروس، وتسريحات مناسبات متنوعة على يد خبراء محترفين يفهمون أحدث صيحات الموضة.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fc30b9ae2d08.png",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "عناية البشرة",
    description:
      "علاجات بشرة متخصصة، تنظيف عميق، ماسكات مرطبة، وبرامج عناية مخصصة لتحضير بشرتك لكل مناسبة.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5a2a265c160e.jpg",
  },
];

const WHY_US = [
  { icon: <Gem className="w-7 h-7" />, title: "موقع مميز", description: "في فندق السفير بقلب مدينة حمص، بيئة فاخرة ومريحة" },
  { icon: <Star className="w-7 h-7" />, title: "خبرة احترافية", description: "بإدارة خبيرة التجميل هبة صبّوح ذات الخبرة الواسعة" },
  { icon: <Sparkles className="w-7 h-7" />, title: "منتجات عالمية", description: "نستخدم أرقى المستحضرات والعلامات التجارية العالمية" },
  { icon: <Heart className="w-7 h-7" />, title: "اهتمام بالتفاصيل", description: "نحرص على كل تفصيلة لنضمن رضاكم التام" },
];

/* ─── Visitor Counter ─── */
function VisitorCounter({ variant = "hero" }: { variant?: "hero" | "footer" }) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    fetch("/api/visitors")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);
  const formatted = count !== null ? count.toLocaleString("ar-SY") : "—";
  if (variant === "footer") {
    return (
      <div className="flex items-center gap-2 text-white/40 text-xs">
        <Eye className="w-3.5 h-3.5" />
        <span>عدد الزيارات: {formatted}</span>
      </div>
    );
  }
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-[#C9A96E] font-display">{formatted}</div>
      <div className="text-xs sm:text-sm text-white/60 mt-1">زيارة للموقع</div>
    </div>
  );
}

/* ═══════════════════════════════════════════ */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* ═══ Top Bar ═══ */}
      <div className="bg-[#2D1B2E] text-white/90 text-xs sm:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>فندق السفير - حمص، سوريا</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={PHONE_TEL} className="flex items-center gap-1 hover:text-[#C9A96E] transition-colors" aria-label="اتصل بنا">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline" dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="hidden md:flex items-center gap-1 hover:text-[#C9A96E] transition-colors" aria-label="البريد الإلكتروني">
              <Mail className="w-3.5 h-3.5" />
              <span>{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ═══ Navigation ═══ */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-[#C77DBA]/5" : "bg-white"}`}>
        <nav className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-2xl">🌸</span>
            <div>
              <span className="block text-lg sm:text-xl font-bold text-[#C77DBA] font-display leading-tight">فلة بيوتي</span>
              <span className="block text-[10px] sm:text-xs text-[#7A5F7C] tracking-wider" dir="ltr">FULLA BEAUTY SALON</span>
            </div>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button onClick={() => scrollToSection(link.href)} className="px-3 py-2 text-sm font-medium text-[#2D1B2E]/80 hover:text-[#C77DBA] rounded-lg hover:bg-[#FDF2F8] transition-all">
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="واتساب">
              <Button className="bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full px-4 gap-2 text-sm shadow-md shadow-[#25D366]/20">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">احجز الآن</span>
              </Button>
            </a>
            <a href={PHONE_TEL} aria-label="اتصل">
              <Button className="bg-[#C77DBA] hover:bg-[#B56CA8] text-white rounded-full px-3 sm:px-4 gap-2 text-sm shadow-md shadow-[#C77DBA]/20">
                <Phone className="w-4 h-4" />
                <span className="hidden md:inline">اتصل</span>
              </Button>
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-[#FDF2F8] transition-colors" aria-label="القائمة">
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C77DBA]" /> : <Menu className="w-5 h-5 text-[#2D1B2E]" />}
            </button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E8D5E4]/50 shadow-xl">
            <ul className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollToSection(link.href)} className="block w-full text-right px-4 py-3 text-sm font-medium text-[#2D1B2E]/80 hover:text-[#C77DBA] hover:bg-[#FDF2F8] rounded-lg transition-all">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* ═══ Main Content ═══ */}
      <main className="flex-1">
        {/* ─── Hero ─── */}
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={IMAGES.hero} alt="صالون فلة بيوتي" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-32 h-32 bg-[#C9A96E]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-[#C77DBA]/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#C9A96E]" />
              <span className="text-white/90 text-sm font-medium">فرع أول من سلسلة صالونات فلة في سوريا</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-display leading-tight">فلة بيوتي صالون</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/85 mb-2 font-display font-light">Fulla Beauty Salon by Hiba</p>
            <p className="text-base sm:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">بإدارة خبيرة التجميل هبة صبّوح<br />نقدم لكِ تجربة تجميل استثنائية في فندق السفير - حمص</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full px-8 py-6 text-base gap-2 shadow-xl shadow-[#25D366]/30 shimmer">
                  <MessageCircle className="w-5 h-5" />
                  احجزي موعدكِ الآن
                </Button>
              </a>
              <a href={PHONE_TEL}>
                <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/15 rounded-full px-8 py-6 text-base gap-2 backdrop-blur-sm">
                  <Phone className="w-5 h-5" />
                  اتصلي بنا
                </Button>
              </a>
            </div>
            <div className="mt-14 grid grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#C9A96E] font-display">+165K</div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">متابع</div>
              </div>
              <div className="text-center border-x border-white/15">
                <div className="text-2xl sm:text-3xl font-bold text-[#C9A96E] font-display">سلسلة</div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">صالونات فلة</div>
              </div>
              <div className="text-center border-l border-white/15">
                <VisitorCounter />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="w-5 h-5 text-[#C9A96E]" />
                  <span className="text-lg sm:text-xl font-bold text-[#C9A96E]">نشط</span>
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">الحضور الرقمي</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float-animation">
            <div className="w-7 h-11 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* ─── About ─── */}
        <section id="about" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#C77DBA]/15">
                  <img src={IMAGES.salon2} alt="داخل صالون فلة بيوتي" className="w-full h-[400px] sm:h-[500px] object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-xl shadow-xl p-4 sm:p-5 border border-[#F5E6F2]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#FDF2F8] rounded-full flex items-center justify-center"><Gem className="w-6 h-6 text-[#C77DBA]" /></div>
                    <div>
                      <div className="font-bold text-[#2D1B2E] text-sm">فندق السفير</div>
                      <div className="text-xs text-[#7A5F7C]">موقع فاخر في قلب حمص</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C9A96E]/10 rounded-full blur-2xl" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-[#FDF2F8] rounded-full px-4 py-1.5 mb-5">
                  <Heart className="w-4 h-4 text-[#C77DBA]" />
                  <span className="text-[#C77DBA] text-sm font-medium">من نحن</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B2E] mb-6 font-display leading-tight">أكثر من صالون تجميل<br /><span className="text-gradient-rose">إنه تجربة فاخرة</span></h2>
                <div className="space-y-4 text-[#2D1B2E]/75 leading-relaxed text-base">
                  <p>صالون <strong className="text-[#C77DBA]">فلة بيوتي</strong> هو الفرع الأول من سلسلة صالونات فلة في سوريا، يقع في موقع استراتيجي مميز داخل <strong>فندق السفير</strong> بمدينة حمص.</p>
                  <p>بإدارة <strong className="text-[#C77DBA]">خبيرة التجميل هبة صبّوح</strong>، صاحبة خبرة واسعة في عالم التجميل وعدد كبير من المتابعين على منصات التواصل الاجتماعي، نقدم خدمات ميكاب وتسريحات وعناية بالبشرة بأعلى معايير الجودة.</p>
                  <p>نسعى لأن تكون كل زيارة لكِ تجربة استثنائية، حيث نجمع بين الفخامة والاحترافية والاهتمام بأدق التفاصيل لنمنحكِ الإطلالة التي تستحقينها.</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white rounded-full gap-2 px-5">
                      <Instagram className="w-4 h-4" /> تابعينا على إنستاغرام
                    </Button>
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white rounded-full gap-2 px-5">
                      <Facebook className="w-4 h-4" /> صفحتنا على فيسبوك
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services ─── */}
        <section id="services" className="py-20 sm:py-28 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] rounded-full px-4 py-1.5 mb-5">
                <Sparkles className="w-4 h-4 text-[#C77DBA]" />
                <span className="text-[#C77DBA] text-sm font-medium">خدماتنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B2E] mb-4 font-display">خدمات متخصصة لجمالكِ</h2>
              <p className="text-[#7A5F7C] text-base leading-relaxed">نقدم مجموعة متكاملة من خدمات التجميل والعناية باستخدام أحدث التقنيات وأفضل المنتجات العالمية لضمان نتائج استثنائية</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="card-hover bg-white rounded-2xl overflow-hidden shadow-lg shadow-[#C77DBA]/8 border border-[#F5E6F2]/50">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover img-zoom" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B2E]/40 to-transparent" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-[#C77DBA]">{service.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2D1B2E] mb-3 font-display">{service.title}</h3>
                    <p className="text-[#7A5F7C] text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-cta hover:opacity-90 text-white rounded-full px-8 gap-2 shadow-lg shadow-[#C77DBA]/25 text-base">
                  <MessageCircle className="w-5 h-5" /> احجزي موعدكِ للخدمة المطلوبة
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ─── Why Us ─── */}
        <section id="why-us" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#F5EDDB] rounded-full px-4 py-1.5 mb-5">
                  <Star className="w-4 h-4 text-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-sm font-medium">لماذا نحن</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B2E] mb-6 font-display leading-tight">لماذا تختارين<br /><span className="text-gradient-gold">صالون فلة بيوتي؟</span></h2>
                <p className="text-[#7A5F7C] text-base leading-relaxed mb-8">نحن لا نقدم خدمات تجميل فحسب، بل نصنع تجربة استثنائية تبدأ من لحظة دخولكِ الصالون وحتى خروجكِ بإطلالة لا تُنسى.</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {WHY_US.map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-[#FFFAFB] border border-[#F5E6F2]/60 hover:border-[#C77DBA]/30 transition-colors">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FDF2F8] rounded-xl flex items-center justify-center text-[#C77DBA]">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-[#2D1B2E] text-sm mb-1 font-display">{item.title}</h3>
                        <p className="text-[#7A5F7C] text-xs leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={IMAGES.makeup2} alt="ميكاب احترافي" className="w-full h-48 sm:h-56 object-cover" loading="lazy" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={IMAGES.skincare2} alt="عناية بالبشرة" className="w-full h-32 sm:h-40 object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={IMAGES.hair2} alt="تسريحات" className="w-full h-32 sm:h-40 object-cover" loading="lazy" />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img src={IMAGES.salon3} alt="صالون فلة" className="w-full h-48 sm:h-56 object-cover" loading="lazy" />
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#C77DBA]/8 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Gallery ─── */}
        <section id="gallery" className="py-20 sm:py-28 bg-gradient-section">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] rounded-full px-4 py-1.5 mb-5">
                <Gem className="w-4 h-4 text-[#C77DBA]" />
                <span className="text-[#C77DBA] text-sm font-medium">معرض الأعمال</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B2E] mb-4 font-display">أحدث أعمالنا</h2>
              <p className="text-[#7A5F7C] text-base leading-relaxed">شاهدی مجموعة من أحدث إطلالات الميكاب والتسريحات التي أنجزناها في صالون فلة بيوتي</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {IMAGES.gallery.map((img, idx) => (
                <div key={idx} className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md group cursor-pointer ${idx === 0 || idx === 5 ? "md:col-span-2 md:row-span-2" : ""}`}>
                  <img src={img} alt={`عمل ${idx + 1} من صالون فلة`} className={`w-full object-cover img-zoom ${idx === 0 || idx === 5 ? "h-48 sm:h-64 md:h-full" : "h-48 sm:h-56"}`} loading="lazy" />
                  <div className="absolute inset-0 bg-[#2D1B2E]/0 group-hover:bg-[#2D1B2E]/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"><ArrowLeft className="w-5 h-5 inline-block" /></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white rounded-full gap-2 px-6">
                  <Instagram className="w-4 h-4" /> شاهدی المزيد على إنستاغرام
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ─── CTA Banner ─── */}
        <section className="py-16 sm:py-20 bg-gradient-cta relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">جاهزة لإطلالة جديدة؟</h2>
            <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed">احجزي موعدكِ الآن في صالون فلة بيوتي واستمتعي بتجربة تجميل فاخرة<br className="hidden sm:block" />بإشراف خبيرة التجميل هبة صبّوح</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full px-8 py-6 text-base gap-2 shadow-xl">
                  <MessageCircle className="w-5 h-5" /> احجزي عبر واتساب
                </Button>
              </a>
              <a href={PHONE_TEL}>
                <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white/15 rounded-full px-8 py-6 text-base gap-2">
                  <Phone className="w-5 h-5" /> اتصلي: {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section id="contact" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-[#FDF2F8] rounded-full px-4 py-1.5 mb-5">
                <MapPin className="w-4 h-4 text-[#C77DBA]" />
                <span className="text-[#C77DBA] text-sm font-medium">تواصل معنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D1B2E] mb-4 font-display">نسعد بتواصلكم</h2>
              <p className="text-[#7A5F7C] text-base leading-relaxed">تواصلي معنا للحجز والاستفسار عن خدماتنا، نحن هنا لمساعدتكِ في كل ما تحتاجينه</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-5">
                <a href={PHONE_TEL} className="flex items-center gap-4 p-5 bg-[#FFFAFB] rounded-xl border border-[#F5E6F2] hover:border-[#C77DBA]/40 hover:shadow-lg hover:shadow-[#C77DBA]/5 transition-all group">
                  <div className="w-14 h-14 bg-[#FDF2F8] rounded-xl flex items-center justify-center text-[#C77DBA] group-hover:bg-[#C77DBA] group-hover:text-white transition-colors"><Phone className="w-6 h-6" /></div>
                  <div><div className="font-bold text-[#2D1B2E] text-sm font-display">اتصلي بنا</div><div className="text-[#7A5F7C] text-sm" dir="ltr">{PHONE_DISPLAY}</div></div>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-[#FFFAFB] rounded-xl border border-[#F5E6F2] hover:border-[#25D366]/40 hover:shadow-lg hover:shadow-[#25D366]/5 transition-all group">
                  <div className="w-14 h-14 bg-[#E8F8EE] rounded-xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors"><MessageCircle className="w-6 h-6" /></div>
                  <div><div className="font-bold text-[#2D1B2E] text-sm font-display">واتساب</div><div className="text-[#7A5F7C] text-sm">احجزي موعدكِ بسهولة وسرعة</div></div>
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 p-5 bg-[#FFFAFB] rounded-xl border border-[#F5E6F2] hover:border-[#C77DBA]/40 hover:shadow-lg hover:shadow-[#C77DBA]/5 transition-all group">
                  <div className="w-14 h-14 bg-[#FDF2F8] rounded-xl flex items-center justify-center text-[#C77DBA] group-hover:bg-[#C77DBA] group-hover:text-white transition-colors"><Mail className="w-6 h-6" /></div>
                  <div><div className="font-bold text-[#2D1B2E] text-sm font-display">البريد الإلكتروني</div><div className="text-[#7A5F7C] text-sm" dir="ltr">{EMAIL}</div></div>
                </a>
                <div className="flex items-center gap-4 p-5 bg-[#FFFAFB] rounded-xl border border-[#F5E6F2]">
                  <div className="w-14 h-14 bg-[#FDF2F8] rounded-xl flex items-center justify-center text-[#C77DBA]"><MapPin className="w-6 h-6" /></div>
                  <div><div className="font-bold text-[#2D1B2E] text-sm font-display">الموقع</div><div className="text-[#7A5F7C] text-sm">فندق السفير - حمص، سوريا</div></div>
                </div>
                <div className="flex items-center gap-3 pt-3">
                  <span className="text-sm text-[#7A5F7C] font-medium">تابعينا:</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#FDF2F8] rounded-full flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-colors" aria-label="إنستاغرام"><Instagram className="w-5 h-5" /></a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-[#FDF2F8] rounded-full flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors" aria-label="فيسبوك"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8D5E4]/50 h-full min-h-[400px]">
                <iframe src={MAPS_EMBED_URL} width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="موقع صالون فلة بيوتي - فندق السفير حمص" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ Footer ═══ */}
      <footer className="bg-[#2D1B2E] text-white/80">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌸</span>
                <div>
                  <span className="block text-xl font-bold text-white font-display">فلة بيوتي صالون</span>
                  <span className="block text-xs text-[#C9A96E] tracking-wider" dir="ltr">FULLA BEAUTY SALON BY HIBA</span>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-md mb-5">فرع أول من سلسلة صالونات فلة في سوريا. بإدارة خبيرة التجميل هبة صبّوح، نقدم لكم خدمات تجميل احترافية في موقع فاخر بفندق السفير - حمص.</p>
              <div className="flex items-center gap-3">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E1306C] transition-colors" aria-label="إنستاغرام"><Instagram className="w-4 h-4" /></a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-colors" aria-label="فيسبوك"><Facebook className="w-4 h-4" /></a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors" aria-label="واتساب"><MessageCircle className="w-4 h-4" /></a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold font-display mb-4 text-sm">روابط سريعة</h3>
              <ul className="space-y-3">{NAV_LINKS.map((link) => (<li key={link.href}><button onClick={() => scrollToSection(link.href)} className="text-white/60 hover:text-[#C9A96E] transition-colors text-sm">{link.label}</button></li>))}</ul>
            </div>
            <div>
              <h3 className="text-white font-bold font-display mb-4 text-sm">معلومات التواصل</h3>
              <ul className="space-y-3">
                <li><a href={PHONE_TEL} className="flex items-center gap-2 text-white/60 hover:text-[#C9A96E] transition-colors text-sm"><Phone className="w-4 h-4" /><span dir="ltr">{PHONE_DISPLAY}</span></a></li>
                <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-white/60 hover:text-[#C9A96E] transition-colors text-sm"><Mail className="w-4 h-4" /><span>{EMAIL}</span></a></li>
                <li className="flex items-start gap-2 text-white/60 text-sm"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>فندق السفير - حمص، سوريا</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">© {new Date().getFullYear()} فلة بيوتي صالون | Fulla Beauty Salon by Hiba. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4">
              <VisitorCounter variant="footer" />
              <span className="text-white/20">|</span>
              <p className="text-white/40 text-xs">Developed By <span className="text-[#C9A96E] font-semibold">QSERVA</span></p>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ Scroll to Top ═══ */}
      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-[#C77DBA] text-white rounded-full shadow-xl shadow-[#C77DBA]/30 flex items-center justify-center hover:bg-[#B56CA8] transition-all hover:scale-110" aria-label="العودة للأعلى">
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* ═══ Floating WhatsApp ═══ */}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#1EBE57] transition-all hover:scale-110 float-animation" aria-label="تواصل عبر واتساب">
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
