const config = {
  timeStart: 9,
  timeEnd: 20,
  allUrls: ["youtube"],
};

const validateDate = () => {
  let validated = false;
  const hoursNow = new Date().getHours();
  const day = new Date().getDay();

  config.allUrls.forEach((url) => {
    if (
      window.location.href.includes(url) &&
      hoursNow > config.timeStart &&
      hoursNow < config.timeEnd &&
      day !== 0 &&
      day !== 6
    ) {
      validated = true;
    }
  });
  return validated;
};

const interval = setInterval(() => {
  if (validateDate()) {
    window.location.replace("https://www.google.com/");
    clearInterval(interval);
  } else {
    clearInterval(interval);
  }
}, 800);
