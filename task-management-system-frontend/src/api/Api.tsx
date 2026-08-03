import axios from "axios";

// Declare environment variable typing for Vite
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const BASE_URL =
  (import.meta as unknown as ImportMeta).env?.VITE_API_BASE_URL ||
  "http://localhost:8088";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});