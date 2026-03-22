/**
 * Services Page - Deep Tech Minimalism
 * 
 * Features:
 * - Service cards with hover effects
 * - Detailed service descriptions
 * - Pricing information
 * - Call-to-action buttons
 */

import { Zap, Palette, Code, Smartphone, Layers, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'UI/UX 設計',
      icon: Palette,
      description: '打造美觀直覺的使用者介面，提升用戶滥意度與參與度',
      features: [
        '使用者研究 & 人物分析',
        '低保真設計 & 原型製作',
        '視覺設計 & 品牡設計',
        '可用性測試 & 迭代改進'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: '網頁開發',
      icon: Code,
      description: '使用現代技術構建快速、可擴展的響應式網頁應用',
      features: [
        '前端開發 (React, Next.js)',
        '後端 API 開發',
        '數據庫設計 & 優化',
        '效能最佳化'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: '行動應用設計',
      icon: Smartphone,
      description: '為 iOS 與 Android 設計原生與跨平台行動應用',
      features: [
        '行動應用 UI/UX 設計',
        '響應式設計',
        '互動設計',
        '設計系統建構'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: '設計系統',
      icon: Layers,
      description: '為可擴展的產品構建全面的設計系統與元件庫',
      features: [
        '元件庫開發',
        '設計令牧管理',
        '文檔 & 指南',
        '團隊協作工具'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: '品牡設計',
      icon: Zap,
      description: '打造獨特的品牡識別，與目標客群產生共鳴',
      features: [
        '企業標誌設計',
        '品牡指南',
        '色彩調整 & 排版',
        '行銷材料設計'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      title: 'Product Strategy',
      icon: Rocket,
      description: 'Guiding product development from concept to launch with strategic insights',
      features: [
        'Product Discovery & Research',
        'Roadmap Planning',
        'User Testing & Feedback',
        'Launch Strategy'
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="content-wrapper mx-auto max-w-6xl px-4">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            我的 <span className="text-accent">服務</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            我提供針對性的設計與開發服務，將你的願景轉變為現實
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-lg border border-border bg-background/50 hover:bg-card hover:border-accent transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-accent">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full py-2 px-4 rounded-lg border border-accent text-accent hover:bg-accent hover:text-background transition-all duration-300 font-semibold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    了解更多
                  </button>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-lg border border-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card/30 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            準備好開始您的專案了嘗？
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            讓我們一起討論您的專案需求，打造令人驚艷的成果
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-accent to-primary text-background rounded-lg font-bold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
              立即聯絡
            </button>
            <button className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-bold hover:bg-accent/10 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
              查看作品
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
