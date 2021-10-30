class favorites {
  constructor(
    ButtonClass = "favorites",
    like = "i like",
    notlike = "i don't like",
    IdCounter = "counter"
  ) {
    this.ButtonClass = ButtonClass;
    this.like = like;
    this.notlike = notlike;
    this.IdCounter = IdCounter;
  }
  get() {
    return checkACookieExists();
  }
  getParameters() {
    return this.ButtonClass + this.like + this.notlike + this.IdCounter;
  }
  change(id) {
    let cookie = checkACookieExists("favorites");
    if (cookie != false) {
      var index = cookie.indexOf(id);
      if (index !== -1) cookie.splice(index, 1);
      else cookie.push(1);
    } else {
      cookie = [id];
    }
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 360);
    document.cookie =
      "favorites=" +
      JSON.stringify(cookie) +
      ";path=/;expires=" +
      d.toGMTString();
    this.update();
    return cookie;
  }
  update() {
    //find counter id and change text
    let nbr=checkACookieExists();
    if(nbr!=false)
    document.getElementById(this.IdCounter).textContent = nbr.length;
  }
}


function checkACookieExists() {
  if (document.cookie)
    return JSON.parse(
      document.cookie
        .split("; ")
        .find((row) => row.startsWith("favorites="))
        .split("=")[1]
    );
  else return false;
}


module.exports = favorites;
