/**
 * About Page - Deep Tech Minimalism
 * 
 * Features:
 * - Work experience timeline
 * - Development philosophy
 * - Professional journey
 * - Hover effects on timeline items
 */

export default function About() {
  const experiences = [
    {
      id: 1,
      title: "UI/UX 設計師 & 前端工程師",
      company: "自由工作者 & 組織",
      period: "2023年8月 - 現在",
      description: [
        "領導前端架構與現代框架開發",
        "構建響應式 UI 元件並優化效能",
        "指導初級開發者並進行程式碼審查"
      ]
    },
    {
      id: 2,
      title: "資深 UI/UX 設計師",
      company: "數位設計工作室",
      period: "2022年10月 - 現在",
      description: [
        "開發 AI 驅動的網站建構平台",
        "為 8+ 多用戶平台設計白標解決方案",
        "開發完整的設計系統與元件庫"
      ]
    },
    {
      id: 3,
      title: "產品設計師",
      company: "科技新創公司",
      period: "2019年3月 - 2019年8月",
      description: [
        "設計行動與網頁應用程式使用者介面",
        "進行使用者研究與可用性測試",
        "與產品與工程團隊協作"
      ]
    },
    {
      id: 4,
      title: "UX 研究員",
      company: "互聯網科技公司",
      period: "2018年6月 - 2019年2月",
      description: [
        "進行深度使用者研究與訪談",
        "分析競品與市場趨勢",
        "產出 UX 研究報告與設計建議"
      ]
    },
    {
      id: 5,
      title: "視覺設計師",
      company: "創意設計公司",
      period: "2017年1月 - 2018年5月",
      description: [
        "設計品牌識別系統與視覺規範",
        "創作行銷物料與數位資產",
        "與客戶協作完成設計項目"
      ]
    }
  ];

  const philosophy = [
    {
      title: "使用者中心設計",
      description: "每項設計決策都由使用者需求與研究洞察驅動"
    },
    {
      title: "效能優先",
      description: "在不妥協美感的前提下最佳化速度與效率"
    },
    {
      title: "可擴展系統",
      description: "構建隨著產品成長的設計系統與元件"
    },
    {
      title: "無障礙設計",
      description: "確保為所有人提供包容性的設計體驗"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="content-wrapper mx-auto max-w-6xl px-4">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="text-accent">過去</span>經歷
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
              工作經歷
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-lg border border-border hover:border-accent hover:bg-card/50 transition-all duration-300 cursor-pointer group relative"
                  >

                    <h3 className="font-bold text-foreground text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {exp.title}
                    </h3>
                    <p className="text-accent text-sm mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">{exp.period}</p>

                    <ul className="mt-3 space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex gap-2 items-start">
                          <span className="text-accent flex-shrink-0 mt-0.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Philosophy */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
              我的設計哲學
            </h2>

            <div className="space-y-6">
              {philosophy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer"
                >
                  <h3 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 p-6 rounded-lg bg-card border border-border">
              <h3 className="font-bold text-foreground mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">30+</div>
                  <div className="text-xs text-muted-foreground mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <div className="text-xs text-muted-foreground mt-1">Tech Stacks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">100+</div>
                  <div className="text-xs text-muted-foreground mt-1">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
