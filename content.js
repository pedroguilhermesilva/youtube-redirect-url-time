const config = {
  timeStart: 9,
  timeEnd: 20,
};

const interval = setInterval(() => {
  const url = window.location.href;
  const hoursNow = new Date().getHours();

  if (
    url.includes("youtube.com") &&
    hoursNow > config.timeStart &&
    hoursNow < config.timeEnd
  ) {
    window.location.replace("https://www.google.com/");
    clearInterval(interval);
  } else {
    clearInterval(interval);
  }
}, 800);
