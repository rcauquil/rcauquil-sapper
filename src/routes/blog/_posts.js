import fm from 'front-matter';
const fs = require('fs');
const path = require('path');

const POSTS_DIR = `${process.cwd()}/src/routes/blog`;

const posts = JSON.stringify(svexTree(POSTS_DIR));

/**
 * Get a tree with all the folders and svex file filtered by date
 *
 * @param {*} dir
 * @param {*} [fileTree={}]
 */
function svexTree(dir, fileTree = {}) {
  // Read the given directory
  fs.readdirSync(dir)
    .forEach(fileName => {
      // If it's a directory iterate again
      if (fs.statSync(path.join(dir, fileName)).isDirectory()) {
        fileTree[fileName] = svexTree(path.join(dir, fileName));   
      // Update the free     
      } else {
        // Only add svex files
        if (/\.svx$/.test(fileName)) {          
          // Get content
          const content = fs.readFileSync(path.join(dir, fileName), 'utf8');        
          // Get attributes
          const { attributes } = fm(content);
          attributes.slug = fileName.split('.')[0];
          // Set timekey to correctly sort the post by date                  
          const timeKey = attributes.date.replace(/-/g,'');
          // Set the tree
          fileTree[timeKey] = {
            fileName,
            attributes
          };
        }
      }
    });

  return fileTree;
};

export default posts;
