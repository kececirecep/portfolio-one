import React from 'react' 


const Services = (props) => { 
    const styles = {
        color:props.colorText,
        fontSize:props.fontSize
    }
    return (
        <div className={`services-box w-1/3 mx-16 rounded border-2 border-transparent hover:border-b-2 ${props.borderColor}`}>
            <div style={styles}>
                {props.servicesIcon}
            </div>
            <h1>{props.servicesName}</h1>
        </div>
    )
}

export default Services