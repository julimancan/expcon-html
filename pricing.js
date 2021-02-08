// function that sets the selected plan variable based on what button was pushed in the localStorage to be used in the payments page
const selectPlan = (plan) => {
  localStorage.setItem("plan", plan);
};
