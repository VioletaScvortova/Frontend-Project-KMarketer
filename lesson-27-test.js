// Lesson 27 - test

// /*document.addEventListener('DOMContentLoaded', function () { */
//     fetch('https://jsonplaceholder.typicode.com/users/10')
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Network response was not corret');
//             }
//             return response.json();
//         })
//         .then((userData) => {
    //now use the user`s id to fetch their posts
//             // console.log(userData);
//             // console.log(userData[3]);

//             let userid = userData.id;
//        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
//             // console.log(userid);
//     // now use the user's Id to fetch their posts
//        /* handleUser(usersData); */
//         })
//         .then((response) => {
//             return response.json()
//         })
//         .then(posts => {
//             console.log(posts);
//         })
//         .catch((error) => {
//         console.log(
//         'There was a problem with the fetch operation:', error.message);
//         });

document.addEventListener('DOMContentLoaded', function () {
fetch('https://jsonplaceholder.typicode.com/users/10')
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not corret');
    }
    return response.json();
})
.then((userData) => {
    //now use the user`s id to fetch their posts
handleUser(userData)
})

.catch((error) => {
console.log(
'There was a problem with the fetch operation:', error.message);
});

let handleUser = (user) => {
    console.log(user);
};
});













/*
const handleUser = (users) => {
    const form = document.querySelector('#user_block-form');
    const input = form.querySelector('input[type=text]');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        let inputValue = input.value;
        let myUser = users.find((el) => el.name === inputValue);
        let myUserId;

        if (myUser) {
            myUserId = myUser.id;
            getUserPosts(myUserId);

        } else {
            const userBlock = document.getElementById('user_block');
            const postsList = document.getElementById('user_info');
            // postsList.style.display = 'none';
            if (!!postsList) {
                userBlock.removeChild(postsList);
            }
            const errorMessage = document.createElement('p');
            errorMessage.textContent = `User with name ${inputValue} doesn't exit`;
            form.removeChild(errorMessage);
            form.appendChild(errorMessage);
        }
    }
};

const getUserPosts = {myUserId} => (
    fetch('https://jsonplaceholder.typicode.com/posts?userId=${myUserId}')
        .then({response}) => {
        return response.json();
    });
        .then({posts}) => {
    let postsList = document.getElementById('user_info');

    posts.forEach(post) => {
        const listItem = document.createElement('li');
        const postTitlte = document.createElement('h3');
        const postBody = document.createElement('p');

        postTitlte.textContent = post.title;
        postBody.textContent = post.body;

        postsList.appendChild(listItem);
        listItem.appendChild(postTitle);
        listItem.appendChild(postBody);
        });
    })
    error {(error)} => {
    console.log('Error', error);
    });
};
});
*/