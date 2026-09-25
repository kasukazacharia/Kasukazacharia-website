// Temporary array to store data (Simulation Data)
let students = [
    {
        fullName: "Kasuka Zacharia",
        gender: "Male",
        indexNo: "S0101/0001/2023",
        stream: "Science",
        email: "kasuka@gmail.com",
        address: "P.O. Box 131, Mbeya",
        phone: "0712345678"
    }
];

// DOM Elements
const studentForm = document.getElementById("studentForm");
const fullNameInput = document.getElementById("fullName");
const genderInput = document.getElementById("gender");
const indexNoInput = document.getElementById("indexNo");
const streamInput = document.getElementById("stream");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const studentIndexInput = document.getElementById("studentIndex");
const submitBtn = document.getElementById("submitBtn");
const studentTableBody = document.getElementById("studentTableBody");

// 1. READ: Display data in the table
function renderTable() {
    studentTableBody.innerHTML = "";
    
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.fullName}</td>
            <td>${student.gender}</td>
            <td>${student.indexNo}</td>
            <td>${student.stream}</td>
            <td>${student.email}</td>
            <td>${student.address}</td>
            <td>${student.phone}</td>
            <td>
                <button class="btn-edit" onclick="editStudent(${index})">Edit</button>
                <button class="btn-delete" onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

// 2. CREATE & UPDATE: Add or edit student record
studentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const studentData = {
        fullName: fullNameInput.value.trim(),
        gender: genderInput.value,
        indexNo: indexNoInput.value.trim(),
        stream: streamInput.value,
        email: emailInput.value.trim(),
        address: addressInput.value.trim(),
        phone: phoneInput.value.trim()
    };

    const index = studentIndexInput.value;

    if (index === "") {
        // CREATE: Add new record
        students.push(studentData);
    } else {
        // UPDATE: Modify existing record
        students[index] = studentData;
        studentIndexInput.value = "";
        submitBtn.innerText = "Add Student";
        submitBtn.style.backgroundColor = "#28a745";
    }

    studentForm.reset();
    renderTable();
});

// 3. EDIT (Update Part): Load data into form for editing
function editStudent(index) {
    const student = students[index];

    fullNameInput.value = student.fullName;
    genderInput.value = student.gender;
    indexNoInput.value = student.indexNo;
    streamInput.value = student.stream;
    emailInput.value = student.email;
    addressInput.value = student.address;
    phoneInput.value = student.phone;
    studentIndexInput.value = index;

    submitBtn.innerText = "Save Changes";
    submitBtn.style.backgroundColor = "#ffc107";
}

// 4. DELETE: Remove student from the list
function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this record?")) {
        students.splice(index, 1);
        renderTable();
    }
}

// Render the table when the page loads for the first time
renderTable();