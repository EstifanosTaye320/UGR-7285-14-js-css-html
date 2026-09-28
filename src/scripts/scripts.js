class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="grid-container grid two-to-one white-text black-background">
        <hgroup class="grid-container grid hgroup closer">
          <h1 class="closer">
            <img
              src="./image/E-icon.jpg"
              alt="E-Logo"
              class="sizerated-logo logo"
            />
          </h1>
          <p>Estifanos Taye</p>
        </hgroup>

        <div class="grid-container grid nav-container">
          <ul class="grid-container grid main-nav">
            <li><a href="./home.html">Home</a></li>
            <li><a href="./profile.html">Profile</a></li>
            <li><a href="./portfolio.html">Portfolio</a></li>
            <li><a href="./scrap_book.html">Scrap Book</a></li>
            <li><a href="./contact.html">Contact</a></li>
          </ul>
        </div>
      </header>
  `;
  }
}
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer
        class="grid-container grid respond-large white-text black-background"
      >
        <section class="grid-container grid">
          <h2>Contact me</h2>
          <nav class="grid-container grid some-sites">
            <a href="https://t.me/Elgeneral1"
              ><img
                src="./image/telegram.png"
                alt="telegram"
                class="Normal-logo logo"
            /></a>
            <a
              href="https://www.linkedin.com/in/estifanos-taye-24b917288?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bks55i7scS5yjGwT8NOViUQ%3D%3D"
              ><img
                src="./image/linkedin.png"
                alt="linkedin"
                class="Normal-logo logo"
            /></a>
            <a href="https://www.lemlemschool.com/"
              ><img
                src="./image/lemlem.jpg"
                alt="lemlem"
                class="Normal-logo logo"
            /></a>
            <a href="https://github.com/EstifanosTaye320"
              ><img
                src="./image/github.png"
                alt="GitHub"
                class="Normal-logo logo"
            /></a>
            <a
              href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1304515570725595342"
              ><img src="./image/figma.jpg" alt="figma" class="Normal-logo logo"
            /></a>
            <a href="https://discord.com/channels/@me"
              ><img
                src="./image/discord.jpg"
                alt="discord"
                class="Normal-logo logo"
            /></a>
          </nav>
        </section>

        <section class="grid-container grid">
          <h2>About me</h2>
          <p class="text-item">
            My name is Estifanos Taye am a 3rd year Software student at AAiT of
            Addis Abeba University.
          </p>
          <p class="text-item">
            My hobbies include solving problems on programming sites like
            leetcode, hackerrank, and codeforces....
          </p>
          <a href="./profile.html">Show More >></a>
        </section>

        <section class="grid-container grid image-cluster">
          <h2>My information</h2>
          <img
            src="./image/image-icon.png"
            alt="Profile picture"
            class="profile-picture"
          />
          <ul>
            <li>
              Email:
              <a href="mailto:estifanostaye11@gmail.com"
                >estifanostaye11@gmail.com</a
              >
            </li>
            <li>Phone Number: 0925353945</li>
            <li>ID Number: UGR/7285/14</li>
          </ul>
        </section>
      </footer>
    `;
  }
}
class mySelection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section>
        <h2 class="center-title closer">Means of selection</h2>
        <ul
          class="grid-container grid put-center radio-buttons radio-buttons-padding"
          oninput="meansOfSelection(); sorting()"
        >
          <li><label><input type="radio" name="select" value="Games" />Games</label></li>
          <li><label><input type="radio" name="select" value="Math" />Math</label></li>
          <li><label><input type="radio" name="select" value="Physics" />Physics</label></li>
          <li><label><input type="radio" name="select" value="Time" />Time</label></li>
          <li>
            <label><input type="radio" name="select" value="Other" />Other</label>
          </li>
          <li><label><input type="radio" name="select" value="All" checked />All</label></li>
        </ul>
        
      </section>
    `;
  }
}
function sorting() {
  const workspace = document.getElementById("listing-area");
  const sortPara = document.querySelector("input[name='sort']:checked");
  if (sortPara) {
    let allElements, i, switching, shouldSwitch, sortBy;
    switching = true;
    while (switching) {
      switching = false;
      allElements = workspace.getElementsByClassName("all");
      switch (sortPara.value) {
        case "name":
          sortBy = workspace.getElementsByClassName("titleness");
          console.log(sortBy);
          break;
        case "favorite":
          sortBy = workspace.getElementsByClassName("favoriteness");
          console.log(sortBy);
          break;
        case "time":
          sortBy = workspace.getElementsByClassName("dateness");
          console.log(sortBy);
      }
      for (i = 0; i < sortBy.length - 1; i++) {
        shouldSwitch = false;
        if (
          sortBy[i].innerHTML.toLowerCase() >
          sortBy[i + 1].innerHTML.toLowerCase()
        ) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        allElements[i].parentNode.insertBefore(
          allElements[i + 1],
          allElements[i]
        );
        switching = true;
      }
    }
  }
}
function meansOfSelection() {
  const workspace = document.getElementById("listing-area");
  const selectPara = document.querySelector("input[name='select']:checked");
  const allElements = workspace.getElementsByClassName("all");
  const selection = (sortBy) => {
    for (ele of allElements) {
      ele.style.display = "none";
    }
    console.log(sortBy.length);
    console.log(sortBy.length === 0);
    if (sortBy.length === 0) {
      document.getElementById("message").style.display = "block";
    } else {
      for (item of sortBy) {
        document.getElementById("message").style.display = "none";
        item.style.display = "grid";
      }
    }
  };
  switch (selectPara.value) {
    case "Games":
      const games = workspace.getElementsByClassName("game");
      selection(games);
      break;
    case "Math":
      const maths = workspace.getElementsByClassName("math");
      selection(maths);
      break;
    case "Physics":
      const physics = workspace.getElementsByClassName("physics");
      selection(physics);
      break;
    case "Time":
      const times = workspace.getElementsByClassName("time");
      selection(times);
      break;
    case "Other":
      const others = workspace.getElementsByClassName("other");
      selection(others);
      break;
    case "All":
      selection(allElements);
      break;
  }
}
customElements.define("my-header", myHeader);
customElements.define("my-footer", myFooter);
customElements.define("my-selection", mySelection);
