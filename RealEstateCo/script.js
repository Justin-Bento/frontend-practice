const appbarLinks = document.querySelector('.appbar-links');
const appbarActions = document.querySelector('.appbar-actions');

if (window.innerWidth < 1024) {
  appbarLinks.style.display = 'none'
  appbarActions.style.display = 'none'
}