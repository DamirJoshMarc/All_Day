chrome.extension.onMessage.addListener(function(){
  if (request.action === "prefs") {
    var prefString = localStorage.prefs;
    if (prefString === undefined) {
      sendResponse(undefined);
    } else{
      sendResponse(JSON.parse(localStorage.prefs));
    }
  }
});

// {
//   "name": "All Day",
//   "version": "0.1",
//   "manifest_version":2,
//   "description": "Handy dandy check list!",
//   "icons":  { "16": "images/all_day_icon_16.png",
//               "48": "images/all_day_icon_48.png",
//               "128": "images/all_day_icon_128.png" },
//   "background": {
//     "scripts": ["js/bg.js"]
//   },
//   "permissions": [
//     "background",
//     "storage",
//     "http://*/*",
//     "https://*/*"
//   ],
//   "browser_action": {
//     "default_title": "All Day",
//     "default_icon": "images/all_day_icon_48.png",
//     "default_popup": "popup.html"
//   },
//   "content_scripts":[{
//     "js":["js/jQuery.js","js/bg.js"],
//     "matches":["http://*/*","https://*/*"]
//   }],
//   "options_page":"options.html"
// }