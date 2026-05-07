console.log(window.api)

// Source - https://stackoverflow.com/a/8916697
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
// My code:
window.addEventListener("keydown", function(e) {
    if(["ArrowUp"].indexOf(e.code) > -1) {
        let i = Array.from(document.getElementsByClassName("theme")).findIndex(el => el === document.activeElement);
        if(i >= 0) {
            document.getElementsByClassName("theme")[i - 1].focus();
            i--;
        }
    }
    else if(["ArrowDown"].indexOf(e.code) > -1) {
        let i = Array.from(document.getElementsByClassName("theme")).findIndex(el => el === document.activeElement);
        if(i <= (document.getElementsByClassName("theme").length - 1)) {
            document.getElementsByClassName("theme")[i + 1].focus();
            i++;
        }
    }
})


document.getElementById("th1").addEventListener("click", () => {
    window.api.runCommand('/home/rzaba/Desktop/Programowansko/my-CLIs/Configs/config-dark');
});

document.getElementById("th2").addEventListener("click", () => {
    window.api.runCommand('/home/rzaba/Desktop/Programowansko/my-CLIs/Configs/config-light');
})

document.getElementById("th3").addEventListener("click", () => {
    window.api.runCommand('/home/rzaba/Desktop/Programowansko/my-CLIs/Configs/config-yellow');
})


function changeCSS(styleClass) {
    document.body.className = styleClass
    console.log(document.body.className)
}