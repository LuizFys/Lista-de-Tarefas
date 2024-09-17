$(document).ready(function() {
    // Submeter formulário e adicionar nova tarefa
    $('#taskForm').submit(function(event) {
        event.preventDefault(); // Evitar o recarregamento da página

        // Capturar o valor do input e adicionar à lista
        var taskText = $('#taskInput').val();
        if (taskText !== "") {
            $('#taskList').append('<li>' + taskText + '</li>');
            $('#taskInput').val(''); // Limpar o campo após adicionar
        }
    });

    // Marcar tarefa como completa ao clicar
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
