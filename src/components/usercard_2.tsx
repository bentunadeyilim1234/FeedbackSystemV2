const ResponsiveFeedbackText = ({...props}) => (
    <div>
        <p className="hidden sm:block">
            <span className="italic">{`"${props.feedback}"`}&nbsp;&nbsp;</span>
            by <strong><a target="_blank" href={`https://www.roblox.com/users/${props.userId}/profile`}>{props.playerName}</a></strong>
        </p>
        <p className="block sm:hidden">
            <a href="#"><span className="italic">{`"${props.feedback}"`}&nbsp;&nbsp;</span></a>
        </p>
    </div>
)

const UserCard = ({...props}) => { 
    return(
        <li key={props.feedbackId} className="bg-white dark:bg-gray-800 rounded-lg shadow-md py-4 px-2 sm:px-4 flex place-items-center mb-4">
            <div className="flex grow space-x-3 place-items-center">
                <span className="text-lg font-semibold hidden sm:block">{props.feedbackId}</span>
                {ResponsiveFeedbackText({...props})}
            </div>
            <div className="flex-none flex flex-row space-x-3 place-items-center">
                <p>{props.rating}/10</p>
                <button className="text-red-500 hover:text-red-700" onClick={props.onRemove}>Delete</button>
            </div>
        </li>
    )
}

export default UserCard;