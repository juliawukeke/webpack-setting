import _ from "lodash";
import "./css/style.css";
import "./css/icon.scss";
import momo from "./img/IMG_3146.JPG";
import rakuya from "./img/bg_blueDeco.svg";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello", "fr", "fr-smile-o");

  // 将图像添加到我们已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = rakuya;
  element.appendChild(myIcon);

  // TODO:背景內的svg待處理
  // element.style.background = `url(${rakuya})`;

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
