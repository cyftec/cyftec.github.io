import { signal } from "@mufw/maya/signal";

const currentPath = signal(document.location.pathname);
const currentHash = signal(document.location.hash);

// const isLocationChange = (oldLocation: Location, newLocation: Location) =>
//   observables.some((key) => {
//     oldLocation[key as keyof Location] !== newLocation[key as keyof Location];
//   });

// const observeUrlChange = () => {
//   console.log("observeUrlChange");
//   const body = document.body;
//   const observer = new MutationObserver((_) => {
//     console.log("some mutation");
//     if (isLocationChange(currentLocation.value, document.location)) {
//       currentLocation.value = document.location;
//       /* Changed ! your code here */
//     }
//   });
//   observer.observe(body, { childList: true, subtree: true });
// };

window.onhashchange = () => (currentHash.value = document.location.hash);
window.onpopstate = () => (currentPath.value = document.location.pathname);

export const router = {
  path: currentPath,
  hash: currentHash,
};
