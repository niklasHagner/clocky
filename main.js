(function() {
  document.addEventListener("DOMContentLoaded", main)
})();



function countUpTimer() {
  const countUpTimerStartButton = document.querySelector("#count-up-timer-start");
  countUpTimerStartButton.addEventListener("click", startcountUpTimer);
  const countUpTimerStopButton = document.querySelector("#count-up-timer-stop");
  countUpTimerStopButton.addEventListener("click", stopcountUpTimer);

  const countUpTimerResetButton = document.querySelector("#count-up-timer-reset");
  countUpTimerResetButton.addEventListener("click", resetcountUpTimer);

  let countUpTimerInterval;
  const MINUTE = 60000, SECOND = 1000;
  function startcountUpTimer() {

    stopcountUpTimer();
    const startDate = new Date();

    countUpTimerInterval = setInterval(() => {
      const d = new Date();
      const msSinceStarted = d.getTime() - startDate.getTime();
      let minutes = Math.floor(msSinceStarted / MINUTE);
      const timeRemaining = msSinceStarted - minutes * MINUTE;
      if (isNaN(minutes)) {
        minutes = "";
      } else {
        minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
      }
      let secs = Math.floor(timeRemaining / SECOND);
      if (isNaN(secs)) {
        secs = "";
      } else {
        secs = secs.toString().length === 1 ? `0${secs}` : secs;
      }

      document.querySelector("#count-up-timer-clock").innerHTML = `${minutes}:${secs}`;
    }, 10);
  }

  function stopcountUpTimer() {
    if (countUpTimerInterval)
      clearInterval(countUpTimerInterval);
  }

  function resetcountUpTimer() {
    if (countUpTimerInterval)
      clearInterval(countUpTimerInterval);
      document.querySelector("#count-up-timer-clock").innerHTML = `00:00`;
  }  
}

function main(){

  loadBackground();

  document.querySelector("#time").classList.remove("transparent");

  const darkModeButton = document.querySelector("#dark-mode");
  darkModeButton.addEventListener("click", ()=> {
      document.body.classList.toggle("dark-mode"); 
      if (document.body.classList.contains("dark-mode")) {
          this.innerText = "Light mode";
      } else {
          this.innerText = "Dark mode";
      }
  });


  const monospaceButton = document.querySelector("#geek-mode");
  monospaceButton.addEventListener("click", ()=> {
      document.body.classList.toggle("geek-mode"); 
      if (document.body.classList.contains("geek-mode")) {
          this.innerText = "Normal mode";
      } else {
          this.innerText = "Geek mode";
      }
  });

  const animationMode = document.querySelector("#animation-mode");
  animationMode.addEventListener("click", ()=> {
      document.body.classList.toggle("animation-mode");
      if (document.body.classList.contains("animation-mode")) {
          this.innerText = "No animation";
          window.animateColors = true;
      } else {
          this.innerText = "Animation";
          window.animateColors = false;
      }
  });

              
  var colors = [
      'tomato',
      'steelblue',
      'lightsteelblue',
      'gold',
      'coral',
      'darksalmon',
      'lightgreen',
      'steelblue',
      'teal',
      '#eee',
      '#ff7900',
      'pink',
      'orange',
      'palevioletred',
      'mediumspringgreen',
      'bisque',
      'dodgerblue',
      'gold',
      'powderblue',
      'deepskyblue',
      'mediumseagreen',
      'lightblue',
      'papayawhip',
      'lightcoral',
      'chocolate',
      '#e6e8fa',
      'lightgreen'
  ];
  
  function randomizeColor() {
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      return random_color;
  };

  function startClock() {
    let counter = 0;
    setInterval(() => {
        const d = new Date();
        let minutes = d.getMinutes();
        minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;  
        let hours = d.getHours();
        hours = hours.toString().length === 1 ? `0${hours}` : hours;
        let secs = d.getSeconds();
        secs = secs.toString().length === 1 ? `0${secs}` : secs;
        document.querySelector("#mins").innerHTML = `${hours}:${minutes} `;
        document.querySelector("#seconds").innerText = `${secs}`;
        counter++;

        if (window.animateColors && counter % 10 === 0) {
            document.body.style.color = randomizeColor();
        }
    }, 1000);
  }


  const tabs = [...document.querySelectorAll(".tab")];
  tabs.forEach((tab) => tab.addEventListener("click", switchTab ));
  const contentTabs = [...document.querySelectorAll(".content-tab")];

  function switchTab(event) {
      const selectedTab = event.target;
      //Hide all tabs and content-tabs
      tabs.forEach((tab) => tab.classList.remove("tab--active") );
      contentTabs.forEach((tab) => tab.classList.add("hidden") );

      //Show and activate the selected tab
      selectedTab.classList.add("tab--active");
      const contentTabSelector = selectedTab.getAttribute("data-content-tab-selector");
      document.querySelector(contentTabSelector).classList.remove("hidden");
  }

  
  startClock();
  countUpTimer();
}

const backgrounds = [
  "https://d36zo2s4q1lc88.cloudfront.net/wp-content/uploads/2018/09/04165023/Cinemagrafia-07152450759127.gif",
  "https://static1.squarespace.com/static/54179d62e4b0af003a219a13/t/54d0063ee4b09e9b60be52d7/1422919242718/?format=1500w",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/69c68948544239.589b008f88c52.gif",
  "http://33.media.tumblr.com/afac108142d65c50dd38ba0ddd620a3a/tumblr_n4bkuotBOs1r13qeyo1_500.gif",
  "https://1stwebdesigner.com/wp-content/uploads/2017/02/cinemagraph.gif",
  "https://38.media.tumblr.com/da48df1cf0a3151a7c526c8db953ad38/tumblr_ng88k4nD8U1tv1qiho1_1280.gif",
  "http://gifzign.com/wp-content/uploads/2017/07/DRINK-CINEMAGRAPH-OHM.gif",
  "https://www.quickformationsblog.com/wp-content/uploads/2016/09/MTI5MDI1Nzk3MzE4MTExMjAy.gif",
  "https://i2.wp.com/mossandfog.com/wp-content/uploads/2017/05/w6woaqu9g21smmjyb1rw.gif?fit=640%2C360&ssl=1",
  "https://petapixel.com/assets/uploads/2014/09/cGHgU1s.gif",
  "https://i.pinimg.com/originals/cb/c5/ce/cbc5ce68b78e9d537b477d79cde2033a.gif",
  "http://annstreetstudio.com/wp-content/uploads/2018/02/meteor-shower-monument-valley.gif",
  "https://i.kym-cdn.com/photos/images/newsfeed/000/137/450/tumblr_lmy72dhU8s1qzcq51o1_500.gif?1308592294",
  "https://media1.giphy.com/media/xT0xeK2kHV7n4qVGEg/giphy.gif",
  "https://raventools.com/blog/wp-content/uploads/2013/04/cab-window-429.gif",
  "https://i.pinimg.com/originals/6c/6c/aa/6c6caa58c39088561b7d2cd0115c58a0.gif",
  "http://gifzign.com/wp-content/uploads/2017/07/Armani-Coffee-615.gif",
  "http://gifzign.com/wp-content/uploads/2017/07/60s9801.gif",
  "https://assets.econsultancy.com/images/resized/0006/3909/chopard-marketing-cinemagraph-blog-flyer.png"
];
function loadBackground() {
  const url = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = `url(${url})`;
}