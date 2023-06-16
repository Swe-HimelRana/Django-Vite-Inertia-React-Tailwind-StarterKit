export default function ContactPage({email, portfolio, blog}){
    return(
        <div className="flex flex-col gap-2">
            <p>Contact</p>
            <p>{email}</p>
            <p>{portfolio}</p>
            <p>{blog}</p>
        </div>
    )
}