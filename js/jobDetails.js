import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const jobId = params.get("id");

const jobRef = doc(db, "jobs", jobId);
const jobSnap = await getDoc(jobRef);

if (jobSnap.exists()) {
  const job = jobSnap.data();

  document.getElementById("jobDetails").innerHTML = `
    <h1>${job.title}</h1>
    <p><b>Company:</b> ${job.company}</p>
    <p><b>Location:</b> ${job.location}</p>
    <p><b>Type:</b> ${job.type}</p>
    <p><b>Salary:</b> ${job.salary}</p>
    <h3>Description</h3>
    <p>${job.description}</p>
  `;
}