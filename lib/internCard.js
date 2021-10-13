function internCard(data) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        <h2>${data.name}</h2>
        <p>Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${data.id}</li>
            <li class="list-group-item">Email: ${data.email}</li>
            <li class="list-group-item">School: ${data.school}</li>
        </ul>
    </div>`;
}

module.exports = {internCard};