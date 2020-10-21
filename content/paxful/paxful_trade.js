console.log("Starting pxA3");
var index = 0;

waitUntilElementExistsViaQuerySelectorAll(
  ".px-2.form-control.border-transparent.p-0.pt-1.pt-sm-0.regular-24",
  (el) => startPaxfulOptimization()
);

async function startPaxfulOptimization() {
  await createButtonDiv();
  await makeTradeBoxBigger();
  createLeaveFeedbackButton();

  //in paxful_trade_buttons.js
  createButton_typeCode(index);
  index++;
  createButton_thankYou(index);
  index++;
  createButton_anyUpdate(index);
  index++;

  createButton_itWorked(index);
  index++;
  createButton_invalidCode(index);
  index++;
  createButton_alreadyRedeemed(index);
  index++;
  createButton_callAmazon(index);
  index++;
  createButton_cancelTrade(index);
  index++;
  createButton_whyCancel(index);
  index++;
  createButton_multipleGiftCards(index);
  index++;
  createButton_sendCardPicture(index);
  index++;

  createButton_sendReceipt(index);
  index++;

  createButton_onlyAcceptPhysicalGiftCards(index);
  index++;

  createButton_onlyPaxful(index);
  index++;

  createButton_wrongRegion(index);
  index++;


  createButton_incorrectValue(index);
  index++;

  createButton_angryCustomer(index);
}

function createButtonDiv() {
  return new Promise((resolve) => {
    var div = document.createElement("div");
    div.id = "button-div";

    //old
    //var chatBox = document.querySelector(".flex-grow-1.TradeChat__wrapper");
    var chatBox = document.querySelector(".flex-grow-1.TradePage__body")

    chatBox.nextElementSibling.append(div);

    resolve();
  });
}

function createTradeMessagesButton(
  buttonID,
  color,
  messageArray,
  buttonInnerText
) {
  var button = document.createElement("button");
  button.type = "button";
  button.innerText = buttonInnerText;
  button.className = "quick_trade_buttons " + color;
  button.setAttribute("message_index", 0);
  button.id = buttonID;

  //var chatBox = document.querySelector(".flex-grow-1.TradeChat__wrapper");
  var chatBox = document.querySelector("#button-div");

  chatBox.append(button);

  //buttons right by each other
  // var chatBox = document.querySelector(".flex-grow-1.TradeChat__body");
  // chatBox = chatBox.nextSibling;;
  // chatBox.insertBefore(button, chatBox.nextElementSibling);

  button.onclick = function () {
    var chatBoxTextArea = document.querySelector(
      ".px-2.form-control.border-transparent.p-0.pt-1.pt-sm-0.regular-24"
    );

    var messageIndex = document
      .getElementById(buttonID)
      .getAttribute("message_index");

    messageIndex = Number(messageIndex);

    writeInChat(messageArray[messageIndex], chatBoxTextArea);

    messageIndex = messageIndex + 1;
    if (messageIndex === messageArray.length) {
      messageIndex = 0;
    }
    console.log("messageIndex post", messageIndex);

    document
      .getElementById(buttonID)
      .setAttribute("message_index", messageIndex);
  };
}

function makeTradeBoxBigger() {
  return new Promise((resolve) => {
    var chatBoxTextArea = document.querySelector(
      ".px-2.form-control.border-transparent.p-0.pt-1.pt-sm-0.regular-24"
    );
    chatBoxTextArea.setAttribute("style", "resize: none; height: 70px;");

    resolve();
  });
}

//Helper Functions
function writeInChat(text, textAreaElement) {
  var input = textAreaElement;
  setTimeout(() => {
    //input.innerHTML = text;
    input.value = text;

    input.dispatchEvent(new Event("input", { bubbles: true }));
    focusOnTextBoxAtEndOfTheLine(textAreaElement);
    makeTradeBoxBigger();
  }, 100);
}

function focusOnTextBoxAtEndOfTheLine(elementToFocusOn) {
  var varCtlLen = elementToFocusOn.value.length;
  // For Most Web Browsers
  if (elementToFocusOn.setSelectionRange) {
    elementToFocusOn.focus();
    elementToFocusOn.setSelectionRange(varCtlLen, varCtlLen);
    // IE8 and below
  } else if (elementToFocusOn.createTextRange) {
    var range = elementToFocusOn.createTextRange();
    range.collapse(true);
    range.moveEnd("character", varCtlLen);
    range.moveStart("character", varCtlLen);
    range.select();
  }
}

function createLeaveFeedbackButton() {
  var leaveFeedbackButton = document.getElementsByClassName(
    "title-container"
  )[0];

  var autoLeaveFeedbackButton = document.createElement("button");
  autoLeaveFeedbackButton.innerText = "Leave Feedback and Send Thanks";
  autoLeaveFeedbackButton.type = "button";
  autoLeaveFeedbackButton["id"] = "leaveFeedback";
  leaveFeedbackButton.append(autoLeaveFeedbackButton);

  autoLeaveFeedbackButton.onclick = function () {
    //insert message into tradebox
    var feedbackMsg =
      "It was a real pleasure trading with you brother. Just like this trade, every time you open a trade with me, the transaction will go smooth and fast. Thanks for your responsiveness and honesty.";
    var successfulTradeMsg =
      "Thank You it worked Brother. Please leave me a good feedback and add me as Trusted. I will do same!  Brother please trade me if you have anymore giftcards, thank you friend.\r\n\r\nIt was a real pleasure trading with you brother. Just like this trade, every time you open a trade with me, the transaction will go smooth and fast. Thanks for your responsiveness and honesty.\r\n\r\n";

    var chatBoxTextArea = document.querySelector(
      ".px-2.form-control.border-transparent.p-0.pt-1.pt-sm-0.regular-24"
    );

    var feedbackMessageBoxArea = document.querySelectorAll(
      '[id="feedback-message"]'
    )[0];

    writeInChat(successfulTradeMsg, chatBoxTextArea);
    setTimeout(() => {
      var submitMessageButton = document.querySelectorAll(
        ".d-flex.align-items-center.btn.btn-primary.btn-md"
      )[0];
      setTimeout(submitMessageButton.click(), 500);
    }, 200);

    setTimeout(() => {
      submitFeedback(feedbackMsg, feedbackMessageBoxArea);
    }, 3000);
  };
}

function submitFeedback(text, textAreaElement) {
  //Credits to this site,
  //https://stackoverflow.com/questions/28118268/i-am-trying-to-send-text-messages-on-whatsapp-with-javascript

  var input = textAreaElement;
  setTimeout(() => {
    //input.innerHTML = text;
    input.value = text;

    input.dispatchEvent(new Event("input", { bubbles: true }));
    focusOnTextBoxAtEndOfTheLine(textAreaElement);
    var submitFeedbackButton = document.querySelectorAll(
      '[id="feedback-submit"]'
    )[0];
    submitFeedbackButton.click();
    setTimeout(submitFeedbackButton.click(), 3000);
    submitFeedbackButton.click();
  }, 100);
}
