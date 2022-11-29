const tabLink = document.getElementsByClassName("tab-link")
const tabContent = document.getElementsByClassName("tab-content")

function openTab(tabName){
    for(link of tabLink){
        link.classList.remove("active-link")
    }

    for(tab of tabContent){
        tab.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")
}