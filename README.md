Text To Speech JS
=================

A small JavaScript library that provides a text to speech conversion using tts-api.com service.

[<img src="http://i.imgur.com/Q0uMnvD.png" width="100%">](http://ionicabizau.github.io/text-to-speech-js/)

## How to use

Import the library in your web page:

```html
<script src="path/to/text-to-speech.js"></script>
```

This will create a `TextToSpeech` gloabal object. It contains a `talk` method that is called like below:

```js
TextToSpeech.talk("Hello Beautiful World!");
```

If a second argument is not provided the speech will start immediately.

## Methods

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Arguments</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>talk</code></td>
            <td>
                <ul>
                    <li><code>options</code> - a string representing the text that must be converted to speech or an object containing the following fields:
                        <ul>
                            <li>text: the input string that must be converted to speech</li>
                            <li>lang: the language (default: "en")</li>
                            <li>key: the Ivona api key</li>
                            <li>voiceId: the Ivona voice id</li>
                        </ul>
                    </li>
                    <li><code>notNow</code> - a boolean value. If it's true, the speech will not start when the <code>talk</code> method is called.</li>
                </ul>
            </td>
            <td>The method that converts the text to speech.</td>
            <td><code>TextToSpeech.talk("Hello Beautiful World!");</code></td>
        </tr>
    </tbody>
</table>
