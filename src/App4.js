import React from "react"
export default class App extends React.Component {


    render() {

        return (
            <div> jello</div>
        )
    }
    componentDidMount() {
        let x = new XMLHttpRequest();
        x.onload = function () {
            console.log(x.response)
        }
        x.onerror = function () {
            console.log("eer", x)
        }
        x.responseType = "json";
        x.open("GET", "https://jsonplaceholder.typicode.com/posts")
        x.send();
        // fetch("https://jsonplaceholder.typicode.com/posts").then(x => x.json()).then(data => {
        //     console.log("data", data)
        // }).catch(err => {
        //     console.log("ere", err)
        // })
    }
}