import Image from 'next/image';
import '../styles/css/article.css';

export function getContent(cont: any, i: number) {
	let retVal = null;
	if (cont.type === 'paragraph' && cont.content) {
		return <p key={i} className='articleParagraph' dangerouslySetInnerHTML={{ __html: getContentText(cont) }}></p>;
	} else if (cont.type === 'bulletList' && cont.content) {
		return <ul key={i} className='articleUList' dangerouslySetInnerHTML={{ __html: getListContent(cont) }}></ul>;
	} else if (cont.type === 'heading' && cont.content) {
		return <h2 key={i} className='articleSubTitle' dangerouslySetInnerHTML={{ __html: getContentText(cont) }}></h2>;
	} else if (cont.type === 'horizontalRule') {
		return <hr key={i} />;
	} else if (cont.type === 'blockquote' && cont.content) {
		return <p key={i} className='blockQuote' dangerouslySetInnerHTML={{ __html: getContentText(cont) }}></p>;
	} else if (cont.type === 'image' && cont.attrs) {
		return (
			<figure className='articleImageContainer' key={i}>
				<Image
					src={cont.attrs.src}
					width={2}
					height={1}
					layout='responsive'
					objectFit='cover'
					alt={cont.attrs.alt}></Image>
				<figcaption className='articleImageCaption'>
					<p>{cont.attrs.title}</p>
				</figcaption>
			</figure>
		);
	}

	return retVal;
}

const getContentText = (cont: any) => {
	let ctext = '';
	cont.content.map((innerCont: any) => {
		//TODO: általánosítás
		if (innerCont.type === 'text') {
			if (innerCont.marks) {
				const props = getProperties(innerCont.marks);
				if (props.href) {
					ctext += `<a href="${props.href}" class="${props.classes.join(' ')}" target="_blank"> ${innerCont.text}</a>`;
				} else {
					ctext += `<span class="${props.classes.join(' ')}"> ${innerCont.text}</span>`;
				}
			} else {
				ctext += innerCont.text;
			}
		} else if (innerCont.content) {
			ctext += getContentText(innerCont);
		}
	});
	return ctext;
};

const getListContent = (cont: any) => {
	let ctext = '';
	cont.content.map((innerCont: any) => {
		if (innerCont.content) {
			ctext += `<li>${getInnerContent(innerCont)}</li>`;
		}
	});
	return ctext;
};

const getInnerContent = (cont: any) => {
	let itemText = '';
	cont.content.map((innerCont: any) => {
		if (innerCont.type === 'text') {
			if (innerCont.marks) {
				const props = getProperties(innerCont.marks);
				if (props.href) {
					itemText += `<a href="${props.href}" class="${props.classes.join(' ')}" target="_blank"> ${
						innerCont.text
					}</a>`;
				} else {
					itemText += `<span class="${props.classes.join(' ')}"> ${innerCont.text}</span>`;
				}
			} else {
				itemText += innerCont.text;
			}
		} else if (innerCont.content) {
			itemText += getInnerContent(innerCont);
		}
	});
	return itemText;
};

interface Props {
	href?: string;
	classes?: string[];
}

const getProperties = (marks: any): any => {
	let props: Props = {};
	let classes: string[] = [];
	marks.map((mark: any) => {
		classes.push(mark.type);
		if (mark.type === 'link') {
			props.href = mark.attrs.href;
		}
	});
	props.classes = classes;
	return props;
};
