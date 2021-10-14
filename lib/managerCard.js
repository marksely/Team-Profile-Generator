function managerCard(data) {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        <h2>${data.name}</h2>
        <p>Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li class="list-group-item">Office number: ${data.office}</li>
        </ul>
    </div>`;
}

module.exports = {managerCard};