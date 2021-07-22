import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as materialActions from '../../actions/material.action';
import * as Yup from 'yup';
import { server } from '../../constants';
const Create_Schema = Yup.object().shape({
  materialname: Yup.string()
    .min(2, 'name is Too Short!')
    .max(50, 'name is Too Long!')
    .required('name is Required'),
  price: Yup.string().required('Price is required'),
  qty: Yup.string().required('Quantity is required'),
  unit: Yup.string().required('Unit is required'),
});
export default (props) => {
  const dispatch = useDispatch();
  const materialReducer = useSelector(({ materialReducer }) => materialReducer);
  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) === null) {
      return props.history.push('/login');
    }
    const { id } = props.match.params;
    dispatch(materialActions.getSingleMaterial(id));
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
          <div class='row'>
            <input
              type='hidden'
              name='_id'
              onChange={handleChange}
              value={values._id}
            />
            <div className='form-group col-md-6 input-group has-feedback'>
              <input
                type='text'
                name='materialname'
                onChange={handleChange}
                value={values.materialname}
                className='form-control'
                placeholder='Name Material'
                className={
                  errors.materialname && touched.materialname
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
              />
              <div class='input-group-append'>
                <div class='input-group-text'>
                  <span class='fas fa-user'></span>
                </div>
              </div>
              {errors.materialname && touched.materialname ? (
                <small id='passwordHelp' class='text-danger'>
                  {errors.materialname}
                </small>
              ) : null}
            </div>
          </div>
          <div class='row'>
            <div className='form-group col-md-6 input-group has-feedback'>
              <textarea
                name='price'
                onChange={handleChange}
                value={values.price}
                className='form-control'
                placeholder='Material Price'
                className={
                  errors.price && touched.price
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
              ></textarea>
              <div class='input-group-append'>
                <div class='input-group-text'>
                  <span class='fas fa-building'></span>
                </div>
              </div>
              {errors.price && touched.price ? (
                <small id='passwordHelp' class='text-danger'>
                  {errors.price}
                </small>
              ) : null}
            </div>
          </div>
          <div className='form-group input-group has-feedback'>
            <input
              type='text'
              name='qty'
              onChange={handleChange}
              value={values.qty}
              className='form-control'
              placeholder='Quantity'
              className={
                errors.qty && touched.qty
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
            {errors.qty && touched.qty ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.qty}
              </small>
            ) : null}
          </div>
          <div class='row'>
            <div className='form-group col-md-6 input-group has-feedback'>
              <input
                type='text'
                name='unit'
                onChange={handleChange}
                value={values.unit}
                className='form-control'
                placeholder='unit'
                className={
                  errors.unit && touched.unit
                    ? 'form-control is-invalid'
                    : 'form-control'
                }
              />
              <div class='input-group-append'>
                <div class='input-group-text'>
                  <span class='fas fa-user'></span>
                </div>
              </div>
              {errors.unit && touched.unit ? (
                <small id='passwordHelp' class='text-danger'>
                  {errors.unit}
                </small>
              ) : null}
            </div>
          </div>
          <div class='row'>
            <div class='offset-md-1 col-4'>
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
              <h1 className='m-0 text-dark'>Create Material</h1>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <div className='content'>
        <div class='card card-success'>
          <div class='card-header'></div>

          <Formik
            enableReinitialize={true}
            initialValues={
                materialReducer.result
                ? materialReducer.result
                : { materialname: '', price: '', qty: '', unit: ''}
            }
            onSubmit={(values, { setSubmitting }) => {
              dispatch(materialActions.Update(values, props.history));
              setSubmitting(false);
            }}
            validationSchema={Create_Schema}
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
