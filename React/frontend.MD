# semantic elements vs non semantic elements
    A semantic element clearly describes its meaning to both the browser and the developer.
    Examples of non-semantic elements:
             <div> and <span> - Tells nothing about its content.
    Examples of semantic elements:
             <form>, <table>, and <article> - Clearly defines its content.

# What is JWT & how to secure those tokens & vunerablities associated with it ?

  A JWT is a mechanism to verify the owner of some JSON data. It’s an encoded, URL-safe string that can contain an unlimited amount of data (unlike a cookie) and is cryptographically signed.

  When a server receives a JWT, it can guarantee the data it contains can be trusted because it’s signed by the source. No middleman can modify a JWT once it’s sent.

  It’s important to note that a JWT guarantees data ownership but not encryption. The JSON data you store into a JWT can be seen by anyone that intercepts the token because it’s just serialized, not encrypted. For this reason, it’s highly recommended to use HTTPS with JWTs (and HTTPS in general, by the way).

  How to expire a single JWT token

    How do you invalidate a single token? A no-effort solution is to change the server secret key, which invalidates all tokens. However, this is not ideal for users, who may have their tokens expired for no reason.

    One way to do it is to add a property to your user object in the server database to reference the date and time at which the token was created.

    A token automatically stores this value in the iat property. Every time you check the token, you can compare its iat value with the server-side user property.

    To invalidate the token, just update the server-side value. If iat is older than this, you can reject the token.

    https://blog.logrocket.com/jwt-authentication-best-practices/

# What is a refresh token?
    In simple terms, an access token enables users to obtain resources from your app.

    For security reasons, access tokens often have a very short lifetime. When an access token expires, a refresh token can be used to get a new access token without entering login credentials again.

    Refresh tokens have a long lifetime. If they are valid and not expired, clients can obtain new access tokens. This long lifetime may lead to vulnerability for protected resources.

    - refresh token rotation

    Refresh token rotation is a technique to secure refresh tokens. When a new access token is requested with the refresh token, a new refresh token is also returned and the old one is invalidated. The purpose of refresh token rotation is to eliminate the vulnerability risk posed by long-lasting refresh tokens.

    Until recently, using refresh tokens was not recommended in single-page web applications (unlike mobile applications) because SPAs have no secure mechanism to store tokens. Refresh token rotation and refresh token reuse detection (which we’ll get to later) increase the security of this high-value information.

    - refresh token reuse detection

    Refresh token reuse detection is a mechanism that supports refresh token rotation. When an access token expires, the client gets a new set of tokens (access and refresh token) using a refresh token. Then, the identity provider immediately invalidates the previous refresh token.

    If the identity provider detects the use of that invalidated refresh token, it immediately invalidates all the refresh and access tokens making the client authenticate using login credentials again. This mechanism prevents your app from malicious attacks when there is a leakage of tokens.

    Where to store refresh tokens
    There are several ways to store tokens within client sessions: in memory, via silent authentication, and in the browser’s local storage.

    - https://blog.logrocket.com/persistent-login-in-react-using-refresh-token-rotation/

# What is CSRF ?

    Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker’s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.

     prevention 
        - anti csrf token
        - using cors on the server
        
    stackhawk.com/blog/react-csrf-protection-guide-examples-and-how-to-enable-it/

# What is XSS & prevent ?

    In a cross-site scripting (XSS) attack, an attacker injects HTML markup or JavaScript into the affected web application's front-end client. The attacker tricks the application into sending the malicious script through the browser, which treats the script as though it's coming from a trusted website. Each time users access the affected page, their browsers download and run the malicious script as though it's part of the page. The malicious script might access users' sensitive information, steal cookies, or hijack a user's session.

    XSS is one of the most common vulnerabilities in applications. It can cause serious damage to users and organizations. Essentially, XSS is a code injection attack against the various language interpreters in the browser, such as HTML, JavaScript, VBScript.

    there are three types of XSS attacks: 
            -stored, reflected, and DOM based.

    *** How to prevent XSS attacks ***
    To prevent XSS attacks, your application must validate all the input data, make sure that only the allowlisted data is allowed, and ensure that all variable output in a page is encoded before it is returned to the user. When you encode variable output, you substitute HTML markup with alternative representations that are called entities. The browser displays the entities but doesn't run them. When a browser renders the entities, they're converted back to HTML and printed but they aren't run.

    For example, an attacker injects this code into a web page:
  ```javascript
        <script>
            alert("you have been attacked")
        </script>
   ```
    By using output encoding, this code is returned to the browser:
  ```javascript
        <script>alert("you have been attacked")</script>
  ```
    The browser converts the encoded script back to this code:
  ```javascript
        &lt;script&gt;alert("you have been attacked")&lt;/script&gt;
  ```
    The browser displays the script as part of the web page, but the browser doesn't run the script.

    To protect most from XSS vulnerabilities, follow three practices:

    Escape user input. Escaping means to convert the key characters in the data that a web page receives to prevent the data from being interpreted in any malicious way. It doesn't allow the special characters to be rendered.

    Validate user input. Treat anything that originates data from outside the system as untrusted. Validate all the input data. Use an allowlist of known, acceptable, good input.

    Sanitize data. Examine and remove unwanted data, such as HTML tags that are deemed to be unsafe. Keep the safe data and remove any unsafe characters from the data.

    These prevention methods cover most XSS attack vectors, but they don't cover everything. Be sure to also use static and dynamic application scanning tools in your pipeline to detect security vulnerabilities and mitigate them.

# What should be request method for login api ?
  
  Generally , it should be post request as username & password are sensitive info , it will exposed to others if we use get method by query parameters

# Why DocType ?

   Doctype in HTML: HTML Doctype is most often written at the very first element of the entire HTML document. It remains wrapped inside angle brackets but it is not a tag. It is a statement or declaration.  Doctype stands for Document Type. It is a statement to declare the type of the document. With the help of this statement, the developer let the browser know that the following document is an HTML document.

   Meaning of Doctype: A doctype or document type declaration (DTD) is an instruction that tells the web browser about the markup language in which the current page is written.

# http vs https

   A very short and concise difference between http and https is that https is much more secure compared to http.

   HyperText Transfer Protocol (HTTP) is a protocol using which hypertext is transferred over the Web. Due to its simplicity, http has been the most widely used protocol for data transfer over the Web but the data (i.e. hypertext) exchanged using http isn’t as secure as we would like it to be. In fact, hyper-text exchanged using http goes as plain text i.e. anyone between the browser and server can read it relatively easy if one intercepts this exchange of data. But why do we need this security over the Web? Think of ‘Online shopping’ at Amazon or Flipkart. You might have noticed that as soon as we click on the Check-out on these online shopping portals, the address bar gets changed to use https. This is done so that the subsequent data transfer (i.e. financial transaction etc.) is made secure. And that’s why https was introduced so that a secure session is setup first between Server and Browser. In fact, cryptographic protocols such as SSL and/or TLS turn http into https i.e. https = http + cryptographic protocols. Also, to achieve this security in https, Public Key Infrastructure (PKI) is used because public keys can be used by several Web Browsers while private key can be used by the Web Server of that particular website. The distribution of these public keys is done via Certificates which are maintained by the Browser.
    https://www.geeksforgeeks.org/difference-between-http-and-https/

# HTML flow

  ```javascript
  <!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="This is my sample webpage">
        <meta name="keywords" content="This, is, my , sample webpage">
        <meta name="author" content="praneeth">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="refresh" content="30">
        <link rel="stylesheet" href="sample.css">
        <title>Sample</title>
    </head>
    <body>
    </body>
  </html>
  ```
# local storage vs session storage vs cookie
  Local storage and session storage both provide a large memory capacity. To be more specific, local Storage stores up to 10 megabytes and session storage stores up to 5 megabytes. On the other hand, cookies provide a very restrictive and small storage capacity of 4 kilobytes

  
# Event bubbling vs Event capturing


*** RESOURCES ***
- https://blog.logrocket.com/jwt-authentication-best-practices/
- https://www.xenonstack.com/insights/local-vs-session-storage-vs-cookie
- https://scotch.io/@PratyushB/local-storage-vs-session-storage-vs-cookie
- https://blog.logrocket.com/persistent-login-in-react-using-refresh-token-rotation/
- https://www.ibm.com/garage/method/practices/code/protect-from-cross-site-scripting/
- https://portswigger.net/web-security/csrf
- https://www.stackhawk.com/blog/react-csrf-protection-guide-examples-and-how-to-enable-it/
- https://www.geeksforgeeks.org/difference-between-http-and-https/
