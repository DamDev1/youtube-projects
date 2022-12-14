const tab_list = document.getElementsByClassName("tab-list");
const tab_content = document.getElementsByClassName("tab-content")

function openTabOne(tabNameOne){
    for(link of tab_list){
        link.classList.remove("active")
    }

    for(tab of tab_content){
        tab.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active")
    document.getElementById(tabNameOne).classList.add("active-tab")
};

const tab_listTwo = document.getElementsByClassName("tab-listTwo");
const tab_content_two = document.getElementsByClassName("tab_content_two")

function openTabTwo(tabNameTwo){
    for(link of tab_listTwo){
        link.classList.remove("activeTwo")
    }

    for(tab of tab_content_two){
        tab.classList.remove("activeBarTwo")
    }

    event.currentTarget.classList.add("activeTwo")
    document.getElementById(tabNameTwo).classList.add("activeBarTwo")
}

