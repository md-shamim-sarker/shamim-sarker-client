https://shamim-sarker.web.app/

https://shamim-sarker-server.vercel.app/
https://shamim-sarker-server.vercel.app/

npm run build && firebase deploy

useEffect(() => {
        fetch(`https://dress-recycle-server.vercel.app/users/${user?.email}`, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(res => res.json())
            .then(data => setUserInfo(data))
            .catch(err => console.log(err));
    }, [user?.email]);