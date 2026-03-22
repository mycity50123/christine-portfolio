/**
 * Contact Page - Deep Tech Minimalism
 * 
 * Features:
 * - Social media links
 * - Contact information (Email only)
 * - Simple contact section
 */

import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#', color: 'hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-cyan-400' },
    { name: 'Email', icon: Mail, url: 'mailto:mycity50123@gmail.com', color: 'hover:text-accent' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: '電子信箱',
      value: 'mycity50123@gmail.com',
      link: 'mailto:mycity50123@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="content-wrapper mx-auto max-w-6xl px-4">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            與我 <span className="text-accent">聯絡</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            有一個棒的想法？讓我們一起討論我如何幫助你實現你的願景
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              聯絡資訊
            </h2>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-card/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                社交媒體
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className={`p-3 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 text-foreground ${social.color}`}
                      title={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Message */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              直接聯繫
            </h2>
            <div className="p-8 rounded-lg border border-border bg-card/30 space-y-4">
              <p className="text-foreground text-lg">
                對於任何合作機會或諮詢，歡迎直接透過電子信箱與我聯繫。
              </p>
              <p className="text-muted-foreground">
                我通常會在 24 小時內回覆您的郵件。
              </p>
              <a
                href="mailto:mycity50123@gmail.com"
                className="inline-block px-8 py-3 bg-accent text-background font-bold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 mt-4"
              >
                傳送郵件
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
