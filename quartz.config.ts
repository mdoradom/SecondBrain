import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🫧 Second Brain",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "secondbrain.mdoradom.com/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto Mono",
        body: "Roboto",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "#f8fafc", // Fondo muy claro para un aspecto fresco
          lightgray: "#e2e8f0", // Gris claro neutro
          gray: "#a0aec0", // Gris intermedio para contraste sutil
          darkgray: "#2d3748", // Gris oscuro para texto o acentos
          dark: "#1a202c", // Fondo oscuro adicional
          secondary: "#3b82f6", // Azul moderno para botones y enlaces
          tertiary: "#38bdf8", // Azul celeste para detalles
          highlight: "rgba(59, 130, 246, 0.1)", // Azul translúcido para destacar
          textHighlight: "#60a5fa88", // Azul claro semitransparente para resaltar texto
        },
        darkMode: {
          light: "#1a202c", // Fondo oscuro para modo nocturno
          lightgray: "#2d3748", // Gris más oscuro para fondo secundario
          gray: "#4a5568", // Gris intermedio para componentes
          darkgray: "#e2e8f0", // Gris claro para texto
          dark: "#edf2f7", // Muy claro para detalles brillantes
          secondary: "#3b82f6", // Azul vivo consistente con el modo claro
          tertiary: "#38bdf8", // Azul celeste suave para contraste
          highlight: "rgba(59, 130, 246, 0.1)", // Azul translúcido para resaltar elementos
          textHighlight: "#3b82f688", // Azul vibrante y suave para texto destacado
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
