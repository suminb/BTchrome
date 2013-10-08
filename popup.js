
function translateURL(){
    alert("hello");
    chrome.tabs.create({url: "http://Better-Translator.com"})
}


document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.create({url: "http://Better-Translator.com"})

});