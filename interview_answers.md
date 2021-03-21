# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.


1. Explain what a token is used for.

  A token for modern web browsers is commonly a Jason Web Tokens (JWT)s.  A token is issued by the server and is a string of text.  It's stored in the local or session storage of the client.  The token helps the server identify the client and it helps it make decisions about the type of permissions the client has for data transfer.  

  One possible use case, is that a web token can be used verify that a user is authorized to access parts of the data in the api.  

2. What steps can you take in your web apps to keep your data secure?

One way to increase security is is to make the JWTs self limiting for a short amount of time.  They should have a short expiration minutes or hours at maximum. You should avoid giving your tokens expiration times in days or months.


3. Describe how web servers work.

Web servers are like an external database.  They receive a request for data from the client (user) and then serve the corresponding data.  

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - post
Read - get
Update - put
Delete - delete