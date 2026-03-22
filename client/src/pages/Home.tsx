import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

/**
 * Home Page - Deep Tech Minimalism with Cyan Glow
 * 
 * Features:
 * - Hero section with personal photo and irregular glow background
 * - Animated glow effects using CSS
 * - Call-to-action buttons
 * - Social media links
 * - Statistics showcase - horizontal layout, no scroll needed
 */

export default function Home() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mycity50123@gmail.com';
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section - Optimized for no scroll */}
      <section className="relative flex-1 overflow-hidden">
        {/* Glow background */}
        <div className="absolute inset-0 glow-background" style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 60%)',
        }}>
          {/* Decorative glow orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full">
          <div className="flex flex-col h-full justify-center max-w-6xl mx-auto pt-0">
            {/* Main Content - Photo and Title in parallel */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
              {/* Left: Personal Photo with Glow */}
              <div className="relative flex justify-center">
                <div className="photo-stage relative w-[min(22rem,100%)] h-[29rem] sm:h-[31rem]">
                  <div className="photo-aura" aria-hidden="true"></div>
                  <div className="photo-backdrop" aria-hidden="true">
                    <span className="photo-blob photo-blob-center"></span>
                    <span className="photo-blob photo-blob-top-left"></span>
                    <span className="photo-blob photo-blob-top-center"></span>
                    <span className="photo-blob photo-blob-top-right"></span>
                    <span className="photo-blob photo-blob-right"></span>
                    <span className="photo-blob photo-blob-bottom-right"></span>
                    <span className="photo-blob photo-blob-bottom-left"></span>
                    <span className="photo-blob photo-blob-left"></span>
                    <span className="photo-blob photo-blob-mini-left"></span>
                    <span className="photo-blob photo-blob-mini-right"></span>
                  </div>

                  <div className="photo-shell relative z-10 w-full h-full">
                    <img 
                      src="/images/avatat-remove-bg.png" 
                      alt="Christine Liang" 
                      className="portrait-img w-full h-full object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Title and Description */}
              <div className="space-y-4 flex flex-col justify-start pt-0">
                <div>
                  <p className="text-accent text-lg font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Hello, I'm</p>
                  <h1 className="text-4xl md:text-4xl font-bold text-foreground mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Christine Liang
                  </h1>
                  <p className="text-xl md:text-2xl text-accent font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    And I'm a <span className="text-accent">Web Designer</span>.
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-snug max-w-md pt-1">
                  AI 驅動數位轉型設計師，專精於 Web Design 與 B2B/B2C 數位產品迭代，擅長將商業邏輯轉化為極致的介面體驗。
                </p>

                {/* Social Links */}
                <div className="flex gap-3 pt-1">
                  <a href="#" className="p-2 rounded-lg bg-card hover:bg-accent/10 text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-card hover:bg-accent/10 text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-card hover:bg-accent/10 text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-card hover:bg-accent/10 text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button 
                    onClick={handleEmailClick}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    立即洽詢
                  </button>
                  <button className="btn-secondary text-sm px-4 py-2">
                    聯絡我
                  </button>
                </div>
              </div>
            </div>

            {/* Stats - Horizontal Layout */}
            <div className="hero-stats pt-2 -mt-4">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">年工作經驗</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">完成專案</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">技術棧掌握</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">滿意客戶</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
