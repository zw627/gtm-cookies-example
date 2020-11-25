/**
   * A function to set cookie.
   * @param {string} name - Cookie name.
   * @param {string} value - Cookie value.
   * @param {number} days - Days before expiration.
   * @returns {void} Nothing.
   */
function setCookieGtm(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var expirationDate = date.toUTCString();
  document.cookie =
    name + "=" + value + "; expires=" + expirationDate + "; path=/";
}

/**
   * A function to read the specified cookie's value.
   * @param {string} name - Cookie's name.
   * @returns {string} The specified cookie's value.
   */
function getCookieValueGtm(name) {
  var array = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
  return array ? array.pop() : "";
}

