import stickers from '../../data/stickers.json';
import { Component } from 'react';
import StickerItem from '../StickerItem/StickerItem';

class StickerList extends Component {
    render() {
        return (
            <div className="StickerList">
                {stickers.map((sticker) => (
                    <StickerItem
                        key={sticker.label}
                        img={sticker.img}
                        label={sticker.label}
                        onSelect={this.props.onSelect}
                    />
                ))}
            </div>
        );
    }
}

export default StickerList;
