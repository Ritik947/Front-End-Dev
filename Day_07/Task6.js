var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 

console.log('Before Sorting:');
console.log(library);
function comparator(a,b) {
    if(a.title > b.title)
        return 1;
    else if(b.title > a.title)
        return -1;
    else
        return 0;
}
library.sort(comparator);
console.log('After Sorting:');
console.log(library);