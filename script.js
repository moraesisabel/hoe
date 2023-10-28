function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // take img
  const img = document.querySelector("#profile img")

  // replace img
  if (html.classList.contains("light")) {
    // if light mode, add light img
    img.setAttribute("src", "./assets/avatar_lightmode.png")
  } else {
    // set if no light mode, keep
    img.setAttribute("src", "./assets/avatar.png")
  }
}
