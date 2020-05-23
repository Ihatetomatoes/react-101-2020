import { useState, useEffect } from 'react';

const useContactsAPI = () => {

    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [isError, setError] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        await fetch('https://randomuser.me/api/?results=20')
            .then(response => response.json())
            .then(data => data.results.map(user => (
                {
                    title: `${user.name.first} ${user.name.last}`,
                    content: `${user.login.username}`
                }
            )))
            .then(users => {
                setUsers(users);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
                setError(true);
            });
    }

    return [{users, isLoading, isError}, fetchUsers];

}

export default useContactsAPI;