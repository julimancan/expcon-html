window.onload = () => {
  const plan = localStorage.getItem("plan");
  console.log(plan);
  document.getElementById(`select-${plan}`).click();
};

function checkform(form) {
  // get all the inputs within the submitted form
  const inputs = form.getElementsByClassName('input-class');

  // inputs.forEach(input => {
    console.log(inputs[0].value.length)

    for (let input of inputs) {
      console.log(input.value)
      if(input.hasAttribute("required")) {
        if (input.value.length > 0) {
          console.log("im here with a long value");
          $("#on-pricing").css({ display: "block" });
          $("#disabled").css({ display: "none" });
          return 
        } else if (input.value.length === 0) {
            $("#on-pricing").css({ display: "none" });
            $("#disabled").css({ display: "block" });
          }
        }
      }
    }
    
