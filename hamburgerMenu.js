
const onClickMenu = (menu) => {
  document.getElementById(`menu-${menu}`).classList.toggle(`change-${menu}`);
  document.getElementById(`nav-${menu}`).classList.toggle(`change-${menu}`);
  document.getElementById(`menu-bg-${menu}`).classList.toggle(`change-bg-${menu}`);
  document.getElementById(`bar1-${menu}`).classList.toggle(`change-${menu}`);
  document.getElementById(`bar2-${menu}`).classList.toggle(`change-${menu}`);
  document.getElementById(`bar3-${menu}`).classList.toggle(`change-${menu}`);
  document.getElementById(`nav-title-${menu}`).classList.toggle(`change-nav-title-${menu}`); 
};
