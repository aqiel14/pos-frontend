import React, { useState, useEffect } from 'react';
import { server } from '../../constants';
import './home.css';
import { Link } from 'react-router-dom';
export default (props) => {
  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) === null) {
      return props.history.push('/login');
    }
  }, []);

  return (
    <div className='content-wrapper'>
      {/* Content Header (Page header) */}
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'></div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <div className='center'>
        <img src='https://i.imgur.com/6SMC4x1.png' alt />
      </div>
      <section className='content '>
        {/* Topic Cards */}
        <div id='cards_landscape_wrap-2'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-4'>
                <a href>
                  <div className='card-flyer'>
                    <Link to='/sales/dashboard'>
                      <div className='text-box'>
                        <div className='image-box'>
                          <img
                            src='https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg'
                            alt
                            href='/'
                          />
                        </div>
                        <div className='text-container'>
                          <h6>Sales</h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </a>
              </div>
              <div className='col-sm-4'>
                <a href>
                  <div className='card-flyer'>
                    <Link to='/warehouse/dashboard'>
                      <div className='text-box'>
                        <div className='image-box'>
                          <img
                            src='https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg'
                            alt
                          />
                        </div>
                        <div className='text-container'>
                          <h6>Warehouse</h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </a>
              </div>
              <div className='col-sm-4'>
                <a href>
                  <div className='card-flyer'>
                    <Link to='/productiondashboard'>
                      <div className='text-box'>
                        <div className='image-box'>
                          <img
                            src='https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png'
                            alt
                          />
                        </div>
                        <div className='text-container'>
                          <h6>Production</h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  );
};
