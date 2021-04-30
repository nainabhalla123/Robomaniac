import React from 'react';


const Card=(props)=>{
	return (
		<div className=' tc bg-gray dib br3 pd4 ma2 grow bw2 shadow-5'>
		<img  alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>
		
		<h1>{props.name}</h1>
		<div>
		<p>{props.username}</p>
		<p>{props.email}</p>
		</div>
		</div>
		);
}
export default Card;