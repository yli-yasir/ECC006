
onload = () => {
    const alert = document.querySelector(".js-alert");
    console.log(alert)

  setTimeout(() => {
    alert.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    alert.style.opacity = 0;
  }, 5000);
};
