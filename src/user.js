class User {

  constructor({id, username}) {
    this.id = id;
    this.username = username;
  }

  readBook(bookId) {

    let bookData
    let userData = {
      id: this.id,
      username: this.username
    }

    Adapter.getBook(bookId)
    .then(function(bookJson) {
      bookData = bookJson;
      bookData.users.push(userData);
      Adapter.patchBook(bookData);
    })
  }

}
