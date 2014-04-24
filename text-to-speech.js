/**
 *  Text to Speech
 *  A small JavaScript library that provides a text to speech conversion using tts-api.com service.
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Ionică Bizău
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of
 *  this software and associated documentation files (the "Software"), to deal in
 *  the Software without restriction, including without limitation the rights to
 *  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 *  the Software, and to permit persons to whom the Software is furnished to do so,
 *  subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 *  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 *  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 *  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * */
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
