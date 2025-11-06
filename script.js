const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");

let currentPage = 1;

function switchPage() {
  // class manipulation
  if (currentPage === 1) {
    page1.classList.add("slide-left");
    page2.classList.remove("slide-right");
    page2.style.display = "grid";
    setTimeout(() => {
      page1.style.display = "none";
      page2.classList.remove("slide-left");
    }, 500);
    currentPage = 2;
  } else {
    page2.classList.add("slide-right");
    page1.classList.remove("slide-left");
    page1.style.display = "grid";
    setTimeout(() => {
      page2.style.display = "none";
      page1.classList.remove("slide-right");
    }, 500);
    currentPage = 1;
  }
}

nextButton.addEventListener("click", switchPage);
prevButton.addEventListener("click", switchPage);

const darkButton = document.getElementById("dark");
const nightLogo = document.getElementById("nightLogo");

darkButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkButton.textContent = "Light Mode";
    nightLogo.src = "icons/sunrise.gif";
    nightLogo.style.mixBlendMode = "lighten";
  } else {
    darkButton.textContent = "Dark Mode";
    nightLogo.src = "icons/night.gif";
    nightLogo.style.mixBlendMode = "multiply";
  }
});

const newButton = document.getElementsByClassName("new")[0];
console.log(newButton);

function addNewProject() {
  // show pop up of a new form
  newButton.addEventListener("click", () => console.log("New button clicked!"));
  const form = document.createElement("div");
  const formContent = form.textContent("Upload a file");
  form.appendChild(formContent);
}

newButton.addEventListener("click", addNewProject);

console.log("JS file successfuly loaded");
