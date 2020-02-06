//toggle menu
var toggle = document.querySelector('#menu-toggle');
var menu = document.querySelector('#nawigacja-menu');
var dropDownButton = document.querySelector('#drop-down-button');
var dropDownMenu = document.querySelector('#drop-down-menu');
var dropDownList = document.querySelector('#drop-down-list');
var lastLinkDropDown = dropDownMenu.querySelector('li:last-child a');

toggle.addEventListener('click', function() {
    if (menu.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
        toggle.classList.remove('cross-menu');
    } else {
        menu.classList.add('is-active');
        this.setAttribute('aria-expanded', 'true');
        toggle.classList.add('cross-menu');
    }
});
menu.addEventListener('click', function() {
    menu.classList.remove('is-active');
    toggle.classList.remove('cross-menu');
});

function closeDropDown() {
    dropDownButton.classList.remove('is-open');
    dropDownButton.setAttribute('aria-expanded', 'false');
    dropDownMenu.classList.remove('drop-down-active');
}

function openDropDown() {
    dropDownButton.classList.add('is-open');
    dropDownMenu.classList.add('drop-down-active');
    dropDownButton.setAttribute('aria-expanded', 'true');
}

dropDownList.addEventListener('mouseenter', openDropDown);
dropDownList.addEventListener('mouseleave', function() {
    closeDropDown();
    dropDownButton.blur();
});
dropDownList.addEventListener('focusin', openDropDown);
lastLinkDropDown.addEventListener('focusout', closeDropDown);
dropDownMenu.addEventListener('click', closeDropDown);


/*
//Move focus from cliked link to linked section (for IE)
const sections = document.querySelectorAll('[id]');
const sectionIds = [];
const menuLinks = menu.querySelectorAll('a');
const menuLinksArr = [];

for (let i = 0; i < sections.length; i++) {
    sectionIds[i] = sections[i]
}
for (let i = 0; i < menuLinks.length; i++) {
    menuLinksArr[i] = menuLinks[i]
}

function moveFocus(e) {
    let link = e.target.getAttribute('href');
    let elId;
    for (let i = 0; i < sectionIds.length; i++) {
        elId = '#' + sectionIds[i].getAttribute('id');
        if (link == elId) {
            sectionIds[i].querySelector('a:first-of-type').focus();
            e.preventDefault();
        }
    }
}
for (let i = 0; i < menuLinksArr.length; i++) {
    menuLinksArr[i].addEventListener('click', moveFocus);
}*/