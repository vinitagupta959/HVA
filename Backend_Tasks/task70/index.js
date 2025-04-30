const path=require('path');
// path module ek inbuilt Node.js module hai jo hume file ya folder ke path ko handle karne ke liye functions deta hai. Ye aapko file ki exact info de sakta hai aur different parts (folder, filename, extension) ko alag-alag extract karne mein madad karta hai.
const parsedPath=path.parse('/task70/message.txt');
console.log('Directory:', parsedPath.dir);     
console.log('Base:', parsedPath.base);         
console.log('Extension:', parsedPath.ext);    
console.log('Name:', parsedPath.name);        

const fullPath = path.join(__dirname, 'public', 'index.html');
// courrent directry ke liye doubble underscore lete hai
console.log(fullPath);
