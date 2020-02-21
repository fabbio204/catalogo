import React, { Component } from "react";
import "./App.css";
import Foto from "./componentes/Foto";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fotos: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then(resultado => {
        return resultado.json();
      })
      .then(json => {
        let colecaoFotos = json.map(({id, url, title}) => ({id, url, title}));
        this.setState({ fotos: colecaoFotos });
      });
  }

  render() {
    let catalogo = this.state.fotos.map(({id, url, title}) => <Foto urlFoto={url} titulo={title} id={id} />);

    return (
      <div className="App">
        <h1>Catálogo de fotos</h1>
        <div className="container">
          <div className="row">{catalogo}</div>
        </div>
      </div>
    );
  }
}

export default App;
