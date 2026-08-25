import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/common";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07191c",
    theme_color: "#07191c",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

