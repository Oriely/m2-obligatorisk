

let errors = '';
let priority = [1, 2, 3];


let model = {
    ppa: {
        on_page: 'main',
        filter: '',
        sorting: ''
    },
    inputs: {
        edit: {
            mode: '',
            selectedToEdit: '',
            title: '',
            content:'',
            priority: ''
        },
        new: {
            title: '',
            content:'',
            priority:''
        }
    }

};

let todos = {
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 1,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 2,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 1,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 1,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 1,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 2,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 2,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 2,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 3,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 3,
        completed: false
    },
    [keyGen()]: {
        id: genId(),
        date_added: Date.now(),
        date_edited: '',
        date_finished: '',
        title: '123123123',
        content: 'asdoqdpoqkdpqkwdpoqwkdpqkwdpoqwd',
        priority: 3,
        completed: false
    },

    
};

let container = document.getElementById('container');


function updateScreen() {
    if (model.ppa.on_page == "main") {
        mainPage();
    }
    if (model.ppa.on_page == 'second') {
        secondPage();
    }
}

updateScreen();

function todoCreateHTML(id) {
    return `
        <div class="todo-wrapper${(todos[id].completed === true ? ' fin' : '')}${setPriority(todos[id].priority)}" >
            <div class="todo-title">${(model.inputs.edit.mode == 'edit' && id == model.inputs.edit.selectedToEdit ? '<input class="edit" type="text" onkeyup="input_title_edit = this.value" value="' + todos[id].title +'">' : '<h1>' + todos[id].title + '</h1>')}</div>
            <div class="todo-dates">
                <span>Added: ${stupidToReadableDate(todos[id].date_added)}</span>
                <span>${(todos[id].date_finished != '' ? 'Completed: ' + stupidToReadableDate(todos[id].date_finished) : '')}</span>
                <span>${(todos[id].date_edited != '' ? 'Edited: ' + todos[id].date_edited : '')}</span>
            </div>
            <div class="todo-content">  
                ${(model.inputs.edit.mode == 'edit' && id == model.inputs.edit.electedToEdit ? '<textarea class="edit" onkeyup="input_content_edit = this.value">'+ todos[id].content + '</textarea>' : todos[id].content)}
            </div>
            <div>Priority: ${(todos[id].priority === 1 ? 'High' : '') || (todos[id].priority === 2 ? 'Medium' : '') ||(todos[id].priority === 3 ? 'Low' : '')}</div>
            <div class="todo-controls-edit">
                ${(todos[id].completed == true ? '' : '<button '+ (id != model.inputs.edit.selectedToEdit && model.inputs.edit.mode == 'edit' ? 'disabled ' : '') + 'onclick="editTodo(\''+id+'\')">' + (id == model.inputs.edit.selectedToEdit ? (model.inputs.edit.mode == 'edit' ? 'Save' : 'Edit') : 'Edit') + '</button>')}
                ${(todos[id].completed == false ? '<button ' + (model.inputs.edit.mode == 'edit' ? 'disabled' : '') + ' onclick="completeTodo(\''+id+'\');">Complete</button>' : '')}
    
                <button onclick="removeTodo('${id}')">Remove</button>
            </div>
        </div>
    `;
}

function stupidToReadableDate(date) {
    return new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString()

}


function mainPage() {

    let html = '';
    

        


    html += `
    <div class="wrapper">
        <nav>
            <div onclick="changeScreen('main')">Main</div>
            <div onclick="changeScreen('second')">Completed todos</div>
        </nav>
        
        <div class="input-form">
            <div class="input-title"><input id="" type="text" onkeyup="input_title = this.value" placeholder="Some title...."></div>
            <div class="input-content"><textarea onkeyup="input_content = this.value"></textarea></div>
            ${(errors ? showErrors() : '')}
            <div class="todo-controls">
            
                <div>
                    <div><button onclick="addTodo()">Add todo</button></div>
                    <div class="priority">
                        <div><label>Priority: </label></div>
                        <div><input class="priority" onclick="input_priority = 1" id="high" type="radio" name="priority" value="test" ><label for="high">High</label></div>
                        <div><input class="priority" onclick="input_priority = 2" id="medium" type="radio"  name="priority"value="test"><label for="medium">Medium</label></div>
                        <div><input class="priority" onclick="input_priority = 3" id="low" type="radio" name="priority" value="test"><label for="low">Low</label></div>
                    </div>
                </div>
                <div>
                <div class="todo-filter">
                    <label>Filter by</label>
                    <select name="cars" id="cars" onchange="filterTodos(this)">
                        <option ${(model.ppa.filter == 0 ? 'selected' + ' ': '')}value="0">Nothing</option>
                        <option ${(model.ppa.filter == 1 ? 'selected' + ' ': '')}value="1">High</option>
                        <option ${(model.ppa.filter == 2 ? 'selected' + ' ': '')}value="2">Medium</option>
                        <option ${(model.ppa.filter == 3 ? 'selected' + ' ': '')}value="3">Low</option>
                    </select>
                </div>
                
                </div>
            </div>
            
            
        </div>
       
        <div class="todos">
        `;
        if(model.ppa.filter == 0) {
            for (let keys in todos) {

                if (todos[keys].completed === false ) {
                    if (todos[keys].priority === 1) {
                        html += todoCreateHTML(keys);
                    }
            
            
                    if (todos[keys].priority === 2) {
                        html += todoCreateHTML(keys);
                    }
         
                    if (todos[keys].priority === 3) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        if(model.ppa.filter == 1) {
            for (let keys in todos) {

                if (todos[keys].completed === false ) {

                    if (todos[keys].priority === 1) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        if(model.ppa.filter == 2) {
            for (let keys in todos) {

                if (todos[keys].completed === false ) {

                    if (todos[keys].priority === 2) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        if(model.ppa.filter == 3) {
            for (let keys in todos) {

                if (todos[keys].completed === false ) {
                    if (todos[keys].priority === 3) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        


        html += `
        </div>
    </div>
    `;

    container.innerHTML = html;
}



function secondPage() {
    let html = '';


    html += `
    <div class="wrapper">
        <nav>
            <div onclick="changeScreen('main')">Main</div>
            <div onclick="changeScreen('second')">Completed todos</div>
        </nav>
        <div>
                <div class="todo-filter">
                    <label>Filter by</label>
                    <select name="cars" id="cars" onchange="filterTodos(this)">
                        <option ${(model.ppa.filter == 0 ? 'selected' + ' ': '')}value="0">Nothing</option>
                        <option ${(model.ppa.filter == 1 ? 'selected' + ' ': '')}value="1">High</option>
                        <option ${(model.ppa.filter == 2 ? 'selected' + ' ': '')}value="2">Medium</option>
                        <option ${(model.ppa.filter == 3 ? 'selected' + ' ': '')}value="3">Low</option>
                    </select>
                </div>

                </div>
        <div class="todos">
        `;
        if(model.ppa.filter == 0) {
            for (let keys in todos) {

                if (todos[keys].completed === true ) {
                    if (todos[keys].priority === 1) {
                        html += todoCreateHTML(keys);
                    }
            
            
                    if (todos[keys].priority === 2) {
                        html += todoCreateHTML(keys);
                    }
         
                    if (todos[keys].priority === 3) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        if(model.ppa.filter == 1) {
            for (let keys in todos) {

                if (todos[keys].completed === true ) {

                    if (todos[keys].priority === 1) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        if(model.ppa.filter == 2) {
            for (let keys in todos) {

                if (todos[keys].completed === true ) {

                    if (todos[keys].priority === 2) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        if(model.ppa.filter == 3) {
            for (let keys in todos) {

                if (todos[keys].completed === true ) {
                    if (todos[keys].priority === 3) {
                        html += todoCreateHTML(keys);
                    }
                }
                
            }
        }
        
    
        
       html += `
            
        </div>
    </div>
    `;
    container.innerHTML = html;
}


function setPriority(pri) {
    if (pri === priority[0]) {
        return ' ' + 'high-priority';
    }
    if (pri === priority[1]) {
        return ' ' + 'medium-priority';
    }
    if (pri === priority[2]) {
        return ' ' + 'low-priority';
    }
}

function showErrors() {
    return '<div class="errors"><p>' + errors + '<p><span onclick="clearError()">X</span></div>';
}

function hideErrors() {
    errors = '';
    updateScreen();
}



