//recieve message
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse)
{
    //response from content Script
    //sender, information about the tab that sent the msg
    //sendResponse , send response back

    if (response == "findMyMainCompetitor") 
    {
       
        chrome.tabs.create({
            url: "https://paxful.com/buy-bitcoin/amazon-gift-card/CAD",
            active: false
        }, callback);

        
    }



    if (response.indexOf("PaxFul Competition Analysis") !== -1) 
    {
       
                
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {message: response}, function(response) { });
        });
               
        chrome.tabs.executeScript(null,{
            file: "alert.js"
        
        },null)
                
            
         

        
    }




});

function callback(tab){
    


 //Activate the lister when page updated
    chrome.tabs.onUpdated.addListener(paxfulCompetitionScrapeListner);
    

    
}



function paxfulCompetitionScrapeListner(tabId, changeInfo, tab){



    if(tab.status == "complete"){

        //execute the script, then remove the tab
        chrome.tabs.executeScript(tab.id, {file: "content_scrapePaxful.js" } ,  chrome.tabs.remove(tab.id, function() { })); 
        
        /* Now, let's relieve ourselves from our listener duties */
        chrome.tabs.onUpdated.removeListener(paxfulCompetitionScrapeListner);
        return;
    }
    
   

    
}





