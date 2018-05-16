

function hideTweets() 
{
	
    var tweets = $( "div [data-you-follow|='false']" );    //Gets all tweets from people you don't follow
    for(var i=0;i<tweets.length;i++)
    {
       if (!tweets[i].hasAttribute("data-retweeter") && !$(tweets[i]).hasClass("descendant") //Checks that it is not a retweet, not a reply to a clicked tweet,
       	&& !$(tweets[i]).hasClass("js-actionable-user") && !$(tweets[i]).hasClass("my-tweet")) //does not have js-actionable-user class (found via trial and error), 
       {                                                                                      //and is not my own tweet
        $(tweets[i]).css( "display","none");        
        if ($(tweets[i]).hasClass("conversation-root")) //If the tweet is part of a conversation, the reply to the conversation must be hidden also
        	{
            $(tweets[i]).parent().next().css("display","none"); //Hides reply to conversation
             
        	} //end conversation if
        }// end main if 
    } // end for loop
}//end hideTweets()


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse(setInterval(hideTweets,2000));
});