"use strict";
let listEle = document.getElementById('list');
let toggle = document.getElementById('dark_toggle');
let list = [];
function readExampleFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var titles = allText.match(/(?<!#)## \w+/g);
                for (var title of titles) {
                    var subtitles;
                    if (titles.indexOf(title) + 1 == titles.length) {
                        subtitles = allText.split(title)[1].trim().match(/### [A-Za-z ]+/g);
                    }
                    else {
                        var nextTitle = titles[titles.indexOf(title) + 1];
                        subtitles = allText.split(title)[1].trim().split(nextTitle)[0].trim().match(/### [A-Za-z ]+/g);
                    }
                    title = title.split('##')[1].trim();
                    var li = document.createElement('li');
                    li.innerHTML = `<h2>${title}<h2>`;
                    var ul = document.createElement('ul');
                    ul.style.marginLeft = '1em';
                    for (var subtitle of subtitles) {
                        var l = document.createElement('li');
                        subtitle = subtitle.split('###')[1].trim();
                        l.innerHTML = `<a href="template/snippet.html#${subtitle}">${subtitle}</a>`;
                        ul.append(l);
                    }
                    listEle === null || listEle === void 0 ? void 0 : listEle.appendChild(li);
                    listEle === null || listEle === void 0 ? void 0 : listEle.appendChild(ul);
                    listEle === null || listEle === void 0 ? void 0 : listEle.appendChild(document.createElement('br'));
                }
            }
        }
    };
    rawFile.send(null);
}
function toggleDarkMode() {
    if (toggle.innerText == 'wb_sunny' || localStorage.getItem('mode') == 'light') {
        localStorage.setItem("mode", "dark");
        toggle.innerHTML = 'dark_mode';
        document.documentElement.style.setProperty('--bg-color', 'rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--text-color', 'rgb(224, 224, 224)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(65, 63, 63)');
    }
    else {
        localStorage.setItem("mode", "light");
        toggle.innerHTML = 'wb_sunny';
        document.documentElement.style.setProperty('--bg-color', 'rgb(243, 243, 243)');
        document.documentElement.style.setProperty('--text-color', 'rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(243,243,243)');
    }
}
function checkDarkMode() {
    if (localStorage.getItem('mode') == 'dark') {
        localStorage.setItem("mode", "dark");
        toggle.innerHTML = 'dark_mode';
        document.documentElement.style.setProperty('--bg-color', 'rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(65, 63, 63)');
        document.documentElement.style.setProperty('--text-color', 'rgb(255, 255, 255)');
    }
    else {
        localStorage.setItem("mode", "light");
        toggle.innerHTML = 'wb_sunny';
        document.documentElement.style.setProperty('--bg-color', 'rgb(243,243,243)');
        document.documentElement.style.setProperty('--text-color', 'rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color', 'rgb(243,243,243)');
    }
}
readExampleFile(`https://manishdait.github.io/java-by-example/README.md`);
