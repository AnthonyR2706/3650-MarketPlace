<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>GroupLab</title>
  <link rel="stylesheet" href="css\newcss.css">
</head>
<body>
  <div class = "topNavBar">
    <a class = "navBar current" href = "#" onClick = "javascript:changePage()" id = "home">Home</a>
    <a class = "navBar" href = "#" onClick = "javascript:changePage()" id = "categories">Categories</a>
    <a class = "navBar" href = "#" onClick = "javascript:changePage()" id = "myInfo">My Info</a>
    <a class = "navBar" href = "#" onClick = "javascript:changePage()" id = "createListing">Create Listing</a>
    <input class = "search" type = "text" id = "input">
    <b class = "navBar logInButton" id = "logIn">Log In</b>
    <b class = "navBar logOutButton" id = "logOut">Log Out</b>
    </div>
  <div class = "home page">
    <div id="filter">
      <h4>Filters</h4>
      <input type="checkbox" id="textbooks" name="textbooks" value="textbooks">
      <label for="textbooks">Textbooks</label><br>
      <input type="checkbox" id="electronics" name="electronics" value="electronics">
      <label for="electronics">Electronics</label><br>
    </div>
   <div id="content">
      <div class="item electronics">
        <img src="https://i.ebayimg.com/images/g/gqMAAOSw1CNjW5R~/s-l500.jpg" alt="placeholder" class="item_pic">
      <div class="description">
        <p>Laptop <br></p>
        <p>$100 <br></p>
        <p>Seller: xyz <br></p>
        <a href="#contactseller">Contact Seller</a>
      </div>
      </div>
      <div class="item textbooks">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/English_textbook.jpg" alt="placeholder" class="item_pic">
      <div class="description">
        <p>Textbook <br></p>
        <p>$50 <br></p>
        <p>Seller: abc <br></p>
        <a href="#contactseller">Contact Seller</a>
      </div>
      </div>
   </div>
  </div>
  <script src="js/newjs.js" charset="utf-8">
  </script>
  <div class = "categories page">
  </div>
  <div class = "myInfo page">
    <br><br>
    INFO PAGE
    <div class="sidebar">
      <div class="options">
        <div class="option active">Account Settings</div>
        <div class="option">Your Listings</div>
        <div class="option">Wishlist</div>
        <div class="option">Messages</div>
      </div>
    </div>
  </div>
  <div class = "createlisting page">
    
  </div>
  <div class = "login page">
    <div class = "signIn">
      <center> Sign In </center>
      <input class = "email" type = "text" id = "input" placeholder="Email">
      <input class = "password" type = "password" id = "input" placeholder="Password">
      <center >
      <div class="optionButtons">
        <button type="button" class="cancelButton" id = "cancel">Cancel</button>
        <button type="button" class="signUpButton" id = "signIn">Sign In</button>
      </div>
      <a class = "haveAccount" href = "#" id = "haveAccount">Don't have an account? Sign up</a>
        <br>
      <a class = "forgotPassword" href = "#" onClick = "javascript:forgotPassword()" id = "forgotPassword">Forgot Password</a>
      </center>
    </div>
  </div>
  <div class = "signUpPage page">
    <div class = "signUp">
      <center> Sign Up </center>
      <input class = "email" type = "text" id = "input" placeholder="Email">
      <input class = "password" type = "password" id = "input" placeholder="Password">
      <input class = "password" type = "password" id = "input" placeholder="Confirm Password">
      <center>
      <div class="optionButtons">
        <button type="button" class="cancelButton" id = "cancel2">Cancel</button>
        <button type="button" class="signUpButton" id = "signIn2">Sign Up</button>
      </div>
      <a class = "signUp" href = "#" id = "signInButton">Already have an account? Sign in</a>
      </center>
    </div>
  </div>
</body>
</html>

