import React from 'react';

function Users() {
  return (
    <div class="mt-3 text-center">
      <div class="table-responsive">
        <table class="table">
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
                <button class="btn btn-warning" type="submit" name="permission" value="xx"
                  style={{marginRight: 10}}>Yetki ver</button>
                <button class="btn btn-info" type="submit" name="edit" style={{marginRight: 10}}>Düzenle</button>
                <button class="btn btn-danger" name="user_delete" value="xx" type="submit">Sil</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav>
        <ul class="pagination justify-content-center mt-3">
          <li class="page-item"><a class="page-link" href="/">1</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Users;
