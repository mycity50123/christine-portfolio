import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

/**
 * Footer Component - Deep Tech Minimalism Style
 * 
 * Features:
 * - Contact information
 * - Social media links
 * - Copyright notice
 * - Responsive layout
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:mycity50123@gmail.com',
      text: 'mycity50123@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: '#',
      text: 'GitHub'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      text: 'LinkedIn'
    },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>CL</span>
              </div>
              <span className="font-bold text-lg text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                Christine Liang
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              UI/UX Designer & Frontend Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              快速連結
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  首頁
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  作品集
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  聯絡我
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              聯絡方式
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.text}</span>
                    {link.href.startsWith('http') && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Christine Liang. All rights reserved.
          </p>
          <p>
            Designed & Built with <span className="text-primary">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
