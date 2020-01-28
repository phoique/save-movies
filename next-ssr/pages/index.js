import React from 'react';
import cookie from 'js-cookie';
import Link from 'next/link';
import Layout from '../components/layout';

const Home = () => {
    return(
        <Layout title="Film Kaydet | Anasayfa">
            <header className="row header-main text-center mt-5">
                <h1 className="col-md-12 col-sm-12 display-5 font-weight-bold">İzlediğin filmleri kaydetmek çok kolay.</h1>
                <p className="col-md-12 col-sm-12 header-text text-secondary">
                    {
                        (cookie.get('token')) ? 
                            'İzlediğin filmi mi kaydetmek istiyorsun, hadi o zaman hemen kaydet.' 
                            :
                            'İzlediğin filmi mi kaydetmek istiyorsun, yoksa arkadaşın ile paylaşmak mı? Daha fazlası için lütfen kayıt ol ve keyfini çıkar.'
                    }
                </p>
                {
                    (cookie.get('token')) ? 
                        null 
                        :
                        <Link href="/register">
                            <a className="col-md-12 col-sm-12">
                                <button type="button" className="btn btn-primary header-register font-weight-bold">Kayıt Ol</button>
                            </a>
                        </Link>
                }
            </header>
        </Layout>
    );
};

export default Home;
