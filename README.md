Text To Speech JS
=================

A small JavaScript library that provides a text to speech conversion using tts-api.com service.

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
                    <li><code>text</code> - a string representing the text that must be converted in speech</li>
                    <li><code>notNow</code> - a boolean value. If it's true, the speech will not start when the <code>talk</code> method is called.</li>
                </ul>
            </td>
            <td>The method that converts the text to speech.</td>
            <td><code>TextToSpeech.talk("Hello Beautiful World!");</code></td>
        </tr>
    </tbody>
</table>

<table>
</table.

## License

See [LICENSE](https://github.com/IonicaBizau/text-to-speech-js/blob/master/LICENSE) file.
