const about_button = document.querySelector("#about_button");
const buttons = [about_button];
const page = document.querySelector("#page");
const pages = ["about"];

let page_num = 0;

function ChangePage(num) {
  page_num = num;

  for (let i = 0; i < buttons.length; i++) {
    if (i == page_num) {
      buttons[i].classList.remove("btn_unsel");
      buttons[i].classList.add("btn_sel");
    } else {
      buttons[i].classList.remove("btn_sel");
      buttons[i].classList.add("btn_unsel");
    }
  }

  page.src = "pages/" + pages[page_num] + ".html";
}

ChangePage(0);
