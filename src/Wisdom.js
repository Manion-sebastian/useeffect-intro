

export default function Wisdom(props) {

    


    return (
        <div>
            <h1>Kanye Speaks</h1>
            <h2>
            {props.wisdom}
            </h2>
            <button onClick={props.handleBestowWisdom}>Ask for wisdom</button>
        </div>
    )
}