function changeDirection(direction) {
  const contentBox = document.querySelector(".info-box-container");

  contentBox.classList.remove(
    "info-box-center",
    "info-box-left",
    "info-box-right",
    "info-box-top",
    "info-box-bottom"
  );

  contentBox.classList.add(direction);
}
