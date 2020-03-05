<script>
  import Slide from "./components/Slide.svelte";
  var applicationID = "E3C3DF97";
  var namespace = "urn:x-cast:es.offd.gnu";
  var session = null;
  var initialized = false;
  function initializeCastApi() {
    if (!chrome.cast || !chrome.cast.isAvailable) {
      window.setTimeout(initializeCastApi, 100);
      return;
    }
    var sessionRequest = new chrome.cast.SessionRequest(applicationID);
    var apiConfig = new chrome.cast.ApiConfig(
      sessionRequest,
      sessionListener,
      function() {}
    );
    chrome.cast.initialize(apiConfig, onInitSuccess, onInitError);
  }
  function sessionListener(e) {
    session = e;
    console.log("New session");
    if (session.media.length != 0) {
      console.log("Found " + session.media.length + " sessions.");
    }
  }

  function receiverListener(e) {
    if (e === "available") {
      console.log("Chromecast was found on the network.");
    } else {
      console.log("There are no Chromecasts available.");
    }
  }
  function onInitSuccess() {
    console.log("Initialization succeeded");
    initialized = true;
  }

  function onInitError() {
    console.log("Initialization failed");
  }

  function onRequestSessionSuccess(e) {
    console.log("Successfully created session: " + e.sessionId);
    session = e;
    // session.sendMessage(namespace, message);
  }

  function onLoadSuccess() {
    console.log("Successfully loaded image.");
  }

  function onLoadError() {
    console.log("Failed to load image.");
  }
  function onLaunchError() {
    console.log("No device selected?");
  }

  function main() {
    initializeCastApi();

    var go_button = document.getElementById("go-button");
    var scheme_re = /^https?:\/\//;

    go_button.onclick = function(e) {
      let value = "http://" + "www.google.com";

      sendMessage({
        url: value
      });
    };
  }
  function onError(message) {
    console.log(message);
  }

  function sessionUpdateListener(isAlive) {
    if (!isAlive) {
      session = null;
    }
  }
  function sendMessage(message) {
    if (session != null) {
      alert(1);
      // session.sendMessage(namespace, message);
    } else {
      console.log("Requesting session...");
      chrome.cast.requestSession(onRequestSessionSuccess, onError);
    }
  }
  function foo(node) {
    // the node has been mounted in the DOM
    main();
    return {
      destroy() {
        // the node has been removed from the DOM
      }
    };
  }
</script>

<style>
  input {
    font-family: "Roboto", sans-serif;
    font-size: inherit;
  }

  input:focus {
    outline: 3px solid #7c6991;
  }

  img {
    margin-bottom: -20px;
  }

  .step {
    font-size: 30px;
    color: white;
    margin: 10px;
    margin-top: 20px;
    font-weight: 300;
  }

  .go {
    border: 2px solid #5f3092;
    background: #511691;
    margin-top: 30px;
    padding: 10px;
    cursor: pointer;
  }
  .go:hover {
    background: #7c6991;
  }
  .go:hover em {
    background: black;
    text-shadow: 1px 1px #7c6991;
  }

  #main {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
</style>

<!-- 
<main>
<Slide></Slide>
</main> -->

<div id="main">
  <input
    type="button"
    disabled={!initialized}
    id="go-button"
    use:foo
    class="step go"
    value="GO" />

</div>
