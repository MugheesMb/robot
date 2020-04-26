import React from 'react';
import Card from './Card';

const Cardp = ({arr}) =>{

    return(
        
        <div>
            
            {
            arr.map((user , i) => {
                return(

           <Card key={i} id={arr[i].id} name={arr[i].name} email={arr[i].email} />
                );
            })
      
}
  </div>      
    
    );

}
export default Cardp;