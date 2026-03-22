import { ArrowRight, Mail } from 'lucide-react';

/**
 * Hero Section Component - Modern Architectural Light Style
 * 
 * Features:
 * - Large headline with bold Archivo Black typography
 * - Descriptive subtitle with accent colors
 * - Two CTA buttons: "View Projects" and "Get in Touch"
 * - Responsive layout with proper spacing
 * - Gold gradient accent line
 * - Light background with subtle box design elements
 */
export default function HeroSection() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mycity50123@gmail.com';
  };

  const handlePortfolioClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hi, I'm <span className="text-primary">Christine</span>
          </h1>

          {/* Divider */}
          <div className="divider-gold mb-8 max-w-xs"></div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            I'm a <span className="text-accent font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>UI/UX Designer</span> and <span className="text-accent font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>Frontend Engineer</span> passionate about creating beautiful, functional digital experiences. With expertise in design systems, web development, and user-centered design, I transform ideas into elegant solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <button
              onClick={handlePortfolioClick}
              className="btn-primary inline-flex items-center justify-center gap-2 group"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              查看精選專案
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleEmailClick}
              className="btn-secondary inline-flex items-center justify-center gap-2"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Mail className="w-5 h-5" />
              與我聊聊
            </button>
          </div>

          {/* Stats or Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>5+</div>
              <p className="text-muted-foreground text-sm">年設計經驗</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>20+</div>
              <p className="text-muted-foreground text-sm">完成專案</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
              <p className="text-muted-foreground text-sm">客戶滿意度</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
