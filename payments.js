window.onload = () => {
  const plan = localStorage.getItem("plan");
  console.log(plan);
  document.getElementById(`select-${plan}`).click();
};
