document.addEventListener('DOMContentLoaded', () => {

    if (!document.querySelector('#dropdown-style')) {
      const style = document.createElement('style');
      style.id = 'dropdown-style';
      style.textContent = `
        .profile-wrapper { position: relative; display: inline-block; }
        .profile-pic { cursor: pointer; border-radius: 50%; transition: transform 0.1s ease; }
        .profile-pic:hover { transform: scale(1.05); }
        .dropdown {
          position: absolute; top: 55px; right: 0;
          background: #fff; border: 1px solid #ccc; border-radius: 8px;
          padding: 10px 15px; box-shadow: 0 4px 14px rgba(0,0,0,0.25);
          display: none; min-width: 200px; z-index: 1000;
        }
        .dropdown.open { display: block; animation: fadeIn 0.15s ease; }
        @keyframes fadeIn { from {opacity:0; transform:translateY(-4px);} to {opacity:1; transform:translateY(0);} }
        .dropdown p { margin: 0 0 4px; }
        .dropdown a { display:inline-block; margin-top:8px; color:#1a4f8b; font-weight:bold; text-decoration:none; }
        .dropdown a:hover { text-decoration:underline; }
      `;
      document.head.appendChild(style);
    }
  
    const profilePic = document.querySelector('.profile-pic');
    const dropdown = document.querySelector('.dropdown');
    if (!profilePic || !dropdown) return;
  
    
    function renderDropdown() {
        dropdown.innerHTML = `
          <p><strong>Tregert Gustav Värv</strong></p>
          <p>treks@hotmail.ee</p>
          <p>Logout</p>
        `;
    }
    renderDropdown();
  
    profilePic.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', () => dropdown.classList.remove('open'));
  });