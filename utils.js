export function clickingLabelsWithEnter(labelElements) {
  const clickLabelEvent = (item) => {
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter") item.click();
    });
  };

  labelElements.forEach((item) => clickLabelEvent(item));
}

export function observeElements(sectionElements) {
  const options = { threshold: .3 };

  // Define the callback function for the IntersectionObserver
  const callback = (entries) => {
    entries.forEach((entry) => {
      // console.log("in view")
      if (entry.isIntersecting) {
        // console.log("in view")
        entry.target.classList.add("in-view");
      } 
      else {
        entry.target.classList.remove("in-view");
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  // Use the observer to observe each element in sectionElements
  sectionElements.forEach((element) => {
    observer.observe(element);
  });
}

// export function clickingLabelsWithKeyboard(labelElements) {
//   const clickLabelEvent = (item) => {
//     item.addEventListener("keydown", (e) => {
//       if (e.key === "Enter") item.click();
//     });
//   };

//   labelElements.forEach((item) => clickLabelEvent(item));
// }
