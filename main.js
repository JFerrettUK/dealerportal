/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
function loginWarning() {
  alert('Login and logout features are in development.');
}

function video() {
  alert('Video download features are in development.');
}

function toggle(n) {
  const menus = document.getElementsByClassName('submenu');
  for (let i = 0; i < menus.length; i++) {
    if ((i == (n - 1)) && (menus[i].style.display != 'block')) {
      menus[i].style.display = 'block';
    } else {
      menus[i].style.display = 'none';
    }
  }
}
