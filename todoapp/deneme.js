var items = ['item 1', 'item 2', 'item 3', 'item 4'];


var list = document.querySelector('#myList');

items.forEach(function (item) {
    createitem(item);
});

function createitem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = 'list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('x');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.addEventListener('click', function () {
        li.style.display = 'none';
        li.classList.remove('checked');
    });

};

list.addEventListener('click', function (asd) {
    if(asd.target.tagName=='LI'){
        asd.target.classList.toggle('checked');
        ToggleDeleteButton();
    }
    
});

document.querySelector('#deleteall').onclick=function(){
    var elements=document.querySelectorAll('.checked');
    elements.forEach(function(item){
       item.style.display='none'; 
    });
}



function ToggleDeleteButton(){
    var checklist=document.querySelectorAll('.checked');
    if(checklist.length>1){
        document.querySelector('#deleteall').classList.remove('d-none');
    }else{
        document.querySelector('#deleteall').classList.add('d-none');
    }
    
}




/*var add = document.querySelector('#txtbuton');
add.addEventListener('click', function () {
    var ekle=document.querySelector('#createbtn').value;
    createitem(ekle);
    
});*/

var add=document.querySelector('#txtbuton').onclick=function(){
    var ekle=document.querySelector('#createbtn').value;
    createitem(ekle);
}





    
    



