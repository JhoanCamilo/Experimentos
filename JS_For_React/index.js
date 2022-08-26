function getPosts(done) {
    const results = fetch("https://jsonplaceholder.typicode.com/photos");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getPosts(data => {
    data.slice(0, 12).forEach(foto => {
        const card = document.createRange().createContextualFragment(/*html*/`
        <div class="card" style="width: 18rem;">
            <img src="${foto.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3>${foto.title}</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    `);
        const main = document.querySelector("main");
        main.append(card);
    });
})