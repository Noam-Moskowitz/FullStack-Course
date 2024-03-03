import "./PersonalDetailsProps.css"


const PersonalDetailsProps = (props) => {
    return ( 
        <div className="propsBorder">
            <h2>{props.fullName}</h2>
        </div>
     );
}
 
export default PersonalDetailsProps;