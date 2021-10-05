function addToDo() {
    let toDo = $("#inputText").val()
    if (toDo == "") {
        alert("Please write the task in the textfield")
    }else{
        //hozzáadás a listához
        $("#toDoList").prepend($('<li>' + toDo + '<span class="icon deleteIcon"><img src="./icons/delete.svg" /></span><span class="icon tickIcon tickIcon-ticked"><img src="./icons/tick.svg" /></span></li>').on("click", function () {
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
        $(event.target).parent().remove(); /*Csak a span-t törli, az adott sort nem.     parent().parent().remove() törli az egész ul-t*/
    });
    $("#toDoList").on('click', 'tickIcon', function (event) {
        $(event.target).parent().css('text-decoration', 'bold');
    })
    $("#addToDoContainer input").keypress(isEnter);
});