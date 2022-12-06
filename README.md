https://shamim-sarker.web.app/

http://localhost:5000/
http://localhost:5000/

npm run build && firebase deploy

useEffect(() => {
        fetch(`https://dress-recycle-server.vercel.app/users/${user?.email}`, {
            headers: {authorization: localStorage.getItem('token')}
        })
            .then(res => res.json())
            .then(data => setUserInfo(data))
            .catch(err => console.log(err));
    }, [user?.email]);