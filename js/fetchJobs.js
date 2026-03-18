import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const jobsContainer = document.getElementById("jobs");
jobsContainer.innerHTML = ""; // clear old content

const querySnapshot = await getDocs(collection(db, "jobs"));

querySnapshot.forEach(doc => {
  const job = doc.data();

  jobsContainer.innerHTML += `
    <div class="job-card">
      <h3>${job.title || "No Title"}</h3>
      <p>${job.company || "No Company"} - ${job.location || "No Location"}</p>
      <p>${job.type || "No Type"} | ${job.salary || "No Salary"}</p>
      <a href="job-details.html?id=${doc.id}">View Details</a>
    </div>
  `;
});