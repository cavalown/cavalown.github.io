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
      title: "Behind the Scenes",
      description:
        "Fragments of my life, things I love, and ideas that quietly grow over time.",
      intro:
        "Hi, I'm Cavalon. This little corner of the internet is filled with things I've built, thoughts I've written down, and pieces of life I couldn't quite let go of.",
      body: "I'm a cat person—completely and unapologetically. Beyond that, I enjoy books, films, traveling, and replaying songs from the 2000s far more often than I'd like to admit. Some days I'm building AI products, some days I'm learning something new, and sometimes a simple idea is enough to become my next project. To me, every interest is another way of making sense of the world.",
      heading: "Collected",
      outro:
        "This space will continue to grow with projects, stories, photographs, lessons, and little moments worth keeping. Work is part of who I am, but it's never the whole story.",
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
              items: [
                "Focused on big-data analysis and applied AI foundations.",
              ],
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
    footer: "Enjoy lifeSee you somewhere down the road.",
    menu: {
      open: "Open navigation",
      close: "Close navigation",
    },
  },
  zh: {
    siteDescription: "作品、筆記、文字，和一路上慢慢做出來的東西。",
    nav: {
      about: "關於",
      resume: "履歷",
      projects: "作品",
      studio: "工作室",
      writing: "文字",
    },
    hero: {
      title: "為生活。",
      lede: "作品、筆記、文字，和拉哩拉匝的五a某a。",
    },
    about: {
      title: "見與不見的",
      description:
        "一點點的我，一點點的生活，一點點的好奇心，還有一路收藏下來的風景。",
      intro:
        "嗨，我是 Cavalon。這個網站有我的小念頭、小作品、寫下的文字，還有一路上放不掉的種種。",
      body: "我喜歡貓，一百分的喜歡。除了貓咪，我也喜歡閱讀、電影、旅行，還有認真聽著 2000 年的金曲。有時候研究 AI，有時候做點小工具，有時候只是因為一個念頭，就想把它慢慢做成真的。對我來說，每一個興趣，都只是理解世界的另一種方式。",
      heading: "收藏",
      outro:
        "這裡會慢慢收藏我的作品、生活、想法，以及那些讓我駐足片刻的人事物。也許還會有工作、技術、工具、下一個想完成的計畫，但不用急，它們都會在適合的時候，輕輕地出現在這裡。",
    },
    resume: {
      eyebrow: "履歷",
      title: "AI應用與結合的軟體工程師",
      description: "AI應用、前後端產品、文件系統、資料工具與整合服務的經驗。",
      summary:
        "我主要開發面向產品的軟體，重視可維護的介面、內容與文件流程，以及那些讓團隊工作更順的小系統。",
      links: [
        { label: "Email", href: "mailto:cavalown@gmail.com" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/yilinghuang-cavalown/",
        },
        { label: "GitHub", href: "https://github.com/cavalown" },
      ],
      highlights: [
        "熟悉以 Angular、Angular Material、NgRx 建置產品介面。",
        "有 NestJS、Python API、訂閱流程與金流串接等後端服務經驗。",
        "參與過文件模板渲染、後台系統、資料視覺化與內部工具開發。",
      ],
      sections: [
        {
          title: "經歷",
          entries: [
            {
              title: "Software Engineer",
              meta: "TuringText · 2023 年 8 月 - 現在 · 高雄",
              items: [
                "使用 Angular 建置專案與任務管理流程的前端介面。",
                "開發保險產業使用的文件模板與相關呈現流程。",
                "設計訂閱系統資料模型、產品與方案管理流程，並串接啟用服務所需的資料流程。",
                "開發訂閱系統後端、續訂服務，並整合銀行刷卡金流。",
              ],
            },
            {
              title: "Software Engineer",
              meta: "SSMOLab · 2021 年 11 月 - 2023 年 7 月 · 高雄",
              items: [
                "開發文件渲染服務 API 與文件模板產製流程。",
                "實作後台管理介面、API 串接與官網前端頁面。",
                "建立專案程式架構，並驗證表單轉文件流程的可行性。",
              ],
            },
            {
              title: "Data and DevOps Engineer",
              meta: "絡客思行銷科技股份有限公司 · 2021 年 3 月 - 2021 年 9 月 · 台北",
              items: [
                "維護 Python API 與地理資料查詢、比對流程。",
                "製作地點資料視覺化，包含熱力圖與熱點圖。",
                "處理 Google Maps API、資料爬蟲、資料擷取與比對套件，以及 Line Notify 廣告監控通知。",
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
                "Angular、Angular Material、NgRx、TypeScript、HTML、CSS、響應式介面開發。",
              ],
            },
            {
              title: "Backend and Data",
              items: [
                "NestJS、Python API、關聯式資料模型、金流串接、資料視覺化、資料爬蟲流程。",
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
              items: ["學習大數據分析與 AI 應用的基礎。"],
            },
            {
              title: "事業經營學系 學士",
              meta: "國立高雄師範大學 · 2008 - 2012",
              items: ["主修事業經營管理。"],
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
        eyebrow: "作品",
        title: "做過，也試過的東西",
        description: "一些作品、實驗，和目前為止慢慢探索出來的小建造。",
      },
      studio: {
        eyebrow: "工作室",
        title: "製作過程中的筆記",
        description: "關於軟體、介面、小系統、實作過程與設計決策的紀錄。",
      },
      writing: {
        eyebrow: "文字",
        title: "工作室之外的文字",
        description:
          "工作反思、書、電影、音樂、日常生活，以及那些需要安靜放下來的想法。",
      },
    },
    footer: "See you somewhere down the road.",
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
