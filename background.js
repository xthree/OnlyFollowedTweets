let tabUpdateHandler = (tabId, changeInfo, tab) => {
	var updatedUrl = tab.url;
    chrome.tabs.sendMessage(tabId, {args: ""});   
}



chrome.tabs.onUpdated.addListener(tabUpdateHandler);

