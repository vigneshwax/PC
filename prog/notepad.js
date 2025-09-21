const PGP_PUBLIC_KEY = `
Comment: https://keybase.io/download
ID : Vigneshwax
Version: 1.0

I created the webste to publish and store my HR related documents and blogs.
you can check it out at this website for more details.


📋 HR Skills Progress Checklist

[x] Blogger Website Design 
[x] Attendance Sheet in Excle
[x] HR Automation - Zapier/Make (Integromat)
[x] PC - website Build 
[ ] Interviews Tracker Google Sheet
[ ] Attendance - Power BI 
[ ] Offer Letter Template 
[ ] Offer Letter Automation – Mail Merge (Word + Excel)  
[ ] Interview scheduling, reminders (Automation)
[ ] Power BI HR dashboards
[ ] Recruitment Pipeline Dashboard – Excel/Power BI
`

class NotepadProgram extends Program {
    createWindow(argument) {
        let title = (argument === null) ? 'Notepad' : `Notepad (${argument})`

        let winfo = {
            name: 'Notepad',
            title,
            icon: 'img/desktop/Notepad.png',
            resizable: true,
            margin: false,
            app: true
        }

        // eventually replace with fs driver...
        let doc = ''
        if (argument == 'PGP_Key.txt') {
            doc = PGP_PUBLIC_KEY
            winfo.width = 450
            winfo.height = 300
        }

        let body = `
            <div class="menu-bar__container">
                <div class="menu-bar__menu">
                    <div class="menu-bar__handle"></div>
                    <span class="menu-bar__item">
                        File
                    </span>
                    <span class="menu-bar__item">
                        Edit
                    </span>
                    <span class="menu-bar__item">
                        Search
                    </span>
                    <span class="menu-bar__item">
                        Help
                    </span>
                </div>
            </div>
            <textarea class="notepad__textarea">${doc}</textarea>
        `

        return [winfo, body]
    }
}

window.pm.registerPrototype('notepad', NotepadProgram)
