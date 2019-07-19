import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';

function Users() {

  // Tüm kullanıcıların tutulacağı state
  const [users, setUsers] = useState({ users: [], pages: null });

  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState();

  // Tüm değerleri saniye başı çeken yaşam methodu
  useEffect(() => {

    const usersData = axios({
      url: `http://localhost:3001/api/users/${showPage}`,
      headers: {
        'x-access-token': localStorage.getItem('token')
      },
      method: 'get',
    });

    usersData.then(user => 
      setUsers({
        users: user.data.users, 
        pages: user.data.pages_number
      }));

    usersData.catch(error => console.log(error));
  });

  const ShowPage = (showPage) => setShowPage(showPage);

  return (
    <div className="mt-3 text-center">
      <div className="table-responsive">
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
              users.users.map((user, index) => 
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-warning" type="submit" name="permission"
                      style={{marginRight: 10}}>Yetki ver</button>
                    <button className="btn btn-info" type="submit" name="edit" style={{marginRight: 10}}>Düzenle</button>
                    <button className="btn btn-danger" name="user_delete" type="submit">Sil</button>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        (users.pages > 1) ? 
          <Pagination pages={users.pages} url={'mymovies'}  ShowPage={ShowPage}/> 
        : 
          null
      }
    </div>
  );
}

export default Users;
