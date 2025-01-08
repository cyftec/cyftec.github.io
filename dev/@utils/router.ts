import { signal } from "@cyftech/signal";

const currentPath = signal(document.location.pathname);
const currentHash = signal(document.location.hash);

window.onhashchange = () => (currentHash.value = document.location.hash);
window.onpopstate = () => (currentPath.value = document.location.pathname);

export const router = {
  path: currentPath,
  hash: currentHash,
};
