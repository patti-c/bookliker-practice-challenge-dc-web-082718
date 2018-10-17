class Book {

  constructor({id, title, description, img_url, users}) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.img_url = img_url;
    this.users = users;
  }

  listElement() {
    const li = document.createElement('li');
    li.dataset.id = this.id;
    li.innerText = this.title;
    li.addEventListener('click', Controller.handleListListener)
    return li;
  }

  showElement() {
    const div = document.createElement('div')

    const heading = document.createElement('h2')
    heading.innerText = this.title;
    div.append(heading);

    const image = document.createElement('img');
    image.src = this.img_url;
    div.append(image);

    const description = document.createElement('p');
    description.innerText = this.description;
    div.append(description);

    const btn = document.createElement('button');
    btn.innerText = "Read Book"
    btn.dataset.id = this.id
    btn.addEventListener('click', Controller.handleRead)
    div.append(btn)

    return div;
  }

}
