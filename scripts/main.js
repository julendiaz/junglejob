import { Job } from "./modules/job.js";
import { Modals } from "./modules/modals.js";
import { toggleSuper } from "./modules/listeners.js";
import createCard from "./modules/dom.js";
import dragger from "./modules/dragger.js";

const newJob = new Job("Starbucks", "Tech Lead", "SanFran", true);

createCard(newJob, "wish-list");
dragger();
Modals.showModal();
Modals.closeModal();
toggleSuper();
