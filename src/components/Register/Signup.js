import React, { useEffect, useRef, useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form';

import GoogleButton from 'react-google-button';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Loading from '../Shared/Loading';

import auth from '../../firebase.init';
const Signup = () => {

  const emailRef = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  let signInError;
 
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
    if (user || Guser) {
       navigate(from, { replace: true });
      
    }
  

  if (loading || Gloading || updating) {
    return <Loading></Loading>;
  }

  if (error || Gerror  || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || Gerror?.message || updateError?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        
  };
  return (
    <div className="border border-dark shadow-lg container py-2 my-5">
      <h2 className="w-75">SignUp</h2>
     <div className='w-75 mx-auto py-2'>
     <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className="d-flex ms-3">Name</Form.Label>
          <Form.Control
            {...register('name', {
              required: {
                value: true,
                message: 'User name is Required'
              },
              minLength: {
                value: 1,
                message: 'Must be 1 characters or longer'
              }
            })}
            type="text"
            name="name"
            className="border border-success rounded-pill w-75"
            placeholder="user name"
          />
          <Form.Label className="d-flex ms-3 mt-2">
            {errors.name?.type === 'required' && (
              <span className=" text-danger">{errors.name.message}</span>
            )}
            {errors.name?.type === 'minLength' && (
              <span className="text-danger">{errors.name.message}</span>
            )}
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="d-flex ms-3">Email</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            className="border border-success rounded-pill w-75"
            name="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is Required'
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid Email'
              }
            })}
          />
          <Form.Label className="d-flex ms-3 my-2">
            {errors.email?.type === 'required' && (
              <span className="text-danger">{errors.email.message}</span>
            )}
            {errors.email?.type === 'pattern' && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </Form.Label>
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Form.Group className=" " controlId="formBasicPassword">
            <Form.Label className="d-flex ms-3">Password</Form.Label>
            <Form.Control
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is Required'
                },
                minLength: {
                  value: 6,
                  message: 'Must be 6 characters or longer'
                }
              })}
              type="password"
              placeholder="Password"
              className="border border-success rounded-pill w-75"
              name="password"
            />
          </Form.Group>
          <Form.Label className="d-flex ms-3 mt-2">
            {errors.password?.type === 'required' && (
              <span className=" text-danger">{errors.password.message}</span>
            )}
            {errors.password?.type === 'minLength' && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </Form.Label>
        </Form.Group>

        <div className="d-flex text-danger">
          <p>{signInError}</p>
        </div>
        <div className="w-75">
          <p className="mt-3">
            Already have an account ? please
            <Link
              className="ms-2 text-warning text-decoration-none fw-bolder"
              to="/login"
            >
              Log in
            </Link>
          </p>

          <button
            type="submit"
            class="btn  btn-outline-warning btn-success fw-bold"
          >
            SignUp
          </button>
        </div>
      </Form>

      <div className="w-100">
        <GoogleButton
          className="w-100  my-5 mx-auto rounded-3 bg-dark"
          onClick={() => signInWithGoogle()}
        />
      </div>
     </div>
    </div>
  );
};

export default Signup;