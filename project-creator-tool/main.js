let enabledTags = [];
const tagCategories = ["mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "modpack", "modpack", "website", "website", "website", "misc", "misc", "misc", "warning", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans"];

document.addEventListener("DOMContentLoaded", function() {
    

    const name = document.getElementById("nameInput");
    const desc = document.getElementById("descInput");
    const link = document.getElementById("linkInput");

    const exportField = document.getElementById("output");
    const exportButton = document.getElementById("exportButton");
    exportButton.addEventListener("click", function() {
        exportField.value = `"${name.value}": ["${desc.value.replaceAll("\"", "\\\"")}", ["${enabledTags.toString().replaceAll(",", '", "')}"], "${link.value}"]`;

        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = 250;
            canvas.height = 250;

            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                context.drawImage(img, 0, 0, 250, 250);
                const downloadImage = document.createElement("a");
                downloadImage.download = `${name.value.toLowerCase()}.png`;
                downloadImage.href = canvas.toDataURL("image/png");
                downloadImage.click();
            }
        });
        reader.readAsDataURL(document.getElementById("imageInput").files[0]);
    })

    const tagsBar = document.getElementById("bar");
    tags(tagsBar);

    const copy = document.getElementById("copy");
    copy.addEventListener("click", function() {
        for (let i = 0; i < 10; i++) { //Because sometimes it doesn't copy 3:
            navigator.clipboard.writeText(exportField.value);
        }
        alert(`Copied "${exportField.value}" to clipboard!`)
    })

    const clear = document.getElementById("clear");
    clear.addEventListener("click", function() {
        name.value = "";
        desc.value = "";
        link.value = "";
        exportField.value = "";
        document.getElementById("imageInput").value = "";
        tagsBar.innerHTML = "";
        tags(tagsBar);
    })
})

function tags(tagsBar) {
    enabledTags = ["Mod", "Fabric", "Forge", "Automation", "Build Helper", "Chat Settings", "Dev Helper", "Discord Presence", "Keybinds", "Plot Mod", "Quality of Life/QoL", "Scripting", "Stylisation", "Modpack", "Performance", "Website", "Text Styling", "Wiki", "Misc", "Library", "Open Source", "Outdated/Abandoned", "Compiler/Transpiler", "Block Based", "Code Templates", "Custom Language", "Java", "JavaScript", "Python", "Rust", "Web Assembly/WASM"];
    const tag = document.createElement("span");
    tag.style.width = "20%";
    tag.className = "tagButton";
    for (let i = 0; i < 31; i++) {
        tag.textContent = enabledTags[0];
        tag.classList = `tagButton ${tagCategories[i]}`
        enabledTags.splice(0, 1);
        tagsBar.appendChild(tag.cloneNode(true));
        tagsBar.children[tagsBar.children.length - 1].addEventListener("click", (event) => {
            event.target.classList.toggle("enabled");
            if (enabledTags.includes(event.target.textContent)) {
                enabledTags.splice(enabledTags.indexOf(event.target.textContent), 1);
            } else {
                enabledTags.push(event.target.textContent);
            }
        })
    }
}