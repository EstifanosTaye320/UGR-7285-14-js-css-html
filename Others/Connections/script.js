function handleClick(event) {
  event.preventDefault();
  event.target.style.backgroundColor =
    event.target.style.backgroundColor === "gray" ? "lightgreen" : "gray";
}
