## Save Movies Client

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001/api/](http://localhost:3001/api/) to view it in the browser.

### `npm run start:dev`

Runs the app in the development mode.<br>
Open [http://localhost:3001/api/](http://localhost:3001/api/) to view it in the browser.

The page will reload if you make edits.<br>


# EndPoints

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/ | `GET` | Empty | Status message. |
| /api/login/ | `GET` | Empty | Status message. |
| /api/login/ | `POST` | { username: '', password: ''} | User login. |
| /api/register/ | `GET` | Empty | Status message. |
| /api/register/ | `POST` | { username: '', password: ''} | User register. |
| /api/add/ | `GET` | Empty | Status message. |
| /api/add/ | `POST` | { user_id: '', name: '', genre ['x', 'y'], image_name: 'default.jpg', content: '', public_user: true or false } | add movie. |
| /api/movies/ | `GET` | Empty | Status message. |
| /api/movies/ | `POST` | { username: ''  } | User movies list. |
| /api/movies/number/ | `POST` | { username: ''  } | User movies list. Pageinate number. |
| /api/checks/ | `GET` | Empty | Check movies list. |
| /api/checks/number | `GET` | Empty | Check movies list. Paginate number. |
| /api/checks/ | `POST` | { public_true: 'movie_id' or public_false: 'movie_id' } | Movie operations. |
| /api/users/ | `GET` | Empty | Users list. |
| /api/users/number | `GET` | Empty | Users list. Paginate number. |
| /api/users/ | `POST` | { permission: 'user_id' or user_delete: 'user_id' } | Movie operations. |


