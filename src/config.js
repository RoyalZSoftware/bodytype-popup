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

export default {
	bodyTypes: [
		{
			name: 'Oval',
			description: 'Ovalförmig',
			href: 'https://google.com',
			images: {
				w: wOval,
				m: mOval 
			}
		},
		{
			name: 'Rechteck',
			description: 'Rechteck',
			href: 'https://google.com',
			images: {
				w: wRectangle,
				m: mRectangle
			}
		},
		{
			name: 'Sanduhr',
			description: 'Sanduhr',
			href: 'https://google.com',
			images: {
				w: wSanduhr,
				m: mSanduhr
			}
		},
		{
			name: 'Umgedrehtes Dreieck',
			description: 'Umgedrehtes Dreieck',
			href: 'https://google.com',
			images: {
				w: wInvertedTriangle,
				m: mInvertedTriangle
			}
		},
		{
			name: 'Tropfen',
			description: 'Tropfen',
			href: 'https://google.com',
			images: {
				w: wTropfen,
				m: mTropfen
			}
		}
	],
	paragraphText: "Um dir Produkte anzuzeigen, die perfekt auf deinen Körper zugeschnitten sind, wähle hier <strong>deinen Bodytype</strong>!",
};
