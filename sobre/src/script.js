M.Sidenav.init(document.querySelectorAll('.sidenav'));
M.Materialbox.init(document.querySelectorAll('.materialboxed'));

if (innerWidth >= 1024)
  document.querySelector('#card').className = 'card horizontal'