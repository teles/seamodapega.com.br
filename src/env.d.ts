/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_WP_JSON_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
