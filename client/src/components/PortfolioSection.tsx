import { useState, useMemo, useRef } from 'react';
import { Eye } from 'lucide-react';

/**
 * Portfolio Section Component - Modern Architectural Light Style with Behance Inspiration
 * 
 * Features:
 * - Light category filter buttons with dark text (modern architectural style)
 * - Square portfolio cards (1:1 aspect ratio) with box design
 * - Hover overlay with title and tech stack
 * - View count tracking (hover interactions)
 * - Grid background pattern and architectural design aesthetics
 * - Archivo Black font for bold typography
 * - Mock data (will be replaced with Notion API)
 */

interface PortfolioItem {
  id: string;
  title: string;
  category: 'UI/UX & Web' | 'Visual Graphics' | 'Product & Packaging';
  date: string;
  techStack: string[];
  description: string;
  image: string;
  link?: string;
}

const MOCK_PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: '遊戲集成網站',
    category: 'UI/UX & Web',
    date: '2026',
    techStack: ['JavaScript', 'Tailwind CSS', 'RWD'],
    description: '全球領先的遊戲串接 API 專家平台，支援 30,000+ 用戶與 200+ 遊戲',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop',
    link: '#'
  },
  {
    id: '2',
    title: '企業貸款網站',
    category: 'UI/UX & Web',
    date: '2026',
    techStack: ['Figma', 'AI', 'React'],
    description: '專業貸款平台，提供快速、安全的貸款服務與完整的用戶流程',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=600&fit=crop',
    link: '#'
  },
  {
    id: '3',
    title: '體育球賽網站 (AERIX-C)',
    category: 'UI/UX & Web',
    date: '2025',
    techStack: ['Figma', 'PS', 'AI'],
    description: '體育球賽資訊平台，提供實時比分、球隊資訊與聯繫方式',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=600&fit=crop',
    link: '#'
  },
  {
    id: '4',
    title: '預測百家樂分析系統',
    category: 'UI/UX & Web',
    date: '2025',
    techStack: ['Figma', 'PS', 'AI', 'Data Visualization'],
    description: '複雜的數據分析與預測系統，深色主題設計與多功能儀表板',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop',
    link: '#'
  },
  {
    id: '5',
    title: '毛其林寵物綜合 App',
    category: 'UI/UX & Web',
    date: '2025',
    techStack: ['Figma', 'PS', 'AI', 'Mobile Design'],
    description: '寵物相關綜合應用平台，用戶友善介面與社交互動元素',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
    link: '#'
  },
  {
    id: '6',
    title: '品牌視覺設計',
    category: 'Visual Graphics',
    date: '2025',
    techStack: ['Figma', 'Adobe XD', 'Illustrator'],
    description: '完整的品牌識別系統設計，包含 Logo、色彩系統與設計規範',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop',
    link: '#'
  },
];

const CATEGORIES = ['全部', 'UI/UX & Web', 'Visual Graphics', 'Product & Packaging'] as const;

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [hoverCounts, setHoverCounts] = useState<Record<string, number>>({});
  const hoverTimeoutRef = useRef<Record<string, NodeJS.Timeout>>({});

  const filteredPortfolio = useMemo(() => {
    if (selectedCategory === '全部') {
      return MOCK_PORTFOLIO;
    }
    return MOCK_PORTFOLIO.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleMouseEnter = (id: string) => {
    // 清除之前的 timeout
    if (hoverTimeoutRef.current[id]) {
      clearTimeout(hoverTimeoutRef.current[id]);
    }

    // 延遲 300ms 後增加計數（避免快速移動誤觸）
    hoverTimeoutRef.current[id] = setTimeout(() => {
      setHoverCounts(prev => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    }, 300);
  };

  const handleMouseLeave = (id: string) => {
    if (hoverTimeoutRef.current[id]) {
      clearTimeout(hoverTimeoutRef.current[id]);
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Decorative background elements - Architectural style */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF] opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Irregular line decoration */}
      <svg className="absolute top-20 right-10 w-32 h-32 opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 10 10 L 90 30 L 50 70 L 80 90" stroke="#D4AF37" strokeWidth="2" fill="none" />
        <path d="M 20 50 L 70 20 L 90 80" stroke="#00D9FF" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            精選作品
          </h2>
          <div className="divider-gold mb-6 max-w-xs"></div>
          <p className="text-lg text-muted-foreground">
            以下是我最近完成的一些代表性專案，展示了我在 UI/UX 設計、網頁開發與視覺設計方面的能力。
          </p>
        </div>

        {/* Category Filter - Dark background with white text (Behance style) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#1a1f2e] text-white border-2 border-[#D4AF37] shadow-lg'
                  : 'bg-[#1a1f2e] text-white border-2 border-transparent hover:border-[#D4AF37]'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Square cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, index) => (
            <div
              key={item.id}
              className="group animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image Container - Square aspect ratio */}
              <div
                className="relative w-full aspect-square overflow-hidden bg-secondary rounded-lg mb-4"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay with title and tech stack */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-[#D4AF37] text-[#0F1419] rounded font-medium"
                        style={{ fontFamily: "'Roboto Mono', monospace" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info with views count */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-sm">{item.date}</p>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Eye size={16} />
                    <span>{hoverCounts[item.id] || 0}</span>
                  </div>
                </div>
                <p className="text-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              此分類暫無作品，敬請期待。
            </p>
          </div>
        )}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
