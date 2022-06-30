//typing variable Props
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = ({name,messageCount,isLoggedIn}: GreetProps) => {

    //if message count is passed as props use that value if not use 0
    messageCount = 0

    return(
        <div>
                <h2>
                    {
                        isLoggedIn
                        ? `Welcome ${name}! You have ${messageCount} unread messages`
                        : 'Welcome guest'
                    }
                </h2>
        </div>
    )
}




//use type when building applications and interfaces when builing libraries