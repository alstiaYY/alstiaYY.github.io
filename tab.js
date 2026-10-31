function showTab(tabId, button) {
      document.querySelectorAll('.tab-content').forEach(content => {
        content.hidden = true;
      });
      document.getElementById(tabId).hidden = false;
      document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
      });
      button.classList.add('active');
    }