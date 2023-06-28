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

let code:any = document.getElementById('code');
let title:any = document.getElementById('title');
let subtitle:any = document.getElementById('subtitle');
let next:any = document.getElementById('next');
let copy:any = document.getElementById('copy');
let dark_toggle = document.getElementById('dark_toggle');

let path:string;

path = window.location.href.split('#')[1].replace(/%20/g,' ');

function readTextFile(file:string) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText:any = rawFile.responseText;

                title!.innerHTML = `Java by Example:`;
                subtitle!.innerHTML = path;

                var base = allText.split(`### ${path}`)[1].split('```java')[1].split('```')[1].trim().split('### ')[1];

                var nxt = base != undefined? base.trim(): null;
                
                console.log(nxt);
                

                next!.innerHTML = nxt != null? `Next Example: <a href="snippet.html#${nxt}" onclick="reload('${nxt}')">${nxt}</a>`:"";
                code!.innerHTML = allText.split(`### ${path}`)[1].split('```java')[1].split('```')[0];
                
            }
        }
    }
    rawFile.send(null);
}  

function reload(path:string) {
    window.location.href = `https://manishdait.github.io/java-by-example/template/snippet.html#${path}`;
    refresh();
}
function refresh() {
    window.location.reload();
}


function copyText() {
    navigator.clipboard.writeText(code.innerText);
    copy.innerHTML = 'done'
}

function darkMode() {
    if (localStorage.getItem('mode') == 'dark') {
        localStorage.setItem("mode", "dark");
        dark_toggle!.innerHTML = 'dark_mode'
        document.documentElement.style.setProperty('--bg-color','rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--text-color','rgb(224, 224, 224)');
        document.documentElement.style.setProperty('--primary-color','rgb(65, 63, 63)');
    } else{
        localStorage.setItem("mode", "light");
        dark_toggle!.innerHTML = 'wb_sunny'
        document.documentElement.style.setProperty('--bg-color','rgb(243, 243, 243)');
        document.documentElement.style.setProperty('--text-color','rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color','rgb(243,243,243);')
    }
}

function change_darkMode() {
    if (localStorage.getItem('mode') == 'light') {
        localStorage.setItem("mode", "dark");
        dark_toggle!.innerHTML = 'dark_mode'
        document.documentElement.style.setProperty('--bg-color','rgb(27, 27, 27)');
        document.documentElement.style.setProperty('--text-color','rgb(224, 224, 224)');
        document.documentElement.style.setProperty('--primary-color','rgb(65, 63, 63)')
    } else {
        localStorage.setItem("mode", "light");
        dark_toggle!.innerHTML = 'wb_sunny'
        document.documentElement.style.setProperty('--bg-color','rgb(243, 243, 243)');
        document.documentElement.style.setProperty('--text-color','rgb(7, 7, 7)');
        document.documentElement.style.setProperty('--primary-color','rgb(243,243,243)')
    }
}


readTextFile(`https://manishdait.github.io/java-by-example/README.md`);
