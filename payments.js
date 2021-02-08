//function that when the page loads it gets the element stored from the plan variable set in the pricing page and then clicks on the select element based on the value of the variable "plan"
window.onload = () => {
  const plan = localStorage.getItem("plan");
  document.getElementById(`select-${plan}`).click();
};

// function that gets the elements of the class 'input-class' and then checks if the input has a required attribute then it checks the length of the value added on each specified input and only displays the enabled download button if it finds a value in the fields.
// runs onchange of the form
function checkform(form) {
  const inputs = form.getElementsByClassName("input-class");

  for (let input of inputs) {
    if (input.hasAttribute("required")) {
      if (input.value.length > 0) {
        $("#on-pricing").css({ display: "block" });
        $("#disabled").css({ display: "none" });
        return;
      } else if (input.value.length === 0) {
        $("#on-pricing").css({ display: "none" });
        $("#disabled").css({ display: "block" });
      }
    }
  }
}
