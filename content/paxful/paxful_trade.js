console.log("Starting pxA3");
var index = 0;

waitUntilElementExistsViaQuerySelectorAll(
	".px-2.form-control.border-transparent.p-0.pt-1.pt-sm-0.regular-24",
	(el) => startPaxfulOptimization()
);

async function startPaxfulOptimization() 
{
	await makeTradeBoxBigger();

	
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
     
     createButton_angryCustomer(index);
}




function createTradeMessagesButton(buttonID, color, messageArray, buttonInnerText) {
	var button = document.createElement("button");
	button.type = "button";
	button.innerText = buttonInnerText;
	button.className = "quick_trade_buttons " + color;
	button.setAttribute("message_index", 0);
	button.id = buttonID;

    
    
    var chatBox = document.querySelector(".flex-grow-1.TradeChat__wrapper");
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
        console.log("messageIndex post",messageIndex);  

		document.getElementById(buttonID).setAttribute("message_index", messageIndex);
	};
}

function makeTradeBoxBigger() {
	return new Promise((resolve) => {
		var chatBoxTextArea = document.querySelector(
			".px-2.form-control.border-transparent.p-0.pt-1.pt-sm-0.regular-24"
		);
		chatBoxTextArea.setAttribute("style", "resize: none; height: 146.667px;");

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
