class ImageProgram extends Program {
    isMobileBrowser() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    getImageURL() {
        return 'img/Personal/Me.jpg'; // your image path
    }

    getImageTitle() {
        return 'Profile Image';
    }

    createWindow() {
        let body = '';
        let wminfo = {
            title: `Image Viewer - ${this.getImageTitle()}`,
            name:  `Image Viewer (${this.getImageTitle()})`,
            icon:  'img/desktop/Image.png',
            resizable: true
        };

        if (this.isMobileBrowser()) {
            body = `
                <div class="window__dialog">
                    <div class="window__dialog-info">
                        <img src="img/desktop/Image.png"/>
                        <p>
                            Open ${this.getImageTitle().toLowerCase()} in new tab?
                        </p>
                    </div>
                    <div class="window__dialog-action">
                        <button class="image__close">No</button>
                        <a href="${this.getImageURL()}" target="_blank">
                            <button autofocus>Yes</button>
                        </a>
                    </div>
                </div>
            `;
            wminfo.resizable = false;
        } else {
            body = `
                <img class="image__viewer" src="${this.getImageURL()}" style="max-width:100%; max-height:100%; display:block; margin:auto;" />
                <div class="image__toolbar">
                    <a href="${this.getImageURL()}" target="_blank">Open in New Tab</a>
                    <a href="${this.getImageURL()}" download>Download</a>
                </div>
            `;
            wminfo.width = Math.floor(window.innerWidth * 0.6);
            wminfo.height = Math.floor(window.innerHeight * 0.6);
            wminfo.x = 100;
            wminfo.y = 100;
        }

        return [wminfo, body];
    }

    onAttach() {
        this.getBodyHandle().classList.add('window__image');
        if (this.isMobileBrowser()) {
            this.getBodyHandle()
                .querySelector('button.image__close')
                .addEventListener('click', this.closeWindow.bind(this));
        }
    }
}

class CovercationProgram extends ImageProgram {
    getImageURL() {
        return 'img/Personal/Covercation.jpg'
    }

    getImageTitle() {
        return 'Covercation'
    }

}




// Register the program
window.pm.registerPrototype('image', ImageProgram);
window.pm.registerPrototype('Covercation', CovercationProgram);