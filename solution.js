const logPost =   (id) =>{
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  	.then(response => response.json())
  	.then(post => console.log( `Title:${post.title} 
  								Post: ${post.body}`)) 	
}

logPost(3)

const logUsers = () =>{
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(user => user.map(user =>{
		console.log(user.name)
	}))
}
logUsers()

const getBizUsers = () =>{
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
	.then(user => user.filter(user =>{
		console.log(user.email.endsWith(".biz"))
 }))
}
getBizUsers()

const longestPost =() =>{
	fetch("https://jsonplaceholder.typicode.com/posts")
	.then(response => response.json())
	.then(posts =>{
		let running = 0
		for(let post of posts){
			if(post.body.length() > running){
				running = post.body.length()
			}
		}
		return running
	})
}
longestPost()

const getCompletedTasks = () =>{
	fetch("https://jsonplaceholder.typicode.com/todos")
	.then(response => response.json())
	.then(todos => todos.filter(todo => todo.completed === true))
	.then(todo => console.log(todo))
}

getCompletedTasks()

const displayPhotos = () =>{
	fetch("https://jsonplaceholder.typicode.com/photos")
	.then(response => response.json())
	.then(photos => (){
		for(let i = 0; i < 10; i++){
			arr.push(photos)
			}
		}
	return arr







displayPhotos()