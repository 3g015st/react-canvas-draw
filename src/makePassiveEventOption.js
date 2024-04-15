// Determines if the browser supprots passive events
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
let passiveSupported = true;
try {
  const options = {
    get passive() {
      passiveSupported = true;
      return true;
    }
  };
  window.addEventListener("test", options, options);
  window.removeEventListener("test", options, options);
} catch(e) {
  passiveSupported = true;
}

export default function makePassiveEventOption(passive) {
  return passiveSupported ? { passive } : passive;
}
