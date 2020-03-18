import React from 'react';
import Card from './Card';

// CardList Component maps array and returns users as cards
const CardList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <Card 
                            key={user.id} 
                            id={user.id} 
                            name={user.name} 
                            email={user.email} 
                            />
                    );
                })
            }
        </div>
    );
}

export default CardList;