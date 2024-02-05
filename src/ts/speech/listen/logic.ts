const utterance = new SpeechSynthesisUtterance();

function speak(messageText: string) {
	utterance.text = messageText;
	utterance.lang = 'ru-Ru';
	window.speechSynthesis.speak(utterance);
	console.log(utterance);
}

function speechListenButtonHandler(event: Event) {
	if (!(event.target instanceof HTMLElement)) {
		return;
	}

	const speechButton = event.target.closest('.voice-play');
	const messageItem = event.target.closest('li');

	if (!speechButton) {
		return;
	}

	const messageText = messageItem?.querySelector('.chat-body-content__text');
	const messageTextValue = messageText?.textContent;

	if (!messageTextValue) {
		throw new Error('Element chat-body-content__text not found');
	}

	speak(messageTextValue);
}

export {speechListenButtonHandler};
