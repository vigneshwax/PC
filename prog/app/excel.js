class ExcelRunProgram extends Program {
  getGameURL() {
    // Microsoft Excel Online URL
    return 'https://1drv.ms/x/c/e39dd5e31a6fd17c/EW2eBkrz3sNGmV6ETt1zuvsBluH96S0h0QZ4GBo0zb6zGA?e=bomknr';
  }



  createWindow() {
    // Open Excel Online in a new tab instead of iframe
    window.open(this.getGameURL(), '_blank');

    // Optional: return minimal window info to satisfy the system
    const wminfo = {
      title: this.getGameTitle(),
      name: 'Excel Online',
      icon: 'img/desktop/excel.png',
      resizable: false,
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };

    // Body can be empty because we're opening in a new tab
    return [wminfo, '<div></div>'];
  }

  onAttach() {
    // Nothing to attach in the main app since Excel runs in a new tab
  }
}

window.pm.registerPrototype('Excel', ExcelRunProgram);
