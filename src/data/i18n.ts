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
