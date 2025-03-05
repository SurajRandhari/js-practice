
// const res = fetch('https://dummyjson.com/users')
//             .then(response => response.json())
//             .then(data => console.log(data));
            


            // async function fetchUsers() {
            //     try {
            //         const response = await fetch('https://dummyjson.com/users');
                    
            //         if (!response.ok) {
            //             throw new Error('Network response was not ok');
            //         }
                    
            //         const data = await response.json();
            //         console.log(data);
            //     } catch (error) {
            //         console.error('There was a problem with the fetch operation:', error);
            //     }
            // }
            
            // fetchUsers();

            (async () => {
                try {
                    const response = await fetch('https://dummyjson.com/users');
                    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            })();

