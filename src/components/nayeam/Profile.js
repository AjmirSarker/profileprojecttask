import React from 'react';
import './../custom-form.css'

const Profile = () => {
    return (
        <div className='form'>
            <form>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Name' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Email' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Address' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='City' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='State' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Country' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Company Name' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Occupation' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Years of Experience' class="form-control" />
                </div>

                <button className='submit-button' type='submit'>UPDATE PROFILE</button>

            </form>
        </div>
    );
};

export default Profile;