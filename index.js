// Write your code here!
//Promise
function displayPosts(posts) {
    posts.forEach(post => {
        const postList = document.querySelector('#post-list')
        const postItem = document.createElement('li')
        const title = document.createElement('h1')
        const body = document.createElement('p')

        title.textContent = post.title
        body.textContent = post.body

        postItem.append(title, body)
        postList.append(postItem)
    })
}


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts =>{
     displayPosts(posts)
})
.catch(error => console.log('Fetching error:', error))

//Async/Await

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()

        displayPosts(posts)
    } catch(error) {
        console.log('Fetching error:',error)
    }
}
fetchPosts()
