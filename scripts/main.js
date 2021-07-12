import Job from "./modules/job.js";
import UI from "./modules/ui.js";
import { Modals } from "./modules/modals.js";
import { toggleSuper } from "./modules/listeners.js";
import dragger from "./modules/dragger.js";

document.addEventListener("DOMContentLoaded", (e) => {
  UI.displayJobs();
  dragger();
  Modals.openModal();
  Modals.closeModal();
  toggleSuper();
});

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  const company = document.querySelector("#company").value;
  const position = document.querySelector("#position").value;
  const location = document.querySelector("#location").value;
  const isSuperJob = document.querySelector("#super").checked;
  const stage = Modals.getCurrentStage();
  console.log(isSuperJob);

  const job = new Job(company, position, location, isSuperJob, stage);

  Modals.validateForm();
  UI.addJobToStage(job);
  UI.clearInputs();

  // toggleSuper();
});
