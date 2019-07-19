import React from 'react';

function Home() {
  return (
    <header className="row header-main text-center mt-5">
      <h1 className="col-md-12 col-sm-12 display-5 font-weight-bold">İzlediğin filmleri kaydetmek çok kolay.</h1>
      <p className="col-md-12 col-sm-12 header-text text-secondary">
        {
          (localStorage.getItem('token')) ? 
          "İzlediğin filmi mi kaydetmek istiyorsun, hadi o zaman hemen kaydet." 
          :
          "İzlediğin filmi mi kaydetmek istiyorsun, yoksa arkadaşın ile paylaşmak mı? Daha fazlası için lütfen kayıt ol ve keyfini çıkar."
        }
      </p>
      {
        (localStorage.getItem('token')) ? 
        null 
        :
        <a className="col-md-12 col-sm-12" href="/register">
          <button type="button" className="btn btn-primary header-register font-weight-bold">Kayıt Ol</button>
        </a>
      }
    </header>
  );
}

export default Home;
