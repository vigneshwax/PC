/* ====== SEARCH FUNCTIONALITY - BLOGSPOT INTEGRATION (FIXED) ====== */

// Search functionality - opens Blogspot page in Windows 98 window
function performSearch() {
  const searchTerm = document.getElementById('search-input').value.trim();
  
  if (searchTerm === '') {
    // Show error alert if wm not available
    if (!window.wm) {
      alert('Please enter a search term!');
      return;
    }
    
            window.wm.openWindow(
            'Internet Explorer',
            'img/desktop/website.png',
            `${term.charAt(0).toUpperCase() + term.slice(1)} - Vigneshwaran HR`,
            true,
            100, 50, 800, 600,
            false, false,
            iframeContent
            );
    return;
  }
  
  // Open Blogspot page in Windows 98 window
  openBlogspotPage(searchTerm);
  
  // Clear the search input
  document.getElementById('search-input').value = '';
}

function openBlogspotPage(term) {
  // Check if wm is available
  if (!window.wm) {
    console.error('Window Manager not initialized');
    alert('Window Manager not ready. Please wait a moment and try again.');
    return;
  }
  
  // Convert search term to lowercase and create URL
  const searchTermLower = term.toLowerCase();
  const blogspotURL = `https://vigneshwaranhr.blogspot.com/search?q=${searchTermLower}`;
  
  // Create iframe content
  const iframeContent = `
    <div style="width: 100%; height: 100%; display: flex; flex-direction: column; padding: 0; margin: 0;">
      <div style="padding: 8px; background: #c0c0c0; border-bottom: 2px solid #808080; display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 11px; font-weight: bold;">Address:</span>
        <input 
          type="text" 
          value="${blogspotURL}" 
          readonly
          style="
            flex: 1; 
            padding: 2px 4px; 
            border: none;
            box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
            background-color: #fff;
            font-family: 'Pixelated MS Sans Serif', Arial;
            font-size: 10px;
          ">
        <button 
          onclick="window.open('${blogspotURL}', '_blank')"
          style="
            padding: 4px 12px;
            background: #c0c0c0;
            box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
            border: none;
            cursor: pointer;
            font-family: 'Pixelated MS Sans Serif', Arial;
            font-size: 11px;
          ">
          Open in New Tab
        </button>
      </div>
      <iframe 
        src="${blogspotURL}" 
        style="
          width: 100%; 
          height: calc(100% - 40px); 
          border: none; 
          background: white;
        "
        title="${term}"
      ></iframe>
    </div>
  `;
  
  // Open in Windows 98 window
  try {
    window.wm.openWindow(
      'Internet Explorer',
      'img/desktop/website.png',
      `${term.charAt(0).toUpperCase() + term.slice(1)} - Vigneshwaran HR`,
      true,
      100, 50, 800, 600,
      false, false,
      iframeContent
    );
  } catch (error) {
    console.error('Error opening window:', error);
    // Fallback: open in new tab
    window.open(blogspotURL, '_blank');
  }
}

// Add Enter key support - wait for both DOM and wm to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for wm to initialize
  setTimeout(function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          performSearch();
        }
      });
    }
  }, 500);
});

/* ====== END SEARCH FUNCTIONALITY ====== */
