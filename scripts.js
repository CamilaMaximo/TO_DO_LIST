
const button = document.querySelector('.button_add_task');
const input = document.querySelector('.input_task');
const ListaCompleta = document.querySelector('.list_task');

   

let minhaListaDeItens = []


function AdicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa:input.value,
        concluida:false
    })
    input.value = ''


mostrarTarefas()

     
}
function mostrarTarefas(){
    let novaLi =''
    minhaListaDeItens.forEach((item, index) =>{    //normalmente escreve-se => index ao inves de posiçao.
        novaLi = novaLi +             // &&  é um  IF ,usado para verificação. DONE significa concluido.
        ` 
                                  
           <li class="task ${item.concluida && "done"}">     
                <img src="img/checked.png" alt="checked_tarefa" onclick="ComcluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img src="img/trash.png" alt="excluir_tarefa" onclick="deletarItem(${index})">
           </li>
        `

    })
 
    ListaCompleta.innerHTML = novaLi


    localStorage.setItem('listas',JSON.stringify(minhaListaDeItens)) //JSON.stringfy - transforma tudo e string
}

function ComcluirTarefa(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    
    mostrarTarefas()
}

function deletarItem(index){
    minhaListaDeItens.splice(index,1) //splice deleta itens no array
    console.log("deletar")

    mostrarTarefas()
}

function recarregarTela(){
    const TarefasDoLocalStorage = localStorage.getItem('lista')

    if(TarefasDoLocalStorage){
    minhaListaDeItens  = JSON.parse(TarefasDoLocalStorage)
    }
    mostrarTarefas()
}
recarregarTela()

button.addEventListener('click',AdicionarNovaTarefa)

