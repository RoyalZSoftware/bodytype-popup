import Swal from 'sweetalert2';

import Config from './config'

class DialogBuilder {

	bodyTypeHtml() {
		return this.bodyTypes.map(bt => `
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
	setGender(gender) {
		this.gender = gender;
		return this;
	}

	setSelectOptions(bodyTypes) {
		this.bodyTypes = bodyTypes;
		return this;
	}

	fire() {
		return Swal.fire({
			title: 'Everybody is beautiful',
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


export function openDialog(gender) {
	new DialogBuilder()
		.setGender(gender)
		.setSelectOptions(Config.bodyTypes)
		.fire();
}
