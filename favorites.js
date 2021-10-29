class favorites {
  constructor(
    klass = "favorites",
    like = "j'aime",
    notlike = "je n'aime plus"
  ) {
    this.klass = klass;
    this.like = like;
    this.notlike = notlike;
  }
  get() {
    return this.klass + this.like + this.notlike;
  }
}

module.exports = favorites;
