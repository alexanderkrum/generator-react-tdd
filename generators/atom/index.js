"use strict";
const relativeDestination = require("../../domain/path");
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: "input",
        name: "atomName",
        message: "Atom module name:"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const destination = relativeDestination(
      `src/components/atoms/${this.props.atomName}`
    );
    this.fs.copyTpl(this.sourceRoot(), this.destinationPath(`${destination}`), {
      name: this.props.atomName
    });
  }
};
