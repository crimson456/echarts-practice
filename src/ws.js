let webSocket=new WebSocket('ws://localhost:9000')

webSocket.addEventListener('open', wsHandleOpen)
webSocket.addEventListener('message', wsHandleMessage)
webSocket.addEventListener('close',wsHandleClose)
webSocket.addEventListener('error',wsHandleError)


function wsHandleOpen(event) {
    webSocket.send("Hello server!")
    console.log("WebSocket is open now.");
}

function wsHandleMessage(event) {
    console.log('Message from server ', event.data);
}

function wsHandleClose(event) {
    console.log("WebSocket is closed now.");
  };

function wsHandleError(event) {
    console.log('WebSocket error: ', event);
  }



export default webSocket