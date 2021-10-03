function addToDo() {
    let toDo = $("#inputText").val()
    if (toDo == "") {
        alert("Please write the task in the textfield")
    }else{
        //hozzáadás a listához
        $("#toDoList").prepend($('<li>' + toDo + '<span class="deleteIcon"><img src="./icons/delete.svg" class="icon" /></span><span class="tickIcon"><img src="./icons/tick.svg" class="icon" /></span></li>').on("click", function () {
            $(this).toggleClass("checked");
          }));
    };
}

function isEnter(event) {
    if (event.key == "Enter") {
        $("#addButton").click();
        return false;
    }
}
$(document).ready(function () {
    $("#addButton").on('click', function () {
        addToDo();
    });
    $("#toDoList").on('click', '.deleteIcon', function (event) {
        $(event.target).parent().remove();
    });
    $("#toDoList").on('click', 'tickIcon', function (event) {
        $(event.target).parent().css('text-decoration', 'bold');
    })
    $("#addToDoContainer input").keypress(isEnter);
});