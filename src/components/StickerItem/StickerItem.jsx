import { Component } from "react";

class StickerItem extends Component {
    handleClick = () => {
        this.props.onSelect(this.props.label);
    };

    render() {
        return (
            <div
                className="StickerItem"
                onClick={this.handleClick}
                style={{ cursor: "pointer" }}
            >
                <img
                    src={this.props.img}
                    alt={this.props.label}
                    width="120"
                />
                <p>{this.props.label}</p>
            </div>
        );
    }
}

export default StickerItem;
