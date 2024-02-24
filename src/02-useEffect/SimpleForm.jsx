import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Adrian',
        email: 'adrian@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState, 
            [name]: value,
        });
    };

    useEffect(() => {
      console.log('useffe se llamo')
    }, []);

    useEffect(() => {
        console.log('form state change')
      }, [formState]);

    useEffect(() => {
        console.log('email change');
    }, [email]);
    
    return(
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
             <input
                type="email"
                className="form-control mt-2"
                placeholder="adrian@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {(username === 'Adrian2') && <Message />}
        </>
    );
  
};
