"use strict";
let code = document.getElementById('code');
let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let next = document.getElementById('next');
let copy = document.getElementById('copy');
let dark_toggle = document.getElementById('dark_toggle');
let path;
path = window.location.href.split('#')[1].replace(/%20/g, ' ');
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                title.innerHTML = `Java by Example:`;
                subtitle.innerHTML = path;
                var base = allText.split(`### ${path}`)[1].split('```java')[1].split('```')[1].trim().split('### ')[1];
                var nxt = base != undefined ? base.trim() : null;
                console.log(nxt);
                next.innerHTML = nxt != null ? `Next Example: <a href="snippet.html#${nxt}" onclick="reload('${nxt}')">${nxt}</a>` : "";
                code.innerHTML = allText.split(`### ${path}`)[1].split('```java')[1].split('```')[0];
            }
        }
    };
    rawFile.send(null);
}
function reload(path) {
    window.location.href = `http://127.0.0.1:5501/template/snippet.html#${path}`;
    refresh();
}
function refresh() {
    window.location.reload();
}
function copyText() {
    navigator.clipboard.writeText(code.innerText);
    copy.innerHTML = 'done';
}
function darkMode() {
    if (localStorage.getItem('mode') == 'dark') {
        localStorage.setItem("mode", "dark");
        dark_toggle.innerHTML = 'dark_mode';
        document.documentElement.style.setProperty('--bg-color', 'rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--text-color', 'rgb(224, 224, 224)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(65, 63, 63)');
    }
    else {
        localStorage.setItem("mode", "light");
        dark_toggle.innerHTML = 'wb_sunny';
        document.documentElement.style.setProperty('--bg-color', 'rgb(243, 243, 243)');
        document.documentElement.style.setProperty('--text-color', 'rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(243,243,243);');
    }
}
function change_darkMode() {
    if (localStorage.getItem('mode') == 'light') {
        localStorage.setItem("mode", "dark");
        dark_toggle.innerHTML = 'dark_mode';
        document.documentElement.style.setProperty('--bg-color', 'rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--text-color', 'rgb(224, 224, 224)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(65, 63, 63)');
    }
    else {
        localStorage.setItem("mode", "light");
        dark_toggle.innerHTML = 'wb_sunny';
        document.documentElement.style.setProperty('--bg-color', 'rgb(243, 243, 243)');
        document.documentElement.style.setProperty('--text-color', 'rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(243,243,243)');
    }
}
readTextFile(`../README.md`);
