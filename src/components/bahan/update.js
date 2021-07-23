import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as bahanActions from '../../actions/bahan.action';
import { server } from '../../constants';
import Select from 'react-select';
export default (props) => {
  const dispatch = useDispatch();
  const [multiselect, setMultiselect] = useState([]);
  const bahanReducer = useSelector(({ bahanReducer }) => bahanReducer);

  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) === null) {
      return props.history.push('/login');
    }
    const { id } = props.match.params;
    
    dispatch(bahanActions.getSingleBahan(id));
    dispatch(bahanActions.clearState());
    
  }, []);
  useEffect(() => {
    if (bahanReducer.result) {
      let initial_image = {
        file_obj: '',
        frontimage: bahanReducer.result.frontimage,
      };
      showPreviewImage(initial_image);
    }
  }, [bahanReducer]);
  const showPreviewImage = (values) => {
    return (
      <img
        id='frontimage'
        src={
          values.file_obj != null
            ? values.file_obj
            : process.env.REACT_APP_BAHAN_FRONT_IMAGE_PATH +
              '/' +
              values.frontimage
        }
        class='img-fluid'
        width={300}
      />
    );
  };
  const renderSelectwithSelected = () => {
    {
      if (bahanReducer.result) {
        return (
          <div class='form-group '>
            <Select
              name='product'
              defaultValue={
                bahanReducer.result
                  ? bahanReducer.result.product.map((val) => {
                      return {
                        value: val._id,
                        label: val.name,
                      };
                    })
                  : null
              }
              onChange={setMultiselect}
              isMulti
              closeMenuOnSelect={false}
              options={bahanReducer.options ? bahanReducer.options : null}
            />
          </div>
        );
      } else {
        return null; // or loading graphic
      }
    }
  };
  const showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  }) => {
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div class='card-body'>
          <input
            type='hidden'
            name='_id'
            onChange={handleChange}
            value={values._id}
          />
          <div className='form-group input-group has-feedback'>
            <input
              type='text'
              name='materialname'
              onChange={handleChange}
              value={values.materialname}
              className='form-control'
              placeholder='Material Name'
              className={
                errors.materialname && touched.materialname
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
            <div class='input-group-append'>
              <div class='input-group-text'>
                <span class='fas fa-building'></span>
              </div>
            </div>
            {errors.materialname && touched.materialname ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.materialname}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
            <textarea
              name='amount'
              onChange={handleChange}
              value={values.amount}
              className='form-control'
              placeholder='Amount'
              className={
                errors.amount && touched.amount
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            ></textarea>
            <div class='input-group-append'>
              <div class='input-group-text'>
                <span class='fas fa-building'></span>
              </div>
            </div>
            {errors.amount && touched.amount ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.amount}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
            <input
              type='text'
              name='materialneeded'
              onChange={handleChange}
              value={values.materialneeded}
              className='form-control'
              placeholder='Material Needed'
              className={
                errors.materialneeded && touched.materialneeded
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
            <div class='input-group-append col-3'>
              <div class='input-group-text'>
                <span class='fas fa-phone'></span>
              </div>
            </div>
            {errors.materialneeded && touched.materialneeded ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.materialneeded}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
          <select 
          name='materialunit'
          id="materialunit"
            onChange={handleChange}
              value={values.materialunit}
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
            {errors.materialunit && touched.materialunit ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.materialunit}
              </small>
            ) : null}
          </div>
          <div className='form-group input-group has-feedback'>
            <input
              type='text'
              name='stock'
              onChange={handleChange}
              value={values.stock}
              className='form-control'
              placeholder='Stock'
              className={
                errors.stock && touched.stock
                  ? 'form-control is-invalid'
                  : 'form-control'
              }
            />
            <div class='input-group-append col-3'>
              <div class='input-group-text'>
                <span class='fas fa-phone'></span>
              </div>
            </div>
            {errors.stock && touched.stock ? (
              <small id='passwordHelp' class='text-danger'>
                {errors.stock}
              </small>
            ) : null}
          </div>
          {renderSelectwithSelected()}
          <div class='form-group '>{showPreviewImage(values)}</div>

          <div class='form-group '>
            <div class='input-group col-5'>
              <div class='custom-file'>
                <input
                  type='file'
                  onChange={(e) => {
                    e.preventDefault();
                    setFieldValue('frontimage', e.target.files[0]); // for upload
                    setFieldValue(
                      'file_obj',
                      URL.createObjectURL(e.target.files[0])
                    ); // for preview image
                  }}
                  name='frontimage'
                  className={
                    errors.frontimage && touched.frontimage
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  accept='image/*'
                  id='exampleInputFile'
                />
                <label class='custom-file-label' for='exampleInputFile'>
                  file
                </label>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='offset-md-4 col-4'>
              <button
                type='submit'
                disabled={isSubmitting}
                class='btn btn-primary btn-block'
              >
                Update
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
            enableReinitialize={true}
            initialValues={
                bahanReducer.result
                ? bahanReducer.result
                : { materialname: '', amount: '', materialneeded: '', materialunit: '', stock: '' }
            }
            onSubmit={(values, { setSubmitting }) => {
              let formData = new FormData();
              formData.append('id', bahanReducer.result._id);
              formData.append('materialname', values.materialname);
              formData.append('amount', values.amount);
              formData.append('materialneeded', values.materialneeded);
              formData.append('materialunit', values.materialunit);
              formData.append('stock', values.stock);
              let result = multiselect.map((arr) => arr.value);

              formData.append('product', result);
              if (values.frontimage) {
                formData.append('frontimage', values.frontimage);
              }
              dispatch(bahanActions.Update(formData, props.history));
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
