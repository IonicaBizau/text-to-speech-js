(function (window) {

    // create the text to speech object
    var TextToSpeech = {
        _key: "addf7ce48a11e371d6fa2a7b6075b9937ab=a6e2f7e1be80d86db2f56bd67953b0bb"
      , _lang: "en"
      , _voiceId: "en_gb_amy"

        /*
         *  talk method
         *
         *   - text: a string that must be converted in speech
         *   - notNow (default: false): don't play it now
         *
         * */
       , talk: function (options, notNow) {

            if (!options) {
                throw new Error ("Please provide options.");
            }

            // handle string values
            if (typeof options === "string") {
                options = {
                    text: options
                };
            }

            // encode text
            options.text = btoa (options.text);

            // convert to boolean
            notNow = Boolean (notNow);

            // set the tts url
            var voiceId = btoa (options.voiceId || TextToSpeech._voiceId)
              , language = options.lang || TextToSpeech._lang
              , key = options.key || TextToSpeech._key
              , ttsUrl = "http://www.ivona.com/voicetest.php?rtr=1&t2r=" + options.text + "&v2r=" + voiceId + "&lang=" + language + "&" + key
              , thisSpeech = new Audio (ttsUrl)
              ;

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
