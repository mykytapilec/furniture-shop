
export const LinkCard = ({link}) => {
    return (
        <>
            <h2>link</h2>
            <p>your link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>from: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
        </>
    )
}