class Adapter {

  static getBooks() {
    return fetch(`http://localhost:3000/books`).then(res => res.json())
  }

  static getBook(id) {
    return fetch(`http://localhost:3000/books/${id}`).then(res => res.json())
  }

  static getUsers() {
    return fetch(`http://localhost:3000/users`).then(res => res.json())
  }

  static getUser(id) {
    return fetch(`http://localhost:3000/users/${id}`).then(res => res.json())
  }

  static patchBook(bookData) {
    const id = bookData.id
    delete bookData.id
    const url = `http://localhost:3000/books/${id}`
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookData)
    }

    return fetch(url, options)

  }

}
