import posts from './_posts.js';

const contents = JSON.stringify(posts.map(({ fileName, attributes }) => {
	return {
    slug: fileName.split('.')[0],
    ...attributes
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(contents);
}