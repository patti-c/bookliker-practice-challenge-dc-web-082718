class Controller {

  static init() {
    Adapter.getBooks().then(Controller.renderBookList)
  }

  static renderBookList(books) {
    books.forEach(Controller.renderBookListElement)
  }

  static renderBookListElement(bookData) {
    const newBook = new Book(bookData);
    const list = document.querySelector('#list-panel');
    list.append(newBook.listElement());
  }

  static handleListListener(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    Adapter.getBook(id).then(Controller.renderBookShow)
  }

  static renderBookShow(bookData) {
    const showPanel = document.querySelector('#show-panel')
    showPanel.innerHTML = "";
    const book = new Book(bookData);
    showPanel.append(book.showElement());
  }

  static handleRead(e) {
    let bookId = e.target.dataset.id
    Adapter.getUser(1).then(function(userJson) {
      let user = new User(userJson);
      user.readBook(bookId);
    })
  }

}
