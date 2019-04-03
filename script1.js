// function handleFiles(files){
//
// }
// const constraints = {
//   video: true
// };
//
// facingMode: 'user'
//
//   navigator.mediaDevices.getUserMedia(constraints).
//   then((stream) => {
//     video.srcObject = stream
//   });
//
//   function hasGetUserMedia() {
//     return !!(navigator.mediaDevices &&
//       navigator.mediaDevices.getUserMedia);
//   }
//
//   if (hasGetUserMedia()) {
//     // Good to go!
//   } else {
//     alert('getUserMedia() is not supported by your browser');
//   }
//   const captureVideoButton =
//     document.querySelector('#screenshot .capture-button');
//   const screenshotButton = document.querySelector('#screenshot-button');
//   const img = document.querySelector('#screenshot img');
//   const video = document.querySelector('#screenshot video');
//   var canvas = document.createElement('canvas');
//
//   captureVideoButton.onclick = function() {
//     navigator.mediaDevices.getUserMedia(constraints).
//     then(handleSuccess).catch(handleError);
//   };
//
//   screenshotButton.onclick = video.onclick = function() {
//     processImage();
//   };
//
//   function handleSuccess(stream) {
//     screenshotButton.disabled = false;
//     video.srcObject = stream;
//   }
// 	function processImage() {
//     // **********************************************
//     // *** Update or verify the following values. ***
//     // **********************************************
//
//     // Replace <Subscription Key> with your valid subscription key.
//     var subscriptionKey = "725b72cbf4974880bb41fdc75d81d955";
//
//     // You must use the same Azure region in your REST API method as you used to
//     // get your subscription keys. For example, if you got your subscription keys
//     // from the West US region, replace "westcentralus" in the URL
//     // below with "westus".
//     //
//     // Free trial subscription keys are generated in the "westus" region.
//     // If you use a free trial subscription key, you shouldn't need to change
//     // this region.
//     var uriBase =
//         "https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/read/core/asyncBatchAnalyze";
//
//     // Request parameter.
//     var params = {
//         "mode": "Handwritten",
//     };
//
//     // Display the image.
//     var sourceImageUrl = document.getElementById("photoG").src;
//     document.querySelector("#sourceImage").src = sourceImageUrl;
//     console.log(sourceImageUrl);
//
//     // This operation requires two REST API calls. One to submit the image
//     // for processing, the other to retrieve the text found in the image.
//     //
//     // Make the first REST API call to submit the image for processing.
//     $.ajax({
//         url: uriBase + "?" + $.param(params),
//
//         // Request headers.
//         beforeSend: function(jqXHR){
//             jqXHR.setRequestHeader("Content-Type","application/json");
//             jqXHR.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
//         },
//
//         type: "POST",
//
//         // Request body.
//         data: '{"url": ' + '"' + sourceImageUrl + '"}',
//     })
//
//     .done(function(data, textStatus, jqXHR) {
//         // Show progress.
//         $("#responseTextArea").val("Handwritten text submitted. " +
//             "Waiting 10 seconds to retrieve the recognized text.");
//
//         // Note: The response may not be immediately available. Handwriting
//         // recognition is an asynchronous operation that can take a variable
//         // amount of time depending on the length of the text you want to
//         // recognize. You may need to wait or retry the GET operation.
//         //
//         // Wait ten seconds before making the second REST API call.
//         setTimeout(function () {
//             // "Operation-Location" in the response contains the URI
//             // to retrieve the recognized text.
//             var operationLocation = jqXHR.getResponseHeader("Operation-Location");
//
//             // Make the second REST API call and get the response.
//             $.ajax({
//                 url: operationLocation,
//
//                 // Request headers.
//                 beforeSend: function(jqXHR){
//                     jqXHR.setRequestHeader("Content-Type","application/json");
//                     jqXHR.setRequestHeader(
//                         "Ocp-Apim-Subscription-Key", subscriptionKey);
//                 },
//
//                 type: "GET",
//             })
//
//             .done(function(data) {
//                 // Show formatted JSON on webpage.
//                 $("#responseTextArea").val(JSON.stringify(data, null, 2));
//             })
//
//             .fail(function(jqXHR, textStatus, errorThrown) {
//                 // Display error message.
//                 var errorString = (errorThrown === "") ? "Error. " :
//                     errorThrown + " (" + jqXHR.status + "): ";
//                 errorString += (jqXHR.responseText === "") ? "" :
//                     (jQuery.parseJSON(jqXHR.responseText).message) ?
//                         jQuery.parseJSON(jqXHR.responseText).message :
//                         jQuery.parseJSON(jqXHR.responseText).error.message;
//                 alert(errorString);
//             });
//         }, 10000);
//     })
//
//     .fail(function(jqXHR, textStatus, errorThrown) {
//         // Put the JSON description into the text area.
//         $("#responseTextArea").val(JSON.stringify(jqXHR, null, 2));
//
//         // Display error message.
//         var errorString = (errorThrown === "") ? "Error. " :
//             errorThrown + " (" + jqXHR.status + "): ";
//         errorString += (jqXHR.responseText === "") ? "" :
//             (jQuery.parseJSON(jqXHR.responseText).message) ?
//                 jQuery.parseJSON(jqXHR.responseText).message :
//                 jQuery.parseJSON(jqXHR.responseText).error.message;
//         alert(errorString);
//     });
// };
