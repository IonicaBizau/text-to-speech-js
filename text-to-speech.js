(function (window) {
    
    // create the text to speech object
    var TextToSpeech = {

        /*
         *  talk method
         *
         *   - text: a string that must be converted in speech
         *   - notNow (default: false): don't play it now
         *
         * */
        talk: function (text, notNow) {

            // validate text
            if (typeof text !== "string" || !text) {

                // throw error
                throw new Error ("First argument must be a non empty string.");
            }

            // convert to boolean
            notNow = Boolean (notNow);

            // set the tts url
            var ttsUrl = "http://tts-api.com/tts.mp3?q=" + encodeURIComponent(text)

                // new audio
              , thisSpeech = new Audio (ttsUrl);

            // if not now is false, play it
            if (!notNow) {
                thisSpeech.play();
            }

            // return audio object to the user
            return thisSpeech;
        }
    }

    // already exists one
    if (window.TextToSpeech) {

        // show a warning message
        console.warn ("There is already a TextToSpeech variable in window object. It will be overridden.");
    }

    // export the object
    window.TextToSpeech = TextToSpeech;

})(window);
