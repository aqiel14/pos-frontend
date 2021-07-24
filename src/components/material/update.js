import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as materialActions from "../../actions/material.action";
import * as Yup from "yup";
import { server } from "../../constants";
import Select from "react-select";
export default (props) => {
  const dispatch = useDispatch();
  const [multiselect, setMultiselect] = useState([]);
  const materialReducer = useSelector(({ materialReducer }) => materialReducer);

  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) === null) {
      return props.history.push("/login");
    }
    const { id } = props.match.params;

    dispatch(materialActions.getSingleMaterial(id));
    dispatch(materialActions.clearState());
  }, []);
  const renderSelectwithSelected = () => {
    {
      if (materialReducer.result) {
        return (
          <div class="form-group ">
            <Select
              name="material"
              defaultValue={
                materialReducer.result
                  ? materialReducer.result.bahan.map((val) => {
                      return {
                        value: val._id,
                        label: val.materialname,
                      };
                    })
                  : null
              }
              onChange={setMultiselect}
              isMulti
              closeMenuOnSelect={false}
              options={materialReducer.options ? materialReducer.options : null}
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
  }) => {
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div class="card-body">
          <div class="row">
            <input
              type="hidden"
              name="_id"
              onChange={handleChange}
              value={values._id}
            />
          </div>
          <div class="row">
            <div className="form-group col-md-6 input-group has-feedback">
              <textarea
                name="price"
                onChange={handleChange}
                value={values.price}
                className="form-control"
                placeholder="Material Price"
                className={
                  errors.price && touched.price
                    ? "form-control is-invalid"
                    : "form-control"
                }
              ></textarea>
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-building"></span>
                </div>
              </div>
              {errors.price && touched.price ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.price}
                </small>
              ) : null}
            </div>
          </div>
          <div className="form-group input-group has-feedback">
            <input
              type="text"
              name="qty"
              onChange={handleChange}
              value={values.qty}
              className="form-control"
              placeholder="Quantity"
              className={
                errors.qty && touched.qty
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {errors.qty && touched.qty ? (
              <small id="passwordHelp" class="text-danger">
                {errors.qty}
              </small>
            ) : null}
          </div>
          <div class="row">
            <div className="form-group col-md-6 input-group has-feedback">
              <input
                type="text"
                name="unit"
                onChange={handleChange}
                value={values.unit}
                className="form-control"
                placeholder="unit"
                className={
                  errors.unit && touched.unit
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-user"></span>
                </div>
              </div>
              {errors.unit && touched.unit ? (
                <small id="passwordHelp" class="text-danger">
                  {errors.unit}
                </small>
              ) : null}
            </div>
          </div>
          <div class="row">
            <div class="offset-md-1 col-4">
              <button
                type="submit"
                disabled={isSubmitting}
                class="btn btn-primary btn-block"
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
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Update Material</h1>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      <div className="content">
        <div class="card card-success">
          <div class="card-header"></div>

          <Formik
            enableReinitialize={true}
            initialValues={
              materialReducer.result
                ? materialReducer.result
                : { bahan: "", price: "", qty: "", unit: "" }
            }
            onSubmit={(values, { setSubmitting }) => {
              let formData = new FormData();
              formData.append("price", values.price);
              formData.append("qty", values.qty);
              formData.append("unit", values.unit);
              let result = multiselect.map((arr) => arr.value);
              console.log(result);
              formData.append("bahan", result);
              dispatch(materialActions.Update(formData, props.history));
              setSubmitting(false);
            }}
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
