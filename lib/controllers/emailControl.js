var mandrill = require('mandrill-api/mandrill');
var config = require('../../config');
mandrill_client = new mandrill.Mandrill(config.mandrill_key);

module.exports = {
       sendMail: function(req, res){
        console.log('req.body: ', req.body);
         var message = {
        "text": req.body.text,
        "subject": "New Message from edawebdesign.com",
        "from_email": "test@exmaple.com",
        "from_name": "Contact Form",
        "to": [{
                "email": "edawebdesign@gmail.com",
                "name": "alert",
                "type": "to"
            }],
        };
        var async = false;
        var ip_pool = "Main Pool";
        var send_at = "";
        mandrill_client.messages.send({"message": message, "async": async, "ip_pool": ip_pool, "send_at": send_at}, function(result) {
            console.log(result);
        }, function(e) {
            // Mandrill returns the error as an object with name and message keys
            console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
            // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
        });
    } 
}
