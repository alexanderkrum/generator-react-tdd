"use strict";
const Generator = require("yeoman-generator");

const relativeDestination = relativePath => {
  const path = process.cwd();
  const directories = relativePath.split("/");
  const mergedRelativePath = directories
    .filter(d => !path.includes(d))
    .join("/");

  return path.concat("/") + mergedRelativePath;
};

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: "input",
        name: "organismName",
        message: "Organism module name:"
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const destination = relativeDestination(
      `src/components/organism/${this.props.organismName}`
    );
    this.fs.copyTpl(this.sourceRoot(), this.destinationPath(`${destination}`), {
      name: this.props.organismName
    });
  }
};
