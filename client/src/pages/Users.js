import React from 'react';

function Users() {
  return (
    <div className="mt-3 text-center">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Kullanıcı isimleri</th>
              <th>Kullanıcı yetkisi</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>admin</td>
              <td>admin</td>
              <td>
                <button className="btn btn-warning" type="submit" name="permission" value="xx"
                  style={{marginRight: 10}}>Yetki ver</button>
                <button className="btn btn-info" type="submit" name="edit" style={{marginRight: 10}}>Düzenle</button>
                <button className="btn btn-danger" name="user_delete" value="xx" type="submit">Sil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav>
        <ul className="pagination justify-content-center mt-3">
          <li className="page-item"><a className="page-link" href="/">1</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Users;
