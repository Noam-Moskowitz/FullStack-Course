import "./PersonalDetailsProps.css"


const PersonalDetailsProps = (props) => {
    return ( 
        <div className="propsBorder">
            <h1>{props.fullName}</h1>
        </div>
     );
}
 
export default PersonalDetailsProps;