const relativeDestination = relativePath => {
  const path = process.cwd();
  const directories = relativePath.split("/");
  const mergedRelativePath = directories
    .filter(d => !path.includes(d))
    .join("/");

  return path.concat("/") + mergedRelativePath;
};

module.exports = relativeDestination;
