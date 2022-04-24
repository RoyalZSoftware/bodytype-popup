const why = "Um dir Produkte anzuzeigen, die perfekt auf deinen Körper zugeschnitten sind," +
	"wähle hier <strong>deinen Körpertypen</strong>";

const bodyTypeDefinitions = [
	{
		name: 'triangle',
		description: 'Dreieck',
		imageUrl: 'https://google.com',
		href: 'https://google.com'
	},
	{
		name: 'rectangle',
		description: 'Rechteck',
		imageUrl: 'https://google.com',
		href: 'https://google.com'
	},
	{
		name: 'Fünfeck',
		description: 'Fünfeck',
		imageUrl: 'https://google.com',
		href: 'https://google.com'
	}
];

const bodyTypeHtml = bodyTypeDefinitions.map(bt => `
<div class='rzs-bt-each'>
	<img class="rzs-bt-image" src='${bt.imageUrl}'/>
	<h3 class="rzs-bt-heading">
	${bt.name}
	</h3>
	<p class="rzs-bt-paragraph">
	${bt.description}
	</p>
	<a href='${bt.href}'>${bt.name}</a>
<div>
`);

const dialogHtml = `
<div class='rzs-bt-container'>
${bodyTypeHtml}
</div>
`;

const development = true;

if(!development)
	Swal.fire({
		title: 'Wähle deinen Körpertypen',
		icon: '',
		html: dialogHtml,
		showCloseButton: true,
		showCancelButton: true,
		focusConfirm: false,
	});
