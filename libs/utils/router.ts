import { signal } from "@cyftech/signal";

const currentPath = signal(document.location.pathname);
const currentHash = signal(document.location.hash);

window.onhashchange = () => {
  if (currentHash.value !== document.location.hash)
    currentHash.value = document.location.hash;
};
window.onpopstate = () => {
  if (currentPath.value !== document.location.pathname)
    currentPath.value = document.location.pathname;
};

export const router = {
  path: currentPath,
  hash: currentHash,
};
