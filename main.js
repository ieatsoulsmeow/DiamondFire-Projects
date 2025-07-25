/*
Tags are:
Mod
>Automation
>Build Helper
>Chat Settings
>Dev Helper
>Discord Presence
>Fabric
>Forge
>Keybinds
>Library
>Plot Mod
>Quality of Life/QoL
>Scripting

Modpack
>Performance
>Quality of Life/QoL

Website
>Code templates
>Compiler
>Text Styling
>Transpiler
>Wiki

Misc
>Block Based
>Compiler
>Custom Language
>Java
>JavaScript
>Library
>Open Source
>Python
>Rust
>Transpiler
>Web assembly
*/
const projects = {
    "+1 Clickering-nator++": ["Adds helpful features for the plot 42998 / \"+1 clicker\"", ["Mod", "Fabric", "Plot Mod"], "https://www.curseforge.com/minecraft/mc-mods/clicker-game-mod"],
    "Clicker Game mod (unofficial)": ["Adds helpful features for the plot 42998 / \"+1 clicker\"", ["Mod", "Fabric", "Plot Mod"], "https://modrinth.com/mod/clicker-game-mod"],
    "CodeClient": ["A utility client that adds helpful build and dev features", ["Mod", "Fabric", "Build Helper", "Dev Helper", "Wiki", "Quality of Life/QoL", "Keybinds", "Open Source", "Automation"], "https://modrinth.com/mod/codeclient"],
    "DF Revert": ["Allows you to customise rank tags", ["Mod", "Fabric", "Stylisation", "Open Source"], "https://modrinth.com/mod/dfrevert"],
    "DFScript": ["Scripting on the game client based on DiamondFire actions", ["Outdated/Abandoned", "Mod", "Scripting", "Fabric", "Automation", "Open Source"], "https://modrinth.com/mod/dfscript"],
    "DiamondFire Essentials": ["Adds QoL features to help the overall DiamondFire experience", ["Outdated/Abandoned", "Mod", "Fabric", "Build Helper", "Discord Presence", "Keybinds", "Dev Helper", "Quality of Life/QoL", "Chat Settings"], "https://www.curseforge.com/minecraft/mc-mods/diamondfire-essentials"],
    "Firebinds": ["Adds keybinds to run certain DiamondFire commands", ["Mod", "Fabric", "Keybinds", "Outdated/Abandoned", "Open Source"], "https://modrinth.com/mod/df-firebinds"],
    "FireClient": ["Old chat style, helpful commands, and custom plot actions", ["Mod", "Fabric", "Plot Mod", "Python", "Chat Settings", "Open Source"], "https://modrinth.com/mod/fireclient"],
    "Flint": ["Core library for DiamondFire mods", ["Mod", "Fabric", "Library", "Open Source"], "https://modrinth.com/mod/flint"],
    "FruitfulUtilities": ["Adds helpful features for the plot 22467 / \"Melon King\"", ["Outdated/Abandoned", "Mod", "Fabric", "Plot Mod", "Chat Settings", "Quality of Life/QoL", "Open Source"], "https://github.com/KingsMMA/FruitfulUtilities"],
    "GemBlaze": ["Hide unwanted tags & messages, run commands automatically, and helpful tools", ["Outdated/Abandoned", "Mod", "Chat Settings", "Open Source", "Dev Helper", "Build Helper", "Quality of Life/QoL", "Fabric"], "https://modrinth.com/mod/gemblaze"],
    "HyperViewer": ["A way to view code as text similar to Python or Java", ["Outdated/Abandoned", "Mod", "Fabric", "Open Source", "Dev Helper", "Keybinds", "Scripting", "Code Templates", "Custom Language"], "https://modrinth.com/mod/firemod"],
    "ModUtils": ["Adds features to help the Mods/Admins of DiamondFire", ["Mod", "Fabric", "Quality of Life/QoL", "Chat Settings", "Open Source"], "https://modrinth.com/mod/modutils"],
    "MwonMod": ["Adds helpful features for the plot 22467 / \"Melon King\"", ["Mod", "Fabric", "Plot Mod", "Keybinds", "Open Source", "Quality of Life/QoL"], "https://modrinth.com/mod/mwonmod"],
    "NBS Extensions": ["Load Note Block Studio files in DiamondFire", ["Mod", "Fabric", "Dev Helper", "Open Source"], "https://modrinth.com/mod/nbs-extensions"],
    "No Plot Ads": ["Hides ads and boosts from in-game chat", ["Mod", "Fabric", "Chat Settings", "Quality of Life/QoL"], "https://modrinth.com/mod/no-plot-ads"],
    "Pickaxe game": ["Adds helpful features for the plot 50644 / \"Pickaxe Game\"", ["Mod", "Fabric", "Plot Mod", "Keybinds", "Chat Settings", "Open Source"], "https://modrinth.com/mod/pickaxe-mod"],
    "RBTW": ["Adds helpful features for the plot 42575 / \"Riches Beneath the Waves\"", ["Mod", "Fabric", "Plot Mod", "Open Source"], "https://modrinth.com/mod/rbtw"],
    "recode": ["A utility mod to make DiamondFire development more enjoyable", ["Outdated/Abandoned", "Mod", "Fabric", "Code Templates", "Automation", "Keybinds", "Chat Settings", "Quality of Life/QoL"], "https://github.com/homchom/recode"],
    "SupportUtils": ["Various QoL features to help DiamondFire staff members", ["Outdated/Abandoned", "Mod", "Fabric", "Automation", "Quality of Life/QoL", "Keybinds", "Dev Helper"], "https://modrinth.com/mod/supportutils"],
    "Temporium Reforged": ["Adds helpful features for the plot 202003 / \"BCмраст Temporium\"", ["Outdated/Abandoned", "Mod", "Fabric", "Quality of Life/QoL", "Plot Mod"], "https://modrinth.com/mod/temporium-reforged"],
    "WeCode": ["Adds several helpful utilities for development in DiamondFire", ["Mod", "Fabric", "Dev Helper", "Keybinds", "Quality of Life/QoL", "Chat Settings", "Open Source", "Text Styling"], "https://modrinth.com/mod/wecode"]
}

const randomSearchPrompt = [
    "Mod", "Fabric", "Forge", "Automation", "Build Helper", "Chat Settings", "Dev Helper", "Discord Presence", "Keybinds", "Plot Mod", "Quality of Life/QoL", "Scripting", "Stylisation",

    "Modpack", "Performance",

    "Website", "Text Styling", "Wiki", 

    "Misc", "Library", "Open Source",
    
    "Outdated/Abandoned",

    "Compiler/Transpiler", "Block Based", "Code Templates", "Custom Language", "Java", "JavaScript", "Python", "Rust", "Web Assembly/WASM"
]
const tagCategories = ["mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "mod", "modpack", "modpack", "website", "website", "website", "misc", "misc", "misc", "warning", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans", "compTrans"]
let enabledTags = randomSearchPrompt.slice();

document.addEventListener("DOMContentLoaded", (event) => {
console.log("Hello world!");

const body = document.getElementById("body");
body.innerHTML = "";

const searchBar = document.getElementById("searchBar");
searchBar.placeholder = `Try Searching "${randomSearchPrompt[Math.floor(Math.random(0, randomSearchPrompt.length - 1) * 13)]}"`;
searchBar.addEventListener("input", search)

const tagsBar = document.getElementById("tagsBar");
const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("click", (event) => {
    dropdown.classList.toggle("rotate");
    dropdown.classList.toggle("normal");
    if (tagsBar.style.height == "12.3rem") {
        tagsBar.style.height = "1.9rem";
    } else {
        tagsBar.style.height = "13.4rem"
    }
})

const tag = document.createElement("span");
tag.className = "tagButton";
for (let i = 0; i < randomSearchPrompt.length; i++) {
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
        search();
    })
}
/* </span><span class="tagButton">Tag</span> */

const div = document.createElement("div");
div.className = "project";
const img = document.createElement("img");
img.src = "https://placehold.co/250x250";
const title = document.createElement("h1");
const link = document.createElement("a");
link.target = "_blank";
title.appendChild(link);
const tagHolder = document.createElement("span");
const tagSpan = document.createElement("span");
const description = document.createElement("p");
div.appendChild(img);
div.appendChild(title);
div.appendChild(tagHolder)
div.appendChild(description);


for (let i = 0; i < Object.keys(projects).length; i++) {
    key = Object.keys(projects)[i];
    value = Object.values(projects)[i];
    div.setAttribute("tag", `${value[1]}`);
    link.href = value[2];
    tagHolder.innerHTML = "";


    img.src = `assets/images/${key.toLowerCase()}.png`
    link.textContent = key;
    for (let j = 0; j < 3; j++) {
        tagSpan.textContent = value[1][j];
        if (tagSpan.textContent == "Outdated/Abandoned") {
            tagSpan.style.backgroundColor = "#f2c10d";
        } else {
            tagSpan.removeAttribute("style");
        }
        tagHolder.appendChild(tagSpan.cloneNode(true));
    }
    description.textContent = value[0];
    body.appendChild(div.cloneNode(true));
}
})

/*
<div class="project">
    <img src="https://placehold.co/250x250">
    <h1><a href="https://example.com" target="_blank">Title</a></h1>
    <span><span>Tag 1</span><span>Tag 2</span><span>Tag 3</span></span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
</div>
*/

function search() {
    let panels = body.children;
    if (searchBar.value == "") {
        for (let i = 0; i < panels.length; i++) {
            panels[i].style.removeProperty("display");
        }
    } else {
        const search = searchBar.value.split(" ");
        for (let i = 0; i < panels.length; i++) {
            panels[i].style.display = "none";
        }
        for (let i = 0; i < panels.length; i++) {
            let panelSplit = panels[i].children[1].textContent.split(" ");
            let searchTotal = 0;
            for (let j = 0; j < search.length; j++) {
                for (let k = 0; k < panelSplit.length; k++) {
                    if (panelSplit[k].toLowerCase().includes(search[j].toLowerCase())) {
                        searchTotal++;
                    }
                }
            }
            if (searchTotal == search.length) {
                panels[i].style.removeProperty("display");
            }
        }
    }
    filterByTags()
}

function filterByTags() {
    let panels = body.children;
    if (enabledTags.length > 0) {
        for (let i = 0; i < panels.length; i++) {
            if (panels[i].style.display != "none") {
                if (panels[i].hasAttribute("tag")) {
                    let tagsAttribute = panels[i].getAttribute("tag").split(",");
                    let tagTotal = 0;
                    for (let j = 0; j < tagsAttribute.length; j++) {
                        if (enabledTags.includes(tagsAttribute[j])) {
                            tagTotal++;
                        }
                    }
                    if (tagTotal != enabledTags.length) {
                        panels[i].style.display = "none";
                    } else {
                        panels[i].style.removeProperty("display");
                    }
                } else {
                    panels[i].style.display = "none";
                }
            }
        }
    }
}