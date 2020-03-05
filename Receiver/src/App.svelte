<script>
  // function setStatus(msg) {
  //   if (msg) {
  //     status.classList.remove("empty");
  //   } else {
  //     status.classList.add("empty");
  //   }
  //   status.textContent = msg;
  // }

  // cast.receiver.logger.setLevelValue(0);
  // window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
  // castReceiverManager.onReady = function(event) {
  //   window.castReceiverManager.setApplicationState("Application ready");
  //   setStatus("Waiting for address");
  // };

  // // create a CastMessageBus to handle messages for a custom namespace
  // window.messageBus = window.castReceiverManager.getCastMessageBus(
  //   "urn:x-cast:es.offd.gnu"
  // );

  // // handler for the CastMessageBus message event
  // window.messageBus.onMessage = function(event) {
  //   var msg = JSON.parse(event.data);
  //   if (msg.force) {
  //     return loadPage(msg.url);
  //   }
  //   loadFrame(msg.url, msg.reload ? parseInt(msg.reload_time, 10) : 0);
  //   // inform all senders on the CastMessageBus of the incoming message event
  //   // sender message listener will be invoked
  //   window.messageBus.send(event.senderId, event.data);
  // };

  // // initialize the CastReceiverManager with an application status message
  // window.castReceiverManager.start({ statusText: "Application is starting" });
</script>

<style>
  #main {
    height: 100%;
    background: green url("bg1.png") no-repeat 50% 50%;
    transition: opacity 4s ease;
  }

  #main,
  iframe {
    background: green url("bg1.png") no-repeat 50% 50%;
  }

  #main.show {
    opacity: 1;
  }

  #status {
    transition: opacity 1s;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #555;
    font-weight: bold;
    height: 1.2em;
    text-align: center;
    padding: 10px;
    background: rgba(32, 27, 37, 0.9);
    z-index: 10;
  }

  #status.empty {
    opacity: 0;
  }

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0;
    width: 100%;
    height: 100%;
    border: 0 transparent;
  }

  iframe.show {
    transition: opacity 1s;
    opacity: 1;
  }
</style>

<!-- 
<main>
<Slide></Slide>
</main> -->

<h1>En gnu!!</h1>
<div id="main" class="fade">
  <h1>:D</h1>
</div>
<div id="status" class="empty" />
