import { Component } from "react";
import UserComponent from "../userComponent/userComponent";


class UserList extends Component {
    state = {
        users: [
            { id: 1, firstName: 'User 1', lastName: 'Userovich 1', likes: 'likes: 2', },
            { id: 2, firstName: 'User 2', lastName: 'Userovich 2', likes: 'likes: 3', },
            { id: 3, firstName: 'User 3', lastName: 'Userovich 3', likes: 'likes: 6', },
        ],
    }
    
    render() {
        const { users } = this.state;
        const userLiList = users.map((user) => (
            <li key={user.id}>
                <UserComponent id={user.id} firstName={user.firstName} lastName={user.lastName} likes={user.likes} />
            </li>
        ));

        return (
            <div>
                <h1>Users list</h1>
                <ul>{userLiList}</ul>  
            </div>
        );
    }
}

export default UserList;