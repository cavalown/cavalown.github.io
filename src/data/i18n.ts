export type Locale = "en" | "zh";

export const defaultLocale: Locale = "en";

export const locales: Record<
  Locale,
  {
    lang: string;
    label: string;
    switchLabel: string;
    prefix: string;
  }
> = {
  en: {
    lang: "en",
    label: "English",
    switchLabel: "中文",
    prefix: "",
  },
  zh: {
    lang: "zh-Hant",
    label: "正體中文",
    switchLabel: "EN",
    prefix: "/zh",
  },
};

export const copy = {
  en: {
    siteDescription:
      "Projects, studio notes, writings, and things I make along the way.",
    nav: {
      about: "About",
      resume: "Resume",
      projects: "Projects",
      studio: "Studio",
      writing: "Writing",
    },
    hero: {
      title: "I work for life.",
      lede: "Projects, studio notes, writings, and things I make along the way.",
    },
    about: {
      title: "The person behind cavalown",
      description:
        "A small room for context, identity, and the things that shape the work.",
      intro:
        "Hi, I am Cavalon. This site is where I keep the things I build, write, and keep learning from.",
      body: "I like software that feels clear, small tools that make daily life easier, and writing that helps thoughts settle into shape. The public doorway is cavalown, but this page can hold the more complete human context.",
      heading: "What belongs here",
      outro:
        "A short bio, work background, favorite tools, contact links, and the kind of work I want to do next can all grow here over time.",
    },
    resume: {
      eyebrow: "Resume",
      title: "Software engineer focused on clear product systems",
      description:
        "Experience across frontend products, document systems, data tools, and backend services.",
      summary:
        "I build product-facing software with an eye for maintainable interfaces, content/document workflows, and the small systems that keep teams moving.",
      links: [
        { label: "Email", href: "mailto:cavalown@gmail.com" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/yilinghuang-cavalown/",
        },
        { label: "GitHub", href: "https://github.com/cavalown" },
      ],
      highlights: [
        "Frontend product development with Angular, Angular Material, and NgRx.",
        "Backend and service work with NestJS, Python APIs, subscription flows, and payment integrations.",
        "Document template rendering, admin systems, data visualization, and internal tooling.",
      ],
      sections: [
        {
          title: "Experience",
          entries: [
            {
              title: "Software Engineer",
              meta: "TuringText · Aug 2023 - Present · Kaohsiung, Taiwan",
              items: [
                "Built frontend product surfaces for project and task management workflows using Angular.",
                "Developed document templates for insurance-industry workflows.",
                "Designed subscription-system data models, product-plan management flows, and activation-service integrations.",
                "Built backend subscription renewal services and payment flow integrations for bank card processing.",
              ],
            },
            {
              title: "Software Engineer",
              meta: "SSMOLab · Nov 2021 - Jul 2023 · Kaohsiung, Taiwan",
              items: [
                "Worked on document rendering service APIs and document template rendering.",
                "Implemented admin interfaces, API integrations, and official-site frontend development.",
                "Established project codebases and explored form-to-document workflow feasibility.",
              ],
            },
            {
              title: "Data and DevOps Engineer",
              meta: "Location-based marketing technology company · Mar 2021 - Sep 2021 · Taipei, Taiwan",
              items: [
                "Maintained Python APIs and geodata comparison/query workflows.",
                "Built location-data visualizations including heatmaps and hotspot maps.",
                "Worked with Google Maps APIs, data crawling, reusable data matching packages, and Line Notify ad-monitoring alerts.",
              ],
            },
          ],
        },
        {
          title: "Skills",
          entries: [
            {
              title: "Frontend",
              items: [
                "Angular, Angular Material, NgRx, TypeScript, HTML, CSS, responsive UI implementation.",
              ],
            },
            {
              title: "Backend and Data",
              items: [
                "NestJS, Python APIs, relational data modeling, payment integrations, data visualization, scraping workflows.",
              ],
            },
            {
              title: "Product Systems",
              items: [
                "Document rendering, template systems, subscription flows, admin tools, project/task management systems.",
              ],
            },
          ],
        },
        {
          title: "Education",
          entries: [
            {
              title: "AI Big Data Program",
              meta: "Institute for Information Industry, Zhongli · Feb 2020 - Jul 2020",
              items: ["Focused on big-data analysis and applied AI foundations."],
            },
            {
              title: "Bachelor of Business Administration",
              meta: "National Kaohsiung Normal University · 2008 - 2012",
              items: ["Department of Business Management."],
            },
          ],
        },
        {
          title: "Languages",
          entries: [
            {
              title: "Working Languages",
              items: ["Mandarin Chinese, English."],
            },
          ],
        },
      ],
    },
    sections: {
      projects: {
        eyebrow: "Projects",
        title: "Things made and tried",
        description:
          "Selected work, experiments, and small builds that show what has been explored so far.",
      },
      studio: {
        eyebrow: "Studio",
        title: "Notes from the making",
        description:
          "Process notes, implementation thoughts, and small records from building things.",
      },
      writing: {
        eyebrow: "Writing",
        title: "Words outside the studio",
        description:
          "Work reflections, books, films, music, daily life, and thoughts that need a quieter place.",
      },
    },
    footer: "I work for life. Built slowly, kept personal.",
    menu: {
      open: "Open navigation",
      close: "Close navigation",
    },
  },
  zh: {
    siteDescription: "作品、工作室筆記、文字，以及一路上做出來的東西。",
    nav: {
      about: "關於",
      resume: "履歷",
      projects: "作品",
      studio: "工作室",
      writing: "文字",
    },
    hero: {
      title: "為生活而工作。",
      lede: "作品、工作室筆記、文字，以及一路上做出來的東西。",
    },
    about: {
      title: "cavalown 背後的人",
      description: "放一些背景、身份，以及形塑我如何工作的東西。",
      intro:
        "嗨，我是 Cavalon。這個網站用來放我做的東西、寫下的文字，還有一路上持續學習的紀錄。",
      body: "我喜歡清楚的軟體、讓日常生活更順手的小工具，也喜歡把想法寫下來，讓它們慢慢變成形狀。首頁是 cavalown 這個入口，而這裡可以放更完整的人。",
      heading: "這裡會放什麼",
      outro:
        "簡短自介、工作背景、常用工具、聯絡方式，以及接下來想做的事，都可以慢慢長在這裡。",
    },
    resume: {
      eyebrow: "Resume",
      title: "專注清楚產品系統的軟體工程師",
      description: "整理前端產品、文件系統、資料工具與後端服務相關經歷。",
      summary:
        "我喜歡建造可維護的產品介面、內容與文件流程，以及讓團隊工作更順的小系統。",
      links: [
        { label: "Email", href: "mailto:cavalown@gmail.com" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/yilinghuang-cavalown/",
        },
        { label: "GitHub", href: "https://github.com/cavalown" },
      ],
      highlights: [
        "使用 Angular、Angular Material、NgRx 開發前端產品介面。",
        "以 NestJS、Python API、訂閱流程與金流串接處理後端與服務整合。",
        "參與文件模板渲染、後台系統、資料視覺化與內部工具開發。",
      ],
      sections: [
        {
          title: "經歷",
          entries: [
            {
              title: "Software Engineer",
              meta: "TuringText · 2023 年 8 月 - 現在 · 高雄",
              items: [
                "使用 Angular 建置專案、任務管理追蹤系統的前端網頁。",
                "開發保險產業文件模板。",
                "設計訂閱系統資料模型、產品與方案管理流程，並串接啟用服務的系統資料流。",
                "開發訂閱系統後端、續訂服務，以及銀行刷卡金流串接。",
              ],
            },
            {
              title: "Software Engineer",
              meta: "SSMOLab · 2021 年 11 月 - 2023 年 7 月 · 高雄",
              items: [
                "開發文件渲染服務 API 與文件模板渲染流程。",
                "實作後台管理介面、API 串接與官網前端開發。",
                "建立專案 codebase，並進行 form-to-document 流程可行性測試。",
              ],
            },
            {
              title: "Data and DevOps Engineer",
              meta: "絡客思行銷科技股份有限公司 · 2021 年 3 月 - 2021 年 9 月 · 台北",
              items: [
                "維護 Python API 與 GeoData 查詢比對流程。",
                "製作 Location Data 視覺化，包含熱力圖與熱點圖。",
                "處理 Google Maps API、資料爬蟲、資料撈取比對 package，以及廣告監控 Line Notify。",
              ],
            },
          ],
        },
        {
          title: "技能",
          entries: [
            {
              title: "Frontend",
              items: [
                "Angular、Angular Material、NgRx、TypeScript、HTML、CSS、響應式介面實作。",
              ],
            },
            {
              title: "Backend and Data",
              items: [
                "NestJS、Python API、資料模型設計、金流串接、資料視覺化、資料爬蟲流程。",
              ],
            },
            {
              title: "Product Systems",
              items: [
                "文件渲染、模板系統、訂閱流程、後台工具、專案與任務管理系統。",
              ],
            },
          ],
        },
        {
          title: "學歷",
          entries: [
            {
              title: "AI Big Data 大數據資料分析養成班",
              meta: "中壢資策會 · 2020 年 2 月 - 2020 年 7 月",
              items: ["學習大數據分析與 AI 應用基礎。"],
            },
            {
              title: "事業經營學系 學士",
              meta: "國立高雄師範大學 · 2008 - 2012",
              items: ["主修事業經營。"],
            },
          ],
        },
        {
          title: "語言",
          entries: [
            {
              title: "工作語言",
              items: ["中文、英文。"],
            },
          ],
        },
      ],
    },
    sections: {
      projects: {
        eyebrow: "Projects",
        title: "做過與試過的東西",
        description: "一些作品、實驗，以及目前為止探索過的小小建造。",
      },
      studio: {
        eyebrow: "Studio",
        title: "製作過程裡的筆記",
        description: "關於軟體、介面、小系統、實作過程與設計決策的紀錄。",
      },
      writing: {
        eyebrow: "Writing",
        title: "工作室以外的文字",
        description:
          "工作反思、書、電影、音樂、日常生活，以及需要安靜放下來的想法。",
      },
    },
    footer: "為生活而工作。慢慢建造，保持個人。",
    menu: {
      open: "打開導覽",
      close: "關閉導覽",
    },
  },
} satisfies Record<string, unknown>;

export function withLocale(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }

  return `${locales[locale].prefix}${path === "/" ? "/" : path}`;
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}

export function alternatePath(pathname: string, locale: Locale) {
  if (locale === "zh") {
    const withoutPrefix = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
    return withoutPrefix;
  }

  return withLocale(pathname, "zh");
}
