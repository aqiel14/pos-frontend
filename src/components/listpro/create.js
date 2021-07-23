import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import * as listproActions from '../../actions/listpro.action';
import { server } from '../../constants';

export default (props) => {
  const dispatch = useDispatch();
  const [multiselect, setMultiselect] = useState([]);
  const listproReducer = useSelector(({ listproReducer }) => listproReducer);
  useEffect(() => {
    console.log(multiselect);
  }, [multiselect]);

  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) === null) {
      return props.history.push('/login');
    }
    dispatch(listproActions.getDropdownProduct());
  }, []);

  const showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  }) => {
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div class='card-body'>
        <div class='form-group '>
            <Select
            placeholder={'Product Name'}
              value={multiselect}
              onChange={setMultiselect}
              isMulti
              closeMenuOnSelect={false}
              options={listproReducer.options ? listproReducer.options : null}
            />
          </div>
          <div className='form-group input-group has-feedback'>
            <input
              type='date'
              name='tanggal'
              onChange={handleChange}
              value={values.tanggal}
              className='form-control'
              placeholder='Production Date'
              className={
                errors.tanggal && touched.tanggal
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
            <div class='input-group-append'>
              <div class='input-group-text'>
                <span class='fas fa-building'></span>
              </div>
            </div>
            {errors.tanggal && touched.tanggal ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.tanggal}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
            <textarea
              name='quantity'
              onChange={handleChange}
              value={values.quantity}
              className='form-control'
              placeholder='Quanity'
              className={
                errors.quantity && touched.quantity
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            ></textarea>
            <div class='input-group-append'>
              <div class='input-group-text'>
                <span class='fas fa-building'></span>
              </div>
            </div>
            {errors.quantity && touched.quantity ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.quantity}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
          <select 
          name='order'
          id="order"
            onChange={handleChange}
              value={values.order}
              className='form-control'
              placeholder='Order Unit'>
  <option value="kg">KG</option>
  <option value="pcs">PCS</option>
</select>
            <div class='input-group-append col-3'>
              <div class='input-group-text'>
                <span class='fas fa-phone'></span>
              </div>
            </div>
            {errors.order && touched.order ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.order}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
            <input
              type='date'
              name='duedate'
              onChange={handleChange}
              value={values.duedate}
              className='form-control'
              placeholder='Due Date'
              className={
                errors.duedate && touched.duedate
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
            <div class='input-group-append col-3'>
              <div class='input-group-text'>
                <span class='fas fa-phone'></span>
              </div>
            </div>
            {errors.duedate && touched.duedate ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.duedate}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
            <input
              type='text'
              name='description'
              onChange={handleChange}
              value={values.description}
              className='form-control'
              placeholder='Description'
              className={
                errors.description && touched.description
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
            <div class='input-group-append col-3'>
              <div class='input-group-text'>
                <span class='fas fa-phone'></span>
              </div>
            </div>
            {errors.description && touched.description ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.description}
              </small>
            ) : null}
          </div>
         
          <div class='row'>
            <div class='offset-md-4 col-4'>
              <button
                type='submit'
                disabled={isSubmitting}
                class='btn btn-primary btn-block'
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className='content-wrapper'>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0 text-dark'>Create Production Material Data</h1>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <div className='content'>
        <div class='card card-primary'>
          <div class='card-header'></div>

          <Formik
            initialValues={{
              tanggal: '',
              quantity: '',
              order: '',
              duedate: '',
              description: '',
              product: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              let formData = new FormData();
              formData.append('tanggal', values.tanggal);
              formData.append('quantity', values.quantity);
              formData.append('order', values.order);
              formData.append('duedate', values.duedate);
              formData.append('description', values.description);
              let result = multiselect.map((arr) => arr.value);
              console.log(result);
              formData.append('product', result);
              dispatch(listproActions.Create(formData, props.history));
              setSubmitting(false);
            }}
            // validationSchema={Create_Schema}
          >
            {/* {this.showForm()}            */}
            {(props) => showForm(props)}
          </Formik>
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};