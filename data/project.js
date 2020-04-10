const Projects = [
  {
    username: "Dessie",
    name: "Kbis",
    progress: 100,
    color: "info",
    result: "done"
  },
  {
    username: "Jakayla",
    name: "STATUS",
    progress: 70,
    color: "info",
    result: "clear"
  },
  {
    username: "Ludwiczakpawel",
    name: "biLAN",
    progress: 50,
    color: "info",
    result: "clear"
  },
  {
    username: "Damenleeturks",
    name: "Auths",
    progress: 100,
    color: "info",
    result: "done"
  }
];

const getProject = limit => {
  return limit ? Projects.slice(0, limit) : Projects;
};

export { Projects, getProject };
