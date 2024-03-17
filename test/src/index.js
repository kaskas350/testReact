import React from 'react';
import * as ReactDOMClient from 'react-dom/client';


class Header extends React.Component {
   render () {
       return (<header>Это Шапка</header>)
   }
}


class App extends React.Component {
    helpText = "Help Text"
    render() {
        return (
            <div className="name">
                <Header />
                <Header />
                <Header />
                <h1>{this.helpText}</h1>
                <input placeholder={this.helpText}
                       onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
                <p>{this.helpText === "Help Text" ? "Yes" : "No"}</p>
            </div>)
    }

    inputClick() {console.log("Clicked")}
    mouseOver() {console.log("Mouse Over")}

}



const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(<App />);