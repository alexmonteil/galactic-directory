import React from 'react';

// Card Component displays user card
const Card = ({id, name, email}) => {
    //or const { name, email, id } = props;
    return (
        <div className='tc bg-light-blue dib br4 pa3 ma2 grow bw2 shadow-5'>
            <img alt='users' src={`https://robohash.org/${id}?150x150`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;