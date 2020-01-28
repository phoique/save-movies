import React from 'react';

function UserDetail({ users, userOperations }) {
  return(
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Kullanıcı ismi</th>
          <th>Kullanıcının yetkisi</th>
          <th>Kullanıcı işlemleri</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user, index) => 
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button 
                  className="btn btn-warning" 
                  type="button" 
                  name="permission"
                  style={{marginRight: 10}}
                  onClick={(event) => userOperations(event, user._id)}>Yetki ver</button>

                <button 
                  className="btn btn-info" 
                  type="button" 
                  name="edit" 
                  style={{marginRight: 10}}>Düzenle</button>

                <button 
                  className="btn btn-danger" 
                  name="user_delete" 
                  onClick={(event) => userOperations(event, user._id)}
                  type="button">Sil</button>
              </td>
            </tr>)
        }
      </tbody>
    </table>
  );
}


export default UserDetail;

