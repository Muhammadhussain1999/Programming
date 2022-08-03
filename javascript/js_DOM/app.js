// let val;
// val= document;
// val= document.all;
// val= document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.URL;
// val = document.domain;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];
// val = document.images;
// val = document.images;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;
// let scriptArr = Array.from(scripts);

// scriptArr.forEach(function(script) {
//     console.log(script);
// });
// val = document.charset;

// let arr = [1,2,3,4,5,6,];
// val = arr.slice([1],[3])
// console.log(val)

//DOM Selectors For Single Elements

//document.getElementById()
//console.log(document.getElementById("task-title"));
//console.log(document.getElementById("task-title").id);

// Change styling
// const taskTitle=document.getElementById('task-title')
// taskTitle.style.background='#333';
// taskTitle.style.color='#fff';
// taskTitle.style.padding='5px';


// //Change content
// taskTitle.innerText='Task List';
// taskTitle.textContent='Meri Marzi'
// taskTitle.innerHTML='<span styles=color:red>Task List</span>';

// //documenr.querySelect()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color='red';
// document.querySelector('ul li').style.color='blue';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').textContent= 'oye Hoye';
// document.querySelector('li:nth-child(even)').style.background ='#ccc'


//DOM Selectors For Multiple Elements
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype


// // Get children element nodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
// console.log(val);

//Create element
// const li =document.createElement('li')

// //Add class
// li.className='collection-item';

// //Add id
// li.id='new-item'

// //add attribute
// li.setAttribute('title','New Item')

// //create text node and append
// li.appendChild(document.createTextNode('Hello World'))

// //Create new link element
// const link=document.createElement('a')

// //add classes
// link.className='delete-item secondary-content'

// //add icon
// link.innerHTML=' <i class="fa fa-remove"></i>'

// //append link into li
// li.appendChild(link)

// //Append li as child to ul
// document.querySelector('ul.collection').appendChild(li)
// console.log(li)

// const ul=document.createElement('ul')
// ul.className='collection'
// const create_child=document.createElement('li')
// create_child.appendChild(link)
// //const create_li=createElement('li')
// document.querySelector('div.card-action').appendChild(ul)

// console.log(create_child)
// console.log(ul)
//ul.append(create_li)

// Event Listner
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('hello world')
//     e.preventDefault();
// })
document.querySelector('.clear-tasks').addEventListener('click',onClick)
    function onClick(e){
        console.log('CLicked')
        let val;
        val =e.target
        val= e.target.id;
        val=e.target.className;
        val=e.target.classList;
        // EVenet type
        val=e.type;

        //Coords event relative to the window
        val=e.timeStamp;

        //Coords event relative to the window
        val=e.clientY;
        console.log(val)
    }
