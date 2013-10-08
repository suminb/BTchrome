
function translateURL(){
    chrome.tabs.create({url: "http://Better-Translator.com"})
}

translateURL: function(){
    chrome.tabs.create({url: "http://Better-Translator.com"})
}

document.getElementById("submit").onclick=function(){translateURL()};