function createButton_typeCode(index) {
  var pleaseTypeTheCodeMessages = [
    "Hello Brother, please type the AQ Gift Card Claim Code first when you are ready my Brother, thank you.",
    "Please type the code Brother, It makes a lot easier for me, thank you.",
    "Brother please Type the code, it makes it much simpler for me to redeem, thank you my bro",
    "Brother when you are ready , can you please type the code for me, thank you bro",
    "My Brother , please type the AQ Claim code on the back of the card for me. It makes it easy to redeem for me my brother. ",
    "Last Message",
  ];

  var buttonID = "custom-button-" + index;
  var color = "green1";
  var messageArray = pleaseTypeTheCodeMessages;
  var buttonInnerText =
    "#" + index + " - Type the Code Please - (Multi MSG - Click Repeatedly)";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_angryCustomer(index) {
  var helpAngryCustomerMessages = [
    "brother, I am here to help you. I will always be here to help you. Please contact amazon, and let them know that this card was stolen from you, they will surely resolve this! I promise you, I am here for you , because I care about you and want to make sure that we have a long business relationship my dear bro",
    "brother, listen carefully please. I have been in a similar situation before, amazon has the finest customer service in the world. Please pick up the phone and tell them clearly, that my card was stolen from me, and that you want to make a claim and escalate this. Their fraud department will go ahead and retract the giftcard from the scammer, and get it back to you. I am here to help you my brother,  please contact them. So we can get this issue out of the way my brother. ",
    "Brother I am trying to help you, and I will be here until this situation is resolved. Someone else has fraudulently stolen your code from you, and this isn't your fault. These things happen. I will be contacting paxful for internet fraud and will work closely with them to track down the scammer for you my bro! \r\n\r\nPlease, in the meantime, contact amazon and tell them that this card was stolen from you and it is not working. They will make sure that they retract the code from the scammers account and investigate this and release it back to you my brother.  I will be here for you my brother.  Dont worry, we will fix this together. I want to make sure we have a long lasting business relationship my brother,  thats why I am trying so hard to help you. Always I will be on your side my brother. ",
    "Brother are you there? I want to make sure that you come back and trade me my brother.  I am here to help you. Please call amazon and let them know that some one has stolen you code and you need immediate attention. They will definitely retrieve the code from the scammers account and place it back on to your own. I dont want you to lose money my Brother I am here to help you. That is my job, you are my dear customer. I will always help you my brother. ",
    "Brother I am trying my best to help you, Please contact amazon and let them know the situation, that someone has stolen you card. They will retract the code from the account and place it back into yours! I want you to know that you are important friend for me my brother.  Please cancel the trade and come back and trade me when you have a valid and unused code my brother.    ",
    "Last Message",
  ];

  var buttonID = "custom-button-" + index;
  var color = "red0";
  var messageArray = helpAngryCustomerMessages;
  var buttonInnerText = "#" + index + " - Angry Customer";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_itWorked(index) {
  var messageArray = [
    "Thank You it worked Brother. Please leave me a good feedback and add me as Trusted. I will do same!  Brother please trade me if you have anymore giftcards, thank you friend.",
  ];

  var buttonID = "custom-button-" + index;
  var color = "blue";
  var buttonInnerText = "#" + index + " - Thank You it Worked!!";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_invalidCode(index) {
  var messageArray = [
    "Brother the amazon AQ code is invalid, can you please check if you typed the code correctly? If not please send me a valid code Brother ",
  ];

  var buttonID = "custom-button-" + index;
  var color = "red1";
  var buttonInnerText = "#" + index + " - Invalid GC claim Code";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_alreadyRedeemed(index) {
  var messageArray = [
    "Brother the amazon Code Is already redeemed to another account,  do you have a valid and unused code?",
    "Brother Please listen , The Claim-Code shows its already redeemed to another account,  do you have a unused code to trade?",
    "Brother please view the image above, The gift card Code is already redeemed to another account, Please cancel the trade unless you have a valid and un-used code.",

  ];

  var buttonID = "custom-button-" + index;
  var color = "red2";
  var buttonInnerText = "#" + index + " - Redeemed to Another Account";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_callAmazon(index) {
  var callAmazonToFixMessage =
    "Brother please call amazon and tell them this situation,\r\n\r\nToll free: 1-877-586-3230\r\nInternational: 1-206-266-2882 --- charges may apply\r\n\r\nExplain to them that you purchased a giftcard and that it was STOLEN by someone else when you tried to redeem it. They will retract the gift card from the account it was redeemed to and place it back in your account or give you new code to redeem.  Afterwords my brother,  please trade me again my brother. ";

  var messageArray = [callAmazonToFixMessage];

  var buttonID = "custom-button-" + index;
  var color = "orange";
  var buttonInnerText = "#" + index + " - Call Amazon To Fix Issue";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function  createButton_cancelTrade(index) {
  var messageArray = [
    "Brother, come back and trade me when you have a valid and unused code, please cancel trade if you havnt done so, Excited to do business with you my friend!\r\n",
    "Brother, please cancel trade, and trade me when you have a valid and unused code , Hope to do business with you again my brother!\r\n",
    "Brother, please go ahead and cancel this trade, Come and trade me back at any time,  Excited to work with you!\r\n",
    
  ];

  var buttonID = "custom-button-" + index;
  var color = "purple1";
  var buttonInnerText = "#" + index + " - If you want to cancel";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_whyCancel(index) {
  var messageArray = [
    "Brother why did you cancel? Please open the trade again and send me a valid gift card code. I want to work with you my brother and build a long lasting relationship with you my friend",
  ];

  var buttonID = "custom-button-" + index;
  var color = "purple2";
  var buttonInnerText = "#" + index + " - If the buyer cancelled";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_anyUpdate(index) {
  var messageArray = [
    "Any update my brother?",
    "Brother you there? Any update?",
  ];

  var buttonID = "custom-button-" + index;
  var color = "green3";
  var buttonInnerText = "#" + index + " - Any Update Bro?";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_multipleGiftCards(index) {
  var messageArray = [
    "Hey Brother, if you have multiple gift cards, please cancel the trade and open offers for each card, one by one, my brother!",
  ];

  var buttonID = "custom-button-" + index;
  var color = "yellow";
  var buttonInnerText = "#" + index + " - Multiple Gift Cards";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_thankYou(index) {
  var messageArray = [
    "Thank you, my brother",
    "I really appreciate it, my brother",
    "Thanks alot, brother",
  ];

  var buttonID = "custom-button-" + index;
  var color = "green2";
  var buttonInnerText = "#" + index + " - Thank you Message";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_sendCardPicture(index) {
  var messageArray = [
    "Brother please send me a picture of the gift card, thank you bro",
    "My Bro, please send the picture of the gift card, thank you brother",
    "My Brother, I need the picture of the giftcard, please send it brother, thank you",
  ];

  var buttonID = "custom-button-" + index;
  var color = "";
  var buttonInnerText = "#" + index + " - Please Send Me The Card Picture";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_sendReceipt(index) {
  var messageArray = [
    "Brother please send me a picture of the receipt, Thank you.",
    "My Bro I need you to send me a picture of the receipt, Thank you",
  ];

  var buttonID = "custom-button-" + index;
  var color = "";
  var buttonInnerText = "#" + index + " - Send Me Receipt Please";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_onlyAcceptPhysicalGiftCards(index) {
  var messageArray = [
    "Brother, I am sorry but I only accept Physical Giftcards that Start With AQ",
    "Brother, I'm really sorry, I can only use AQ Giftcards, Please cancel the trade and come back when you have a valid and unused code. Thank you my Bro",
  ];

  var buttonID = "custom-button-" + index;
  var color = "";
  var buttonInnerText = "#" + index + " - Only Accept Physical Cards";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}

function createButton_onlyPaxful(index) {
  var messageArray = [
    "Brother, I can only trade on paxful, Thanks alot for all your support",
    "Thank you my bro, but I am always available here if you need me",
  ];

  var buttonID = "custom-button-" + index;
  var color = "";
  var buttonInnerText = "#" + index + " - I only Trade on Paxful";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}


function createButton_wrongRegion(index) {
  var messageArray = [
    "Brother the giftcard Code is for the wrong region, I only accept Canadian giftcard codes, please cancel the trade and trade me when you have a valid canadian GiftCode ",
  "Brother the giftcard Code is for the wrong region, I only accept Canadian giftcard codes, please cancel the trade and trade me when you have a valid canadian GiftCode "
];

  var buttonID = "custom-button-" + index;
  var color = "";
  var buttonInnerText = "#" + index + " - Wrong Region";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}


function createButton_incorrectValue(index) {
  var messageArray = ["Brother the card value is wrong, please cancel the trade, and re open the trade for: "];

  var buttonID = "custom-button-" + index;
  var color = "";
  var buttonInnerText = "#" + index + " - Wrong card Amount";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}



function createButton_custom(index) {
  var messageArray = ["place-holder"];

  var buttonID = "custom-button-" + index;
  var color = "";
  var buttonInnerText = "#" + index + " - place-holder";
  createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText);
}
