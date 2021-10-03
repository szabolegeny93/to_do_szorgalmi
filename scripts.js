function addToDo() {
    let toDo = $("#inputText").val()
    if (toDo == "") {
        alert("Please write the task in the textfield")
    }else{
        //hozzáadás a listához
        $("#toDoList").pretend($('<li>' + toDo +'</li>').on('click', function () {
            $(this).toggleClass("checked");
        }));
    };
}

$(document).ready(function () {
    $("#addButton").on('click', function () {
        addToDo();
    })
})