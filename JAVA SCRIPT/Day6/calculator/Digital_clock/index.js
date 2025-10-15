const setdateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString({ hourcycle:"h12"});
    console.log(time);
    document.getElementById("date").textContent =`date: ${date}`;
    document.getElementById("time").textContent = `time: ${time}`;
  };
setdateTime();
  setInterval(setdateTime, 1000);