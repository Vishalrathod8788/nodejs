document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");
  const txt = document.querySelector("p");

  btn.addEventListener("click", updateBtn);

  function updateBtn() {
    if (btn.textContent == "Start Engine") {
      btn.textContent = "Stop Engine";
      txt.textContent = "The engine has started";
    } else {
      btn.textContent = "Start Engine";
      txt.textContent = "The engine has stopped";
    }
  }
});
