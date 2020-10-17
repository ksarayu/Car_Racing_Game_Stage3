class Players{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;
    }

    getPlayerCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value", function(data){
            player_count = data.val();
        })
    }

    updatePlayerCount(count){
        var playerCountref = database.ref("/");
        playerCountref.update({
            playerCount: count
        })
    }

    updatePlayerInfo(){
        var playerIndex = "players/player" + this.index;
        var playerInforef = database.ref(playerIndex);
        playerInforef.set({name: this.name, distance: this.distance});
    }

    static getAllPlayers(){
        var playersRef = database.ref("players");
        playersRef.on("value", (data)=>{
            all_players = data.val();
        })
    }
}