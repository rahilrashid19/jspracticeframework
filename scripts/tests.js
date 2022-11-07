export default function runTests() {
  console.info("Running tests.");

  function Test(description, func = () => {}) {
    if (!func()) {
      console.error(`Test failed: "${description}" failed.`);
    }
  }

  Test(
    "There should be one button on the screen with content 'button1'",
    () => {
      const buttons = document.getElementsByTagName("button");
      if (buttons.length !== 1) {
        return false;
      }

      const firstButton = buttons[0];
      return firstButton.innerHTML === "button1";
    }
  );

  // Test("There should be 3 p's within the first section", () => {
  //   const sections = document.getElementsByTagName("section");
  //   if (sections === 0) {
  //     return false;
  //   }
  //   const ps = sections[0].getElementsByTagName("p");
  //   return ps.length == 3;
  // });

  console.info("All tests have been run.");
}
