import React, { Fragment, useState, Component } from 'react';
import Message from '../Message'
import Progress from '../Progress'
import Axios from 'axios';
// import FileUpload from '../FileUpload';

const UsersList = () => {
    const [file, setFile] = useState('');
    const [user_name, onChangeUserName] = useState('');
    const [user_gender, onChangeUserGender] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({})
    const [message, setMessage] = useState()
    const [uploadPercentage, setUploadPercentage] = useState(0)


    const onChangeUserName1 = (e) => {
        onChangeUserName(e.target.value)
    }

    const onChangeUserGender1 = (e) => {
        onChangeUserGender(e.target.value)
    }



    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        // onChangeUserName(e.target.value);
        // onChangeUserGender(e.target.value);
    }

    const onSubmit = async e => {
        e.preventDefault();

        console.log('New user submitted:');
        console.log(`User name: ${user_name}`);
        console.log(`User gender: ${user_gender}`);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('user name', user_name);
        formData.append('user gender', user_gender);
        console.log(file)

        try {
            const res = await Axios.post('http://localhost:3000/api/furs', formData, {


                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))
                    // Clear percentage
                    setTimeout(() => setUploadPercentage(0), 10000)
                }
            });

            console.log(res.data)

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });

            setMessage('File Uploaded' + fileName);

        } catch (err) {
            if (err) {
                setMessage('There was a problem with the server')
            } else {
                setMessage(err.response.data.msg);
            }

        }
    }



    return (
        <Fragment>
            <h3>Welcome to CocoApp Create User!</h3>
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text"
                        className="form-control"
                        onChange={onChangeUserName1}
                    />
                </div>
                <div className="form-group">
                    <label>Gender: </label>
                    <input type="text"
                        className="form-control"
                        onChange={onChangeUserGender1}
                    />
                </div>


                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                    <label className="custom-file-label" for="customFile">{filename}</label>
                </div>

                <Progress percentage={uploadPercentage} />

                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>

            {uploadedFile ? <div className='row mt-5'>
                <div className='col-md-5 m-auto'>
                    <h3 className='text-center'>{uploadedFile.fileName}</h3>
                    <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                </div>
            </div> : null}

        </Fragment>


    )
}

export default UsersList;