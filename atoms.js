// renders the sidebar
// each page calls renderSidebar('overview' | 'report' | 'configuration')
function renderSidebar(page) {
  const items = [
    { key: "overview", label: "Overview", href: "index.html" },
    { key: "certificate", label: "Certificate", href: "certificate.html" },
    { key: "report", label: "Report", href: "report.html" },
    { key: "configuration", label: "Configuration", href: "configuration.html" },
  ];

  const nav = items
    .map(
      (item) => `
      <a class="sidebar__link${item.key === page ? " active" : ""}" href="${item.href}">
        ${item.label}
      </a>`
    )
    .join("");

  const markup = `
  <div class="sidebar__logo">
    <img src="./assets/atom-icon.png" alt="" width="20" height="20">
    ATOMS
  </div>
  <nav class="sidebar__nav">${nav}</nav>
  `;

  document.querySelectorAll("[data-sidebar]").forEach((el) => {
    el.innerHTML = markup;
  });
}

// Basic dropdown toggle helper used by the "select"-style controls
// (time range picker, sort/filter menus).
function initDropdown(triggerEl, panelEl) {
  if (!triggerEl || !panelEl) return;
  triggerEl.addEventListener("click", (e) => {
    e.stopPropagation();
    panelEl.classList.toggle("is-open");
  });
  document.addEventListener("click", () => panelEl.classList.remove("is-open"));
  panelEl.addEventListener("click", (e) => e.stopPropagation());
}
