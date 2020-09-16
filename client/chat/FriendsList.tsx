import React, { useState } from "react";

interface FriendsState {
    friends: string,
}

const FriendsList : React.FC = () => {
    //naming convention to put set in front of the new state?
    const [friends, setFriends] = useState<FriendsState>({
        friends : "",
    })

    return (
        <div id="friends-list">
            <ul className="friends">
                <li className="friend-name">Marcus Valverde</li>
                <li className="friend-name">Cherie Zhong</li>
            </ul>
        </div>
    )
};

export default FriendsList;