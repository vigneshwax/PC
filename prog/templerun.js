class TempleRunProgram extends Program {
  getGameURL() {
    return 'https://emupedia.net/emupedia-game-temple-run2/';
  }

  getGameTitle() {
    return 'Temple Run 2';
  }

  createWindow() {
    // Single iframe, no "open in new tab" UI
    const body = `
      <iframe
        class="templerun__iframe"
        src="${this.getGameURL()}"
        title="${this.getGameTitle()}"
        loading="eager"
        allow="autoplay; fullscreen; gamepad"
        allowfullscreen
      ></iframe>
    `;

    // Center and size the window nicely; keep resizable
    const targetW = Math.min(1000, Math.floor(window.innerWidth * 0.9));
    const targetH = Math.min(700, Math.floor(window.innerHeight * 0.85));

    const wminfo = {
      title: `Game - ${this.getGameTitle()}`,
      name: `Game (${this.getGameTitle()})`,
      icon: 'img/desktop/temple-run2.png',
      resizable: true,
      width: targetW,
      height: targetH,
      x: Math.floor((window.innerWidth - targetW) / 2),
      y: Math.floor((window.innerHeight - targetH) / 2)
    };

    return [wminfo, body];
  }

  onAttach() {
    const bodyEl = this.getBodyHandle();
    bodyEl.classList.add('window__templerun');
    // Ensure the content area is a positioning context with no gaps
    bodyEl.style.margin = '0';
    bodyEl.style.padding = '0';
    bodyEl.style.position = 'relative';
    bodyEl.style.overflow = 'hidden';
  }
}

window.pm.registerPrototype('templerun', TempleRunProgram);
