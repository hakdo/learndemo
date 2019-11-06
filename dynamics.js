var modules = {
    'stg-1': {
        title: 'Dorks',
        type: 'movie',
        clickID: 'stg-1',
        url: 'https://www.youtube.com/embed/u_gOnwWEXiA'
    }, 
    'stg-2': {
        title: 'Browser extensions',
        type: 'movie',
        clickID: 'stg-2',
        url: 'https://www.youtube.com/embed/F3tJUNHbwnA'
    },
    'stg-3': {
        title: 'Hackerman Interlude',
        type: 'movie',
        clickID: 'stg-3',
        url: 'https://www.youtube.com/embed/fQGbXmkSArs'
    }
}
var shownotes = false;
var nonactive = function () {
    mitems = document.getElementsByClassName("clickme")
    for (let item of mitems) {
        item.classList.remove("activemenu")
    }
}
var setactive = function (stage) {
    nonactive()
    var mychoice = document.getElementById(stage)
    mychoice.classList.add("activemenu")
}
var stage = function (stageid) {
    setactive(stageid)
    document.getElementById("moviescreen").setAttribute("src", modules[stageid].url)
}
var notepad = function () {
    if (!shownotes) {
        document.getElementById("notepad").classList.remove("hidden")
        shownotes = true;
    } else {
        document.getElementById("notepad").classList.add("hidden")
        shownotes = false;
    }
    console.log("Show the notepad")
}
var addmenu = function () {
    // Generate menu html contents
    var menulist = document.getElementById("mmenu")
    for (item in modules) {
        var listitem = document.createElement("li")
        listitem.classList.add("list-group-item")
        listitem.classList.add("clickme")
        listitem.setAttribute("id", modules[item].clickID)
        var textnode = document.createTextNode(modules[item].title)
        listitem.appendChild(textnode)
        menulist.appendChild(listitem)
    }
    // Add a notepad item
    var listitem = document.createElement("li")
    listitem.classList.add("list-group-item")
    listitem.classList.add("clickme")
    listitem.classList.add("notepad")
    listitem.setAttribute("id", "notebtn")
    var textnode = document.createTextNode("Notepad")
    listitem.appendChild(textnode)
    menulist.appendChild(listitem)
}
// Create event listener for clicks in menu
var menuitems = document.getElementsByClassName("clickme")
addmenu()
for (let miten of menuitems) {
    console.log(miten)
    if (miten.className.includes("notepad")) {
        miten.addEventListener("click", function () {
            notepad()
        })
    } else {
        miten.addEventListener("click", function () {
            console.log(this.getAttribute("id"))
            stage(this.getAttribute("id"))
        })
    }
}
document.getElementById("closenotes").addEventListener("click", function () {notepad()})
setactive("stg-1")
