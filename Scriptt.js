function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;

  let output = document.getElementById("output");

  // Write the HTML and CSS to the iframe
  output.contentDocument.body.innerHTML =
    htmlCode + "<style>" + cssCode + "</style>";

  // Remove any previous script tags
  const oldScript = output.contentDocument.querySelector("script");
  if (oldScript) {
    oldScript.remove();
  }

  // Create and append the new script element
  const script = output.contentDocument.createElement("script");
  script.textContent = jsCode;
  output.contentDocument.body.appendChild(script);
}
