const audioV = document.querySelector('.audio-v');
const minutesV = document.getElementById('minutes-v');
const hoursV = document.getElementById('hours-v');
const buttonClickV = document.querySelector('.button-get-time-v');
const mouthV = document.querySelector('.user-head-bottom-middle-v');

const audioL = document.querySelector('.audio-l');
const minutesL = document.getElementById('minutes-l');
const hoursL = document.getElementById('hours-l');
const buttonClickL = document.querySelector('.button-get-time-l');
const mouthL = document.querySelector('.user-head-bottom-middle-l');

const onSetAudioSrcV = (src) => {
	audioV.removeAttribute('src');
	audioV.setAttribute('src', src);
	audioV.setAttribute('autoplay', true);
}

const onSpeakV = (event) => {
	event.preventDefault();
	buttonClickV.setAttribute('disabled', true);

	const hourValueV = hoursV.value; 
	const minutesValueV = minutesV.value;

	mouthV.classList.add('on-speak');

	if (hourValueV < 24 && minutesValueV < 59) {
		onSetAudioSrcV(`./Rebko/${hourValueV}h.wav`);
		setTimeout(() => onSetAudioSrcV(`./Rebko/${minutesValueV}m.wav`), 1500);
		setTimeout(() => {
			mouthV.classList.remove('on-speak');
			buttonClickV.removeAttribute('disabled');
		}, 3000);
	}
};

buttonClickV.addEventListener("click", onSpeakV);

const onSetAudioSrcL = (src) => {
	audioL.removeAttribute('src');
	audioL.setAttribute('src', src);
	audioL.setAttribute('autoplay', true);
}

const onSpeakL = (event) => {
	event.preventDefault();
	buttonClickL.setAttribute('disabled', true);

	const hourValueL = hoursL.value;
	const minutesValueL = minutesL.value;

	mouthL.classList.add('on-speak');

	if (hourValueL < 24 && minutesValueL < 59) {
		onSetAudioSrcL(`./Timoshenko/${hourValueL}h.wav`);
		setTimeout(() => onSetAudioSrcL(`./Timoshenko/${minutesValueL}m.wav`), 1500);
		setTimeout(() => {
			mouthL.classList.remove('on-speak');
			buttonClickL.removeAttribute('disabled');
		}, 3000);
	}
};

buttonClickL.addEventListener("click", onSpeakL);
