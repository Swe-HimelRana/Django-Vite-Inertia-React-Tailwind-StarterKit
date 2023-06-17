export default function Index(props) {
    console.log(props)
    return (
        <div>
        <h1 className="text-2xl text-gray-400">D.I.R.T Stack Tutorial</h1>
        <p>The D.I.R.T Stack consists of 4 major pieces</p>
        <ul>
            <li><strong>D</strong>jango</li>
            <li><strong>I</strong>nertia</li>
            <li><strong>R</strong>eact</li>
            <li><strong>T</strong>ailwind CSS</li>
        </ul>
        <hr />
        <ul className="py-2 my-3 rounded bg-gray-50 mx-2">
            <li className="bg-black text-gray-50 text-center">Info from Inertia share</li>
            <li>Is Authenticated? : {props.isAuthenticated ? " Yes" : " No"}</li>
            <li>User Details: {JSON.stringify(props.user, null, 2)}</li>
            <li>IP: {props.ip}</li>
            <li>UserAgent: {props.userAgent}</li>
        </ul>
    </div>
    )
}