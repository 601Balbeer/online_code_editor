function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;

  let output = document.getElementById("output");

  // Create a complete template with HTML, CSS, and JS
  const completeCode = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            ${jsCode}
          </script>
        </body>
      </html>
    `;

  // Inject the template into the iframe
  output.srcdoc = completeCode;
}
