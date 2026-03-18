import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const btn = document.getElementById("addBtn");

btn.addEventListener("click", async () => {

  const title = document.getElementById("title").value;
  const company = document.getElementById("company").value;
  const location = document.getElementById("location").value;
  const type = document.getElementById("type").value;
  const salary = document.getElementById("salary").value;
  const description = document.getElementById("description").value;

  try {
    await addDoc(collection(db, "jobs"), {
      title: title,
      company: company,
      location: location,
      type: type,
      salary: salary,
      description: description,
      createdAt: new Date()
    });

    alert("Job Added Successfully ✅");

    document.querySelectorAll("input, textarea").forEach(el => el.value = "");

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});