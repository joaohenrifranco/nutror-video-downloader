(async () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  console.log("Opening all urls");
  // Open all modules
  modules = Array.from(document.getElementsByClassName("module-timeline-title"))

  for (let i = 0; i < modules.length; i++) {
    modules[i].click();
    console.log("Opened " + modules[i].innerText);
    console.log(`${i}/${modules.length}`)
    await sleep(300);
  }
  console.log("Opened all modules");

  // Click on each item waiting page to load
  elements = Array.from(
    document.getElementsByClassName("module-timeline-lesson-title")
  );

  for (let i = 0; i < elements.length; i++) {
    elements[i].click();
    console.log("Clicked on " + elements[i].innerText);
    console.log(`${i}/${elements.length}`)
    // get loaded m3u url
    

    await sleep(4000);
  }
})();
