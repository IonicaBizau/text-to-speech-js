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

The MIT License (MIT)

Copyright (c) 2014 Ionică Bizău

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
