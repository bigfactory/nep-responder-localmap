
var loalResponder = require('nep-responder-local')

module.exports = function(req, res, next, data) {
    var options = data.options;
    var pattern = data.pattern;
    var log = data.log;

    var simulateData;

    for(var pattern in options){
        if(req.url.indexOf(pattern) != -1){
            simulateData = {
                options: {},
                pattern: pattern,
                log: data.log
            };
            if(typeof options[pattern] == 'object'){
                simulateData.options = options[pattern];
            }
            else{
                simulateData.options['file'] = options[pattern];
            }
            loalResponder(req, res, next, simulateData);
            return;
        }
    }

    next();
};



