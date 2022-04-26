import wOval from './resources/w-oval.png';
import wRectangle from './resources/w-rechteck.png';
import wSanduhr from './resources/w-sanduhr.png';
import wInvertedTriangle from './resources/w-inverted-triangle.png';
import wTropfen from './resources/w-tropfen.png';

import mOval from './resources/m-oval.png';
import mRectangle from './resources/m-rechteck.png';
import mSanduhr from './resources/m-sanduhr.png';
import mInvertedTriangle from './resources/m-inverted-triangle.png';
import mTropfen from './resources/m-tropfen.png';

export const Config = {
	bodyTypes: [
		{
			name: 'Oval',
			href: {
				w: 'https://google.com',
				m: 'https://google.com',
			},
			images: {
				w: wOval,
				m: mOval
			}
		},
		{
			name: 'Rechteck',
			href: {
				w: 'https://google.com',
				m: 'https://google.com',
			},
			images: {
				w: wRectangle,
				m: mRectangle
			}
		},
		{
			name: 'Sanduhr',
			href: {
				w: 'https://google.com',
				m: 'https://google.com',
			},
			images: {
				w: wSanduhr,
				m: mSanduhr
			}
		},
		{
			name: 'Umgedrehtes Dreieck',
			href: {
				w: 'https://google.com',
				m: 'https://google.com',
			},
			images: {
				w: wInvertedTriangle,
				m: mInvertedTriangle
			}
		},
		{
			name: 'Tropfen',
			href: {
				w: 'https://google.com',
				m: 'https://google.com'
			},
			images: {
				w: wTropfen,
				m: mTropfen
			}
		}
	],
	heading: "Everybody is beautiful!",
	paragraphText: "Um dir Produkte anzuzeigen, die perfekt auf deinen Körper zugeschnitten sind, wähle hier <strong>deinen Bodytype</strong>!",
};

export class ConfigBuilder {
	constructor() {
		this.config = Config;
	}

	setLink(shapeName, hrefMan, hrefWoman) {
		const indexOfShape = this.config.bodyTypes.findIndex(c => c.name.toLowerCase() === shapeName.toLowerCase());
		try {
			this.config.bodyTypes[indexOfShape].href = {
				m: hrefMan,
				w: hrefWoman,
			};
		} catch {
			alert("Dieser Körpertyp existiert nicht. Fehler in backend");
		}
		return this;
	}

	setHeading(heading) {
		this.config.heading = heading;
		return this;
	}

	setParagraphText(paragraphText) {
		this.config.paragraphText = paragraphText;
		return this;
	}

}
