import { Component } from "react";


class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLikes: false,
        }
    };

    likesClick = () => {
        this.setState({
            isLikes: !this.state.isLikes,
        });
    };

    render() {
        const { id, firstName, lastName, likes } = this.props;
        let { isLikes } = this.state;
        
        return (
            <p>
                {id} {firstName} {lastName} {likes}
                <button disabled = {isLikes} onClick = {this.likesClick}>Click Like</button>
            </p>
        );
    }
}

export default UserComponent;