let todo =["At vero eos accusamus et iusto odio dignissimos","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud"];
let done =["dh asdhf shd adsh hasdads","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud"];
function eventfn(incomingIndex){
    done.push(todo[incomingIndex]);
    todo = todo.filter((ele, index) => index !== incomingIndex);
    addTodo();
    addDone();
}

function delete_item(incomingIndex){
    done = done.filter((ele, index) => index !== incomingIndex);
    addTodo();
    addDone();
}

function addTodo(){
    let ar = todo.map((cur, index) => {
    return `<section class="desone">
    <p>${cur}</p>
    <div class="destwo">
        <button onClick="eventfn(${index})" class="btnstyle">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12">
                <path fill="none" fill-rule="nonzero" stroke="#979797" d="M.6 6l2.773 5.333L14.467.667"/>
            </svg>
        </button>
    </div>
</section>`
});
let arr = document.getElementById("srcs");
arr.innerHTML= ar.join('');
}
function addDone(){
let ar1=done.map((cur, index) => {
    return `<section class="desone">
                        <p>${cur}</p>
                        <div class="destwo">
                            <button class="btnstyle" onClick="delete_item(${index})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12">
                                    <path fill="none" fill-rule="nonzero" stroke="#979797" d="M.6 6l2.773 5.333L14.467.667"/>
                                </svg>
                            </button>
                        </div>
                    </section>`
});
let arr1 = document.getElementById("srcs1");
arr1.innerHTML= ar1.join('');
}

function func(){
   let item = prompt("enter an item");
   todo.push(item);
   addTodo();
}

addTodo();
addDone();