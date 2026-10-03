function clicked(htmlElement) {
  const bg = htmlElement.style.backgroundColor;
  if (bg === "lightblue") {
    htmlElement.style.backgroundColor = "lightgreen";
    return;
  }
  htmlElement.style.backgroundColor = "lightblue";
}
