import React from 'react';

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm fixed-top navbar-light mt-2">
        <div class="container">
          <a class="navbar-brand font-weight-bold" href="/"><h4>Navbar</h4></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar1">
              <ul class="navbar-nav">

              </ul>
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item mr-2 mt-2">
                    <a href="/register">
                      <button type="button" class="btn btn-success navbar-rad">Kayıt Ol</button>
                    </a>
                    
                  </li>
                  <li class="nav-item mt-2">
                    <a href="/login">
                      <button type="button" class="btn btn-outline-primary navbar-rad">Giriş Yap</button>
                    </a>
                  </li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;