import React from 'react';

const Card = ({id,name,email}) => {


    return(


        <div className= ' tc bg- linear-gradient(299deg, #21D4FD 0%, #B721FF 64% dib   ma2 pa1 br4 bg-animate hover-bg-blue  b--black ba bw1   grow '>
            <img src={`https://robohash.org/${id}`} alt="asdas"/>
            <div>
    <h2>{name}</h2>
    <p>{email}</p>
            </div>
        </div>


    );


}

export default Card;