import { Component } from "react";

class Choice extends Component {
    render() {
        return (
            <div className="Choice">
                {this.props.selected
                    ? `You selected: ${this.props.selected}`
                    : "Click any sticker"}
            </div>
        );
    }
}

export default Choice;
