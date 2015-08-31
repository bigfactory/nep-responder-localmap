## nep-responder-localmap


## Usage

```
var nep_responder_localmap = require('nep-responder-localmap');


```

## Config

```
{
    pattern: 'http',
    responder: 'localmap',
    options: {
        'http://xxx.com': '/www/xxx.com/',
        'http://ooo.com': '/www/ooo.com/',
        'http://abc.com/index.html': '/www/abc.com/index.html'
    }
}
```