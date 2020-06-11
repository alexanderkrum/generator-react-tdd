"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // This method adds support for a `--coffee` flag
    this.option("samefolder");
  }

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

    if (this.options.samefolder) {
      return Promise.resolve();
    }

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationPath(
        `${this.options.samefolder ? "./" : this.props.projectName}`
      ),
      null,
      null,
      { globOptions: { dot: true } }
    );
  }
};
