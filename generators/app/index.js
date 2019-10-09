"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const clone = require("git-clone");


module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the cool ${chalk.red("react-tdd")} generator!`));

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Your project name",
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationPath(`${this.props.projectName}`),
      { title: "Create project folder" }
    );
  }
};
