import "./PersonalDetails.css"

const PropsObject = (props) => {
    return ( 
        <div>
            <h1>Props Object</h1>
            <table>
                <tbody>
    <tr>
        <td>{props.details.name}</td>
        <td>{props.details.number}</td>
        <td>{props.details.email}</td>
    </tr>
                </tbody>
            </table>

        </div>
    );
}
 
export default PropsObject;