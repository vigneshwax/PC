class RunProgram extends Program {
    constructor() {
        super();
        this.programs = [
            'notepad', 'paint', 'calculator', 'minesweeper', 
            'solitaire', 'explorer', 'cmd', 'winamp', 
            'internet explorer', 'my computer', 'recycle bin'
        ];
        this.selectedIndex = -1;
        this.currentSuggestions = [];
    }

    createWindow() {
        let winfo = {
            title: 'Run',
            name: 'Run',
            y: window.innerHeight - 180,
            x: 10,
            app: true
        }

        let body = `
            <div class="window__dialog">
                <div class="window__dialog-info">
                    <img src="img/startmenu/Run.png"/>
                    <p>
                        Type the name of a program, folder, document, or Internet <br/>
                        resource and Windows will open it for you.
                    </p>
                </div>
                <div class="menu-bar__menu run__runbar">
                    <span class="menu-bar__label">Open:</span>
                    <div style="position: relative; flex: 1;">
                        <input class="menu-bar__input" autofocus type="text" name="prog" autocomplete="off">
                        <div class="run__suggestions" style="display: none;"></div>
                    </div>
                </div>
                <div class="window__dialog-action">
                    <button class="run__open">OK</button>
                    <button class="run__close">Cancel</button>
                </div>
            </div>
        `

        return [winfo, body]
    }

    getSuggestions(input) {
        if (!input) return [];
        const lower = input.toLowerCase();
        return this.programs.filter(prog => 
            prog.toLowerCase().includes(lower)
        );
    }

    showSuggestions(suggestions) {
        const suggestBox = this.getBodyHandle().querySelector('.run__suggestions');
        
        if (suggestions.length === 0) {
            suggestBox.style.display = 'none';
            return;
        }

        suggestBox.innerHTML = suggestions.map((prog, index) => 
            `<div class="run__suggestion-item" data-index="${index}">${prog}</div>`
        ).join('');
        
        suggestBox.style.display = 'block';
        this.selectedIndex = -1;
    }

    hideSuggestions() {
        const suggestBox = this.getBodyHandle().querySelector('.run__suggestions');
        if (suggestBox) {
            suggestBox.style.display = 'none';
        }
        this.selectedIndex = -1;
    }

    handleInput(e) {
        const input = e.target.value;
        const suggestions = this.getSuggestions(input);
        this.showSuggestions(suggestions);
        this.currentSuggestions = suggestions;
    }

    handleKeyDown(e) {
        const suggestBox = this.getBodyHandle().querySelector('.run__suggestions');
        const items = suggestBox.querySelectorAll('.run__suggestion-item');
        
        if (items.length === 0) return;

        if (e.keyCode === 40) { // Arrow Down
            e.preventDefault();
            this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
            this.highlightSuggestion(items);
        } else if (e.keyCode === 38) { // Arrow Up
            e.preventDefault();
            this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
            this.highlightSuggestion(items);
        } else if (e.keyCode === 9) { // Tab
            e.preventDefault();
            if (this.selectedIndex >= 0) {
                this.selectSuggestion(this.currentSuggestions[this.selectedIndex]);
            } else if (this.currentSuggestions.length > 0) {
                this.selectSuggestion(this.currentSuggestions[0]);
            }
        }
    }

    highlightSuggestion(items) {
        items.forEach((item, index) => {
            item.classList.toggle('selected', index === this.selectedIndex);
        });
    }

    selectSuggestion(prog) {
        const input = this.getBodyHandle().querySelector('input[name="prog"]');
        input.value = prog;
        this.hideSuggestions();
        input.focus();
    }

    launchProgram() {
        let input = this.getBodyHandle().querySelector('input[name="prog"]');
        let prog = input.value.trim();

        // If a suggestion is selected, use it
        if (this.selectedIndex >= 0 && this.currentSuggestions && this.currentSuggestions[this.selectedIndex]) {
            prog = this.currentSuggestions[this.selectedIndex];
        }

        if (prog) {
            try {
                window.pm.createInstance(prog);
                this.closeWindow();
            } catch(e) {
                console.error('Failed to launch program:', prog, e);
                // Optionally show error message
            }
        }
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) { // Enter
            this.launchProgram();
        } else if (e.keyCode === 27) { // Escape
            this.hideSuggestions();
        }
    }

    onAttach() {
        const input = this.getBodyHandle().querySelector('input[name="prog"]');
        const suggestBox = this.getBodyHandle().querySelector('.run__suggestions');
        const openBtn = this.getBodyHandle().querySelector('button.run__open');
        const closeBtn = this.getBodyHandle().querySelector('button.run__close');

        // Button click handlers - CRITICAL
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.launchProgram();
        });

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.closeWindow();
        });

        // Input handlers
        input.addEventListener('input', this.handleInput.bind(this));
        input.addEventListener('keyup', this.handleKeyUp.bind(this));
        input.addEventListener('keydown', this.handleKeyDown.bind(this));

        // Suggestion click
        suggestBox.addEventListener('click', (e) => {
            if (e.target.classList.contains('run__suggestion-item')) {
                const index = parseInt(e.target.dataset.index);
                this.selectSuggestion(this.currentSuggestions[index]);
            }
        });

        // Click outside to close suggestions
        document.addEventListener('click', (e) => {
            if (!this.getBodyHandle().contains(e.target)) {
                this.hideSuggestions();
            }
        });
    }
}

window.pm.registerPrototype('run', RunProgram);
