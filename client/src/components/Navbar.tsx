import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { useLocation } from 'wouter';

/**
 * Navbar Component - Deep Tech Minimalism with Multi-page Navigation
 * 
 * Features:
 * - Sticky navigation bar with dark theme
 * - Multi-page routing (Home, About, Skills, Services, Portfolio, Contact)
 * - Resume download button
 * - Responsive hamburger menu for mobile
 * - Active link highlighting
 */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: '首頁', href: '/' },
    { label: '經歷', href: '/about' },
    { label: '技能', href: '/skills' },
    { label: '服務', href: '/services' },
    { label: '作品', href: '/portfolio' },
    { label: '聯絡', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location === href;
  };

  const handleDownloadResume = () => {
    // Create a sample resume download
    const resumeContent = `Christine Liang - Resume
UI/UX Designer & Frontend Engineer
mycity50123@gmail.com

Experience:
- 10+ years of design experience
- 30+ projects completed
- 100+ satisfied clients

Skills:
- UI/UX Design
- Web Development
- Frontend Engineering
- Design Systems
- Figma, React, Tailwind CSS

Services:
- Web Design
- UI/UX Design
- Frontend Development
- Design Consultation
`;
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
    element.setAttribute('download', 'Christine_Liang_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>CL</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline" style={{ fontFamily: "'Playfair Display', serif" }}>
            Portfolio
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors duration-200 font-medium ${
                isActive(item.href)
                  ? 'text-accent border-b-2 border-accent pb-1'
                  : 'text-foreground hover:text-accent'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Section: Resume Download + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleDownloadResume}
            className="hidden md:flex items-center gap-2 px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <Download className="w-5 h-5" />
            Download CV
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-accent" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 font-medium py-2 ${
                  isActive(item.href)
                    ? 'text-accent border-l-2 border-accent pl-2'
                    : 'text-foreground hover:text-accent'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                handleDownloadResume();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300 font-semibold mt-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
