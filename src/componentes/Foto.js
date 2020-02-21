import React, { Component } from "react";
import "./Foto.css";

export default class Foto extends Component {
  
  render() {
    return (
      <div className="col-xs-12 col-md-6 col-lg-3">
        <div className="card">
          <img src={this.props.urlFoto} className="card-img-top" alt={this.props.titulo} />
          <div class="card-body">
            <h5 class="card-title">{this.props.id}</h5>
            <p class="card-text">{this.props.titulo}</p>
          </div>
        </div>
      </div>
    );
  }
}
