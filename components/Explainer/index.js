import React, { Component } from "react";

export default class Explainer extends Component {
  render() {
    return (
      <div className="flex-1 background flex justify-center items-center">
        
        <div className="flex justify-center">
        <img
          src="/static/ebook.png"
          alt="GoodUp Ebook"
          width="50%"
        />
        </div>

        <style jsx>{`
          .background {
            background-image: linear-gradient(to right, #291e50, #4a3a83);
          }
        `}</style>
      </div>
    );
  }
}
