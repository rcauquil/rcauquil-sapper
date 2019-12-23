import fm from 'front-matter';
const fs = require('fs');

const POSTS_DIR = `${process.cwd()}/src/routes/blog/code`;

const posts = fs.readdirSync(POSTS_DIR)
  .filter(fileName => /\.svx$/.test(fileName))
  .map(fileName => {
    const content = fs.readFileSync(`${POSTS_DIR}/${fileName}`, 'utf8');
    const { attributes } = fm(content);

    return {
      fileName,
      attributes
    };
  });

export default posts;
