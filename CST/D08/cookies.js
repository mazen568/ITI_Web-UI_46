function getCookie(cookieName) {
    if (arguments.length !== 1) {
      throw new Error("expects exactly 1 parameter");
    }

    if (typeof cookieName !== "string" || cookieName === "") {
        throw new TypeError("The cookie name must be a string and not empty.");
      }
  
    let cookies = document.cookie.split("; ");
    //hena htgeeb [username=mazen,age=22]
    for (let i = 0; i < cookies.length; i++) {
      let elem = cookies[i].split("=");
      if (elem[0] === cookieName) {
        return elem[1];
      }
    }
    return null;
  }


  function setCookie(cookieName, cookieValue, expiryDate) {
    if (arguments.length < 2 || arguments.length > 3) {
        throw new Error("expects 2 or 3 parameters");
    }

    let cookie = cookieName + "=" + cookieValue;

    if (expiryDate) {
        cookie += "; expires=" + expiryDate;
    }
    cookie += "; path=/";
    document.cookie = cookie;
}

function deleteCookie(cookieName) {
    if (arguments.length !== 1) {
        throw new Error("expects exactly 1 parameter");
    }

    if (typeof cookieName !== "string" || cookieName === "") {
        throw new Error("cookie name must be a string and not empty");
    }

    document.cookie = cookieName + "=; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/";
}


function allCookieList() {
    let cookies = document.cookie;

    if (!cookies) {
        return []; 
    }

    let cookieArray = cookies.split("; ");
    
    return cookieArray; //htrg3 7aga msln[user=mazen, age=22]
}

function hasCookie(cookieName) {
    if (arguments.length !== 1) {
        throw new Error("expects exactly 1 parameter");
    }

    if (typeof cookieName !== "string" || cookieName === "") {
        throw new Error("cookie name must be a string and not empty");
    }


    return getCookie(cookieName) !== null;
}



  function getTest() {
    let value = getCookie("user");
    document.getElementById("output").innerText ="cookie value: " + value;
  }

  function setTest() {
    setCookie("user", "mohamed", new Date("2026-1-27"),);
    setCookie("age", 22, new Date("2026-1-27"),);
    setCookie("add", "cairo", new Date("2026-1-27"),);

    document.getElementById("output").innerText ="cookie set";
  }

  function deleteTest(){
    deleteCookie("user");
    document.getElementById("output").innerText = "cookie deleted";

  }
   
  function testCheck() {
    let exists = hasCookie("user");
    document.getElementById("output").innerText =  exists?"cookie user exists and value: "+getCookie("user"):"cookie user does not exit";
  }
  function testListCookies() {
    let cookies = allCookieList();
    document.getElementById("output").innerText = "All Cookies: " + cookies;
  }
  
  