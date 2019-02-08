/*exports.handler = function(event, context) {

    event.response.emailSubject = "Signup Verification Code";
    event.response.emailMessage = "hola " + event.request.codeParameter + " is your verification code.";
    context.done(null, event);
};*/

exports.handler = async (event, context) => {
    // const message = `http://localhost:3000/confirm?email=${event.request.userAttributes.email}&code=${event.request.codeParameter}&username=${event.userName}`
    const message = `
        <html>
            <head><title>Some title</title></head>
            <body>
                <h1>http://localhost:3000/confirm?code=${event.request.codeParameter}&username=${event.userName}</h1>
            <body>
        </html>
    `

    event.response.emailSubject = "Signup Verification Code";
    event.response.emailMessage = message;
    context.done(null, event);
};
