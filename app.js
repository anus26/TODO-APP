console.log('hello world')


function renderTodo(){
    ol.innerHTML =''
     for (let i = 0; i < arr.length; i++){
         ol.innerHTML += `<li>${arr[i]}
         <button onclick ="deleteTodo(${i})">delete</button>
          <button onclick ="editTodo(${i})">edit</button>
         </li>`
     }     
    }


 const input=document.querySelector('#todo');
  const ol=document.querySelector('ol')
  const arr=[]
function addTodo(){
    arr.push(input.value)
    renderTodo()
    todoInput.value=''
}



    function deleteTodo(index){
        arr.splice(index ,1)
        renderTodo()
    }


    function editTodo(index){
        const updateVal =prompt('enter your valu')
        arr.splice(index,1,updateVal)
        renderTodo()
    }



