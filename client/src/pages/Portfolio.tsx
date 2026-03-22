/**
 * Portfolio Page - Deep Tech Minimalism with Project Showcase
 * 
 * Features:
 * - Project cards with images
 * - Category filtering
 * - Hover effects with project details
 * - View count tracking
 * - Pagination (9 items per page)
 */

import { useState } from 'react';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const projects = [
    {
      id: 1,
      title: '遊戲集成網站',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      description: 'Modern gaming platform with interactive UI',
      technologies: ['React', 'Tailwind CSS', 'Figma'],
      year: 2023
    },
    {
      id: 2,
      title: '企業貸款網站',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop',
      description: 'Enterprise loan management system',
      technologies: ['Next.js', 'TypeScript', 'Figma'],
      year: 2023
    },
    {
      id: 3,
      title: '體育球賽網站',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=500&fit=crop',
      description: 'Sports event booking platform',
      technologies: ['React', 'Node.js', 'MongoDB'],
      year: 2023
    },
    {
      id: 4,
      title: '預測百家樂分析系統',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1551431009-381d36ac3a14?w=500&h=500&fit=crop',
      description: 'Advanced analytics dashboard',
      technologies: ['React', 'D3.js', 'Python'],
      year: 2023
    },
    {
      id: 5,
      title: '毛其林寵物綜合 App',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27c62d?w=500&h=500&fit=crop',
      description: 'Pet care and social platform',
      technologies: ['React Native', 'Firebase', 'Figma'],
      year: 2022
    },
    {
      id: 6,
      title: '電商平台',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=500&fit=crop',
      description: '全棧電子商務解決方案',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      year: 2022
    },
    {
      id: 7,
      title: '設計系統',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: '完整的元件庫',
      technologies: ['Figma', 'Storybook', 'React'],
      year: 2023
    },
    {
      id: 8,
      title: '行動應用設計',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop',
      description: 'iOS 與 Android 應用介面',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      year: 2022
    },
    {
      id: 9,
      title: 'SaaS 儀表板',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      description: 'Enterprise SaaS analytics platform',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      year: 2023
    },
    {
      id: 10,
      title: '品牌識別系統',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: '完整的品牌設計指南',
      technologies: ['Figma', 'Adobe XD', 'Brand Guidelines'],
      year: 2023
    },
    {
      id: 11,
      title: '社交媒體平台',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=500&fit=crop',
      description: '現代社交網路應用',
      technologies: ['Next.js', 'WebSocket', 'MongoDB'],
      year: 2022
    },
    {
      id: 12,
      title: '內容管理系統',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      description: '功能完整的 CMS 平台',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      year: 2023
    },
    {
      id: 13,
      title: '線上教育平台',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=500&fit=crop',
      description: '互動式學習管理系統',
      technologies: ['React', 'Firebase', 'Stripe'],
      year: 2022
    },
    {
      id: 14,
      title: '健身追蹤應用',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: '健康與健身管理應用',
      technologies: ['React Native', 'Firebase', 'Chart.js'],
      year: 2023
    },
    {
      id: 15,
      title: '旅遊預訂系統',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      description: '完整的旅遊預訂解決方案',
      technologies: ['Next.js', 'Stripe', 'Google Maps API'],
      year: 2023
    },
    {
      id: 16,
      title: '餐廳管理系統',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=500&fit=crop',
      description: '餐廳營運管理平台',
      technologies: ['React', 'Node.js', 'MongoDB'],
      year: 2022
    },
    {
      id: 17,
      title: '房產搜尋平台',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      description: '房地產搜尋與展示平台',
      technologies: ['React', 'Google Maps', 'Figma'],
      year: 2023
    },
    {
      id: 18,
      title: '金融投資應用',
      category: 'ui-ux',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      description: '股票與投資管理應用',
      technologies: ['React', 'WebSocket', 'Chart.js'],
      year: 2023
    }
  ];

  const categories = [
    { id: 'all', label: '所有作品' },
    { id: 'ui-ux', label: 'UI/UX & 網頁' },
    { id: 'web-design', label: '網頁設計' },
    { id: 'design', label: '設計' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const handleProjectHover = (projectId: number) => {
    setViewCounts(prev => ({
      ...prev,
      [projectId]: (prev[projectId] || 0) + 1
    }));
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="content-wrapper mx-auto max-w-6xl px-4">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            我的 <span className="text-accent">作品集</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mt-4"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            策划了我最近的專案，展示我在設計與開發領域的專業能力
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-accent text-background border border-accent'
                  : 'bg-card border border-border text-foreground hover:border-accent'
              }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - 9 items per page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => handleProjectHover(project.id)}
              className="group relative rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Top: Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {project.title}
                    </h3>
                    <p className="text-accent text-sm">{project.description}</p>
                  </div>

                  {/* Bottom: Technologies & View Count */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent/20 border border-accent text-accent text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs">{project.year}</span>
                      <div className="flex items-center gap-1 text-accent text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{viewCounts[project.id] || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-4 bg-card group-hover:bg-card/80 transition-colors">
                <h3 className="font-bold text-foreground mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-accent text-background border border-accent'
                      : 'bg-card border border-border text-foreground hover:border-accent'
                  }`}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-border text-foreground hover:border-accent hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card/30 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            有興趣一起合作嘗？
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            我正待新的專案機會與合作。讓我們一起打造一些不一樣的作品吧！
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-accent to-primary text-background rounded-lg font-bold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300" style={{ fontFamily: "'Poppins', sans-serif" }}>
            開始一個專案
          </button>
        </div>
      </div>
    </div>
  );
}
