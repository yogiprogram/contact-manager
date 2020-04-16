$(document).ready(function () {

    $.ajax({
        type: 'PUT',
        url: 'http://localhost:8088/games/1/pits/1',
        dataType: "json"
    }).then(function (game) {
        var board = game.status;
        $('#1').text(board[1]);
        $('#2').text(board[2]);
        $('#3').text(board[3]);
        $('#4').text(board[4]);
        $('#5').text(board[5]);
        $('#6').text(board[6]);

        $('#8').text(board[8]);
        $('#9').text(board[9]);
        $('#10').text(board[10]);
        $('#11').text(board[11]);
        $('#12').text(board[12]);
        $('#13').text(board[13]);

        $('#kalah-1').text(board[7]);
        $('#kalah-2').text(board[14]);

    });

    $(".pit").click(function () {

        var pit = this.id;

        var urlmove = "http://localhost:8088/games/1/pits/"+ pit;
        $.ajax({
            type: 'PUT',
            url: urlmove,
            dataType: "json",
            contentType: "application/json"
        }).then(function (game) {
            console.log(game);
            var board = game.status;
            $('#1').text(board[1]);
            $('#2').text(board[2]);
            $('#3').text(board[3]);
            $('#4').text(board[4]);
            $('#5').text(board[5]);
            $('#6').text(board[6]);

            $('#8').text(board[8]);
            $('#9').text(board[9]);
            $('#10').text(board[10]);
            $('#11').text(board[11]);
            $('#12').text(board[12]);
            $('#13').text(board[13]);
            $('#kalah-1').text(board[7]);
            $('#kalah-2').text(board[14]);
        });
    });

});
