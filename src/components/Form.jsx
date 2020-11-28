/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40%;
    margin: auto;
    margin-top: 20px;
    font-weight: bold;
    color: navy;
    background: lightgrey;
    padding: 2em;
  }
  .textesize {
    height: 100px;
    width: 300px;

    margin-bottom: 20px;
    resize: none;
    border-radius: 5px;
  }

  input {
    height: 40px;
    width: 300px;

    border-radius: 5px;
  }

  button {
    -moz-box-shadow: inset 0px 1px 0px 0px #97c4fe;
    -webkit-box-shadow: inset 0px 1px 0px 0px #97c4fe;
    box-shadow: inset 0px 1px 0px 0px #97c4fe;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.05, #000080),
      color-stop(1, #1e62d0)
    );
    background: -moz-linear-gradient(center top, #000080 5%, #1e62d0 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#000080', endColorstr='#1e62d0');
    background-color: #000080;
    -webkit-border-top-left-radius: 5px;
    -moz-border-radius-topleft: 5px;
    border-top-left-radius: 5px;
    -webkit-border-top-right-radius: 5px;
    -moz-border-radius-topright: 5px;
    border-top-right-radius: 5px;
    -webkit-border-bottom-right-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-left-radius: 5px;
    text-indent: 0;
    display: inline-block;
    color: #ffffff;
    font-family: arial;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    height: 40px;
    line-height: 40px;
    width: 140px;
    text-decoration: none;
    text-align: center;
    text-shadow: 0px 1px 0px #1570cd;
    margin-bottom: 10%;
  }

  /* .className:hover {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.05, #1e62d0),
      color-stop(1, #000080)
    );
    background: -moz-linear-gradient(center top, #1e62d0 5%, #000080 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#000080');
    background-color: #1e62d0;
  }

  .className:active {
    position: relative;
    top: 1px;
    background:red;
  } */

  @media (min-width: 1224px) {
    input {
      width: 800px;
    }
    .textesize {
      width: 800px;
    }
    button {
      margin-bottom: 10%;
    }
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { name, email, objet } = this.state;
    return (
      <DIV className="formContact">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            name="name"
            placeholder="Barack Obama"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="Email">E-mail:</label>
          <input
            type="text"
            placeholder="Barack-Obama@wcs.com"
            onChange={this.handleChange}
            name="email"
            value={email}
          />
          <label htmlFor="objet">Objet:</label>
          <input
            type="text"
            placeholder="votre objet"
            onChange={this.handleChange}
            name="objet"
            value={objet}
          />
          <label htmlFor="texte">Texte:</label>
          <textarea
            className="textesize"
            type="textarea"
            name="textValue"
            onChange={this.handleChange}
            rows="10"
            cols="30"
          />
          <button type="button" onClick={this.handleSubmit}>
            Envoyer
          </button>
        </form>
      </DIV>
    );
  }
}
export default Form;
