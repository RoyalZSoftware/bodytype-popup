import Swal from 'sweetalert2';

import Config from './config'

export class DialogBuilder {

	bodyTypeHtml() {
		return this.config.bodyTypes.map(bt => `
<div class="rzs-bt-each">
	<img class="rzs-bt-image" src='${this.gender === 'm' ? bt.images.m :bt.images.w}'/><a class="rzs-bt-link" href="${bt.href}">${bt.name}</a>
</div>
`).join('');
	}

	dialogHtml() {
		return `<div class='rzs-bt-container'>
		<p>${Config.paragraphText}</p>
		${this.bodyTypeHtml()}
		</div>`;
	}

	constructor() {
		this.setConfig(Config);
	}

	getConfig() {
		return this.config;
	}

	setGender(gender) {
		this.gender = gender;
		return this;
	}

	setConfig(config) {
		this.config = config;
		return this;
	}

	fire() {
		return Swal.fire({
			title: this.config.heading,
			icon: '',
			html: this.dialogHtml(),
			showCloseButton: true,
			showCancelButton: true,
			focusConfirm: false,
			width: '90vw',
			showCancelButton: false, // There won't be any cancel button
			showConfirmButton: false ,
			allowOutsideClick: false,
			allowEscapeKey: false,
			closeClick: false,
		});
	}
}


export function openDialog(gender, config) {
	const dialogBuilder = new DialogBuilder()
		.setGender(gender);

	if (!!config) {
		dialogBuilder.setConfig(config);
	}
	new DialogBuilder()
		.setGender(gender)
		.fire();
}
