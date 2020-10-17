class Game{
    constructor(){

    }

    getGameState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", (data)=>{
            game_state = data.val();
        })
    }

    updateGameState(state){
        var gameStateref = database.ref("/");
        gameStateref.update({
            gameState: state
        })
    }

    start(){
        if (game_state === 0){
            players = new Players();
            players.getPlayerCount();
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200,100,100);
        car2 = createSprite(300,200,100,100);

        cars_array = [car1, car2];
    }

    play(){
        form.hide();
        text("The game has started! Good luck!", 130, 0);
        Players.getAllPlayers();
        if (all_players !== undefined){
            var positionX = 100;
            var positionY = 130;
            var index = 0;
            for (var plr in all_players){
                positionX = positionX + 200;
                positionY = displayHeight - all_players[plr].distance
                cars_array[index].x = positionX;
                cars_array[index].y = positionY;
                index = index + 1;
                if(index === players.index){
                    cars_array[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars_array[index - 1].y;
                }





                /*if (plr === "player" + players.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                text(all_players[plr].name + ": " + all_players[plr].distance, 100, positionY);
                positionY = positionY + 30;*/
            }

            drawSprites();
        }

        if (keyIsDown(UP_ARROW) && players.index !== null){
            players.distance = players.distance + 20;
            players.updatePlayerInfo();
        }
    }
}