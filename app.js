function renderUsers(users) {
    users.forEach(function (user) {
        const userItem = $(`
        <li>
          ${user.email}
        </li>
      `);
        $('#user-list').append(userItem);
    });
}
const BASE_URL = 'https://www.acme-api.com/api';
async function bootstrap() {
    const response = await fetch(`${BASE_URL}/users`);
    const { users } = await response.json();
    renderUsers(users);
}
bootstrap();