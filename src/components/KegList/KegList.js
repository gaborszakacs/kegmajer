import "./KegList.css";
import React from "react";
import Keg from "./../Keg/Keg.js";

export default class KegList extends React.Component {
    render() {
        return <div className="KegListContainer">
            <h1>Kegs in Stock</h1>
            {this.props.kegs.map((keg, index) => (
                <Keg keg={keg} key={index} onResult={i => this.props.onKegSelected(i)}/>
            ))}
        </div>
    }
}
