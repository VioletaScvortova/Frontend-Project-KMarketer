document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not corret');
            }
            return response.json();
        })
        .then((usersData) => {
            //used the user`s id to fetch his posts
            handleUser(usersData);
        })
        .catch((error) => {
            console.log(
                'There was a problem with the fetch operation:', 
                error.message
            );
        });

    const handleUser = (users) => {
        const form = document.querySelector('#user_block form');
        const input = form.querySelector('input[type=text]');

        form.addEventListener('submit', handleSubmit);

        function handleSubmit(event) {
            event.preventDefault();
            let inputValue = input.value;
            let myUser = users.find((el) => el.name === inputValue);
            let myUserId = myUser.id;
         
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${myUserId}`)
                .then((response) => {
                    return response.json();
                })
                .then((posts) => {
                    console.log(posts);
                });
        }
    };
});


