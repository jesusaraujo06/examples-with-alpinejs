componentTask = function () {
  return {
    jobList: Alpine.$persist([
      {
        id: 1,
        title: "Back End Developer",
        type: "Full-time",
        location: "Remote",
        category: "Engineering",
      },
      {
        id: 2,
        title: "User Interface Designer",
        type: "Part-time",
        location: "Remote",
        category: "Design",
      },
    ]),

    activeJob: {
      id: null,
      title: "Job title",
      type: "Part-time",
      location: "Remote",
      category: "Design",
    },

    editMode: false,

    openNewJob: false,

    addJob() {
      var id = this.jobList.length;
      this.activeJob.id = id += 1;
      this.jobList.unshift(this.activeJob);
      this.openNewJob = false;
    },
    editJob(id) {
      this.editMode = true;
      this.openNewJob = true;
      this.activeJob = this.jobList.find((item) => {
        return item.id == id;
      });
    },

    updateJob(id) {
      var getJob = this.jobList.find((item) => {
        return item.id == id;
      });
      if (getJob) {
        this.jobList.splice(this.jobList.indexOf(getJob), 1, this.activeJob);
      }
      this.openNewJob = false;
    },
    removeJob(id) {
      var find = this.jobList.find((item) => {
        return item.id == id;
      });
      if (find) {
        this.jobList.splice(this.jobList.indexOf(find), 1);
      }
    },
  };
};

// window es el alcance global en JavaScript, lo que significa que ahora será accesible en cualquier lugar task.componentTask
// Es importante ya que Alpine accede solo a las funciones globales
window.task = {
  componentTask,
};
