

function addTodo() {

    let obj;

    if (!model.inputs.new.title || !model.inputs.new.content || !model.inputs.new.priority) {
        errors = 'Something is missing....';
    } else {
        errors = '';

        obj = todos[keyGen()] = {
            id: genId(),
            date_added: Date.now(),
            date_edited: '',
            date_finished: '',
            title: model.inputs.new.title,
            content: model.inputs.new.content,
            priority: model.inputs.new.priority,
            completed: false,
        };
    }


    model.inputs.new.title = '';
    model.inputs.new.content = '';
    model.inputs.new.priority = '';

    updateScreen();

    return obj;
}

function editTodo(id) {

    model.inputs.edit.selectedToEdit = id;
    

    if (model.inputs.edit.title == '' && model.inputs.edit.content == '') {
        model.inputs.edit.title = todos[id].title;
        model.inputs.edit.content = todos[id].content;
    }
    
    if (model.inputs.edit.mode == 'edit' && id == model.inputs.edit.selectedToEdit) {

        todos[id].date_edited = Date.now();
        todos[id].title = model.inputs.edit.title;
        todos[id].content = model.inputs.edit.content;

        model.inputs.edit.selectedToEdit = '';
        model.inputs.edit.title = '';
        model.inputs.edit.content = '';
        model.inputs.edit.mode = '';

    } else {
        model.inputs.edit.mode = 'edit';
    }


    updateScreen();

}

function completeTodo(id) {
    const obj = todos[id];
    delete todos[id];
    model.inputs.edit.mode = '';
    model.inputs.edit.selectedToEdit = '';
    obj.date_finished = Date.now();
    obj.completed = true;
    todos[keyGen()] = obj;
    updateScreen();
    return obj;
}

function removeTodo(id) {
    delete todos[id];
    updateScreen();
}


function filterTodos(a) {
    mode = '';
    model.ppa.filter = a.value;
    updateScreen();
}

function changeScreen(page) {
    model.ppa.on_page = page;
    updateScreen();
}

function clearError() {
    errors = '';
    updateScreen();
}

function keyGen() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function genId() {
    let new_id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    return new_id;
}

  
function checkId(a) {
    if (Object.keys(todos).length < 0) {
        for (keys in todos) {
            return (todos[keys].id === a)
        }
    } else return false;

}
