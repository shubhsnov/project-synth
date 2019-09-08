import { CONNECT_TO_SERVER } from "./types";

export function connectToServer() {
  return dispatch => {
    // use current hostname/port as colyseus server endpoint
    var endpoint =
      location.protocol.replace("http", "ws") + "//" + location.hostname;

    // development server
    if (location.port && location.port !== "80") {
      endpoint += ":2567";
    }

    var colyseus = new window.Colyseus.Client(endpoint);
    colyseus.joinOrCreate("judgement").then(
      function (room) {
        console.log('then ', arguments);
        dispatch({
          type: CONNECT_TO_SERVER,
          payload: {
            connected: "connected"
          }
        });
      },
      function(err) {
        console.log('fail ', arguments);
        dispatch({
          type: CONNECT_TO_SERVER,
          payload: {
            connected: "disconnected"
          }
        });
      }
    );

    //.then(room_instance => {
    //room = room_instance;

    //var players = {};

    // // listen to patches coming from the server
    // room.state.players.onAdd = function (player, sessionId) {
    //     console.log(player);
    //     var message = document.createElement("p");
    //     message.appendChild(document.createTextNode(player.player_id + " joined"));
    //     document.getElementById("chat").appendChild(message);
    // }

    // room.state.players.onRemove = function (player, sessionId) {
    //     console.log(player);
    //     var message = document.createElement("p");
    //     message.appendChild(document.createTextNode(player.player_id + " has left the chat"));
    //     document.getElementById("chat").appendChild(message);
    // }

    // room.state.players.onChange = function (player, sessionId) {
    //     console.log(player);
    //     var message = document.createElement("p");
    //     message.appendChild(document.createTextNode(player.player_id + " is saying: " + player.player_message));
    //     document.getElementById("chat").appendChild(message);
    // }
    //});
  };
}
