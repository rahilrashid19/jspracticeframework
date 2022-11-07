import * as F from "./framework.js";

export default function startApp(parentTagName = "body") {
  const parent = document.getElementsByTagName(parentTagName)[0];
  let button = F.createElement("button", "button1");
  parent.appendChild(button);
}
