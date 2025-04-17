import { useEffect, useState } from 'react';

function Contact() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // fetch('/api/contacts')
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setContacts(data.contacts);
        //         setLoading(false);
        //     });
        
        async function fetchContacts() {
            const response = await fetch('/api/contacts');
            const data = await response.json();
            setContacts(data.contacts);
            setLoading(false);
        }
        fetchContacts();
    }, []);

    if (loading) {
        return <h1>Waiting for a response from the mock server...</h1>;
    }

    // Да плохая практика, всегда лучше вынести стили в отдельный файл
    // и использовать CSS модули или styled-components.
    // Но в данном случае это сделано чтобы не создавать лишние файлы.
    
    const styleForContacts = {
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '5px 0',
        maxWidth: '320px',
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '18px',
        marginTop: '20px',
    };

    return (
        <div>
            <div style={styleForContacts}>
                <p>Contacts</p>
                {contacts.map((contact) => (
                    <p key={contact.id}>
                        <strong>{contact.name}</strong> ({contact.role})<br />
                        {contact.phone}<br />
                        {contact.email}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Contact;
