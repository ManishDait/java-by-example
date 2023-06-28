/*
 * MIT License
 * 
 * Copyright (c) 2023 Manish Dait
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

let listEle = document.getElementById('list');
let toggle = document.getElementById('dark_toggle');

let list:any = [];

function readExampleFile(file:string) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText:any = rawFile.responseText;
                var titles:string[] =  allText.match(/(?<!#)## \w+/g)

                for (var title of titles) {
                    var subtitles:string[]
                    if (titles.indexOf(title) + 1 == titles.length) {
                        subtitles = allText.split(title)[1].trim().match(/### [A-Za-z ]+/g)
                    } else {
                        var nextTitle = titles[titles.indexOf(title) + 1];
                        subtitles = allText.split(title)[1].trim().split(nextTitle)[0].trim().match(/### [A-Za-z ]+/g)
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

                    listEle?.appendChild(li);
                    listEle?.appendChild(ul);
                    listEle?.appendChild(document.createElement('br'));
                }
            }
        }
    }
    rawFile.send(null);
}    

function toggleDarkMode() {
    if (toggle!.innerText == 'wb_sunny' || localStorage.getItem('mode') == 'light') {
        localStorage.setItem("mode", "dark");
        toggle!.innerHTML = 'dark_mode'
        document.documentElement.style.setProperty('--bg-color','rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--text-color','rgb(224, 224, 224)');
        document.documentElement.style.setProperty('--primary-color','rgb(65, 63, 63)');
    } else {
        localStorage.setItem("mode", "light");
        toggle!.innerHTML = 'wb_sunny'
        document.documentElement.style.setProperty('--bg-color','rgb(243, 243, 243)');
        document.documentElement.style.setProperty('--text-color','rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color','rgb(243,243,243)');
        
    }
}

function checkDarkMode() {
    if (localStorage.getItem('mode') == 'dark') {
        localStorage.setItem("mode", "dark");
        toggle!.innerHTML = 'dark_mode'
        document.documentElement.style.setProperty('--bg-color','rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--primary-color','rgb(65, 63, 63)')
        document.documentElement.style.setProperty('--text-color','rgb(255, 255, 255)');
    } else {
        localStorage.setItem("mode", "light");
        toggle!.innerHTML = 'wb_sunny'
        document.documentElement.style.setProperty('--bg-color','rgb(243,243,243)');
        document.documentElement.style.setProperty('--text-color','rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color','rgb(243,243,243)')
    }
}

readExampleFile(`https://manishdait.github.io/java-by-example/README.md`);
