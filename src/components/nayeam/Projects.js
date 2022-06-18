import React from 'react';
import './../custom-form.css'

const Projects = () => {
    return (
        <div className='form'>
            <form>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Project Name' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Description' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Category' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='Start Date' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <input required type="text"
                        name='' placeholder='End Date' class="form-control" />
                </div>

                <div class="custom-margin-bottom">
                    <textarea required type="text"
                        name='' placeholder='Notes' class="form-control" />
                </div>

                <button className='submit-button' type='submit'>ADD PROJECT</button>
            </form>
        </div>
    );
};

export default Projects;