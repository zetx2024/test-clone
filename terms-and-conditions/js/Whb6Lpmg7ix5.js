; (function initTheme() {
  const user = localStorage.getItem('@profile');

  if (user) window.user = JSON.parse(user);
 
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  if (token) document.querySelector('html').classList.add('app')

  var theme = urlParams.get('theme') || localStorage.getItem('theme') || 'light'
  if (theme === 'dark' || window.location.pathname == '/' || window.location.pathname == '/index' || window.location.pathname == '/privacy') {
    document.querySelector('html').classList.add('dark')
  }
})()
