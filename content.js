var timer = setInterval(hideTweets,5000);
 
 
function hideTweets() {
    var tweets = $( "div [data-you-follow|='false']" );  
    for(var i=0;i<tweets.length;i++){
       if (!tweets[i].hasAttribute("data-retweeter") && !$(tweets[i]).hasClass("descendant") && !$(tweets[i]).hasClass("js-actionable-user") && !$(tweets[i]).hasClass("my-tweet")){
        	$(tweets[i]).css( "display","none");    
        	
        	
        } // end if       
        }  // end for
    } // end hideTweets()
              