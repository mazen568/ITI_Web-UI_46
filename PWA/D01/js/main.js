if ("serviceWorker" in navigator) {
    console.log("service worker mowgod");
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js")
        .then((regestration) => {
          console.log("service worker registered", regestration);
        })
        .catch((err) => {
          console.log("failed", err);
        });
    });
  }

  let promptEvent;
  const installBtn = document.getElementById("btn");
  
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    promptEvent = event;
    installBtn.addEventListener("click", () => {
      promptEvent.prompt();
    });
  });
  