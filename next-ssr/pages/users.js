import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Pagination from '../components/Pagination';
import { getUser, deleteUser, permUser } from '../actions/users';
import UserDetail from '../components/UserDetail';
import { AuthRole } from '../utils/authentication';
import Layout from '../components/layout';
import PropTypes from 'prop-types';

function Users(props) {

  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState(1);

  const ShowPage = (showPage) => {
    setShowPage(showPage);
    props.getUser(showPage);
  };

  // Tüm değerleri saniye başı çeken yaşam methodu
  useEffect(() => {
    // eslint-disable-next-line
    props.getUser(showPage);
    // eslint-disable-next-line
  }, []);

  // Kullanıcı işlemleri silme ve güncelleme.
  const userOperations = ({ target }, user_id) => {
    if (target.name === 'permission') {
      props.permUser(user_id);
      props.getUser(showPage);
    }
    else if (target.name === 'user_delete') {
      props.deleteUser(user_id);
      props.getUser(showPage);
    }
    else if (target.name === 'edit') {
      // şu anlık düzenleme bulunmuyor.
      props.getUser(showPage);
    }
    else {
      props.getUser(showPage);
    }
  };

  return (
    <Layout>
      <div className="mt-3 text-center">
        <div className="table-responsive">
          <UserDetail users={props.users.users} userOperations={userOperations} />
        </div>
        {
          (props.users.page > 1) ?
            <Pagination pages={props.users.page} ShowPage={ShowPage} /> : null
        }
      </div>
    </Layout>
  );
}

Users.getInitialProps = async (context) => {
  AuthRole(context);
  return {};
}

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = {
  getUser,
  deleteUser,
  permUser
};

Users.propTypes = {
  getUser: PropTypes.func,
  deleteUser: PropTypes.func,
  permUser: PropTypes.func,
  users: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
