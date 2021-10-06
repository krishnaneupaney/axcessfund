// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';
// import { useHistory } from 'react-router-dom';
// import ChipInput from 'material-ui-chip-input';

// // import { createPost, updatePost } from '../../actions/posts';
// import useStyles from './styles';

// const Form = ({ currentId, setCurrentId }) => {
//     const [postData, setPostData] = useState({ title: '', message: '', tags: [], selectedFile: '' });
//     const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
//     const dispatch = useDispatch();
//     const classes = useStyles();
//     const user = JSON.parse(localStorage.getItem('profile'));
//     const history = useHistory();

//     const clear = () => {
//         setCurrentId(0);
//         setPostData({ title: '', message: '', tags: [], selectedFile: '' });
//     };

//     useEffect(() => {
//         if (!post?.title) clear();
//         if (post) setPostData(post);
//     }, [post]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (currentId === 0) {
//             dispatch(createPost({ ...postData, name: user?.result?.name }, history));
//             clear();
//         } else {
//             dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
//             clear();
//         }
//     };

//     if (!user?.result?.name) {
//         return (
//             <Paper className={classes.paper} elevation={6}>
//                 <Typography variant="h6" align="center">
//                     Please Sign In to add your own favorite books review and to like other's
//                 </Typography>
//             </Paper>
//         );
//     }

//     const handleAddChip = (tag) => {
//         setPostData({ ...postData, tags: [...postData.tags, tag] });
//     };

//     const handleDeleteChip = (chipToDelete) => {
//         setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
//     };

//     return (
//         <Paper className={classes.paper} elevation={6}>
//             <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//                 <Typography variant="h6">{currentId ? `Editing "${post?.title}"` : 'Leave your review '}</Typography>
//                 <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//                 <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
//                 {/* <div style={{ padding: '5px 0', width: '94%' }}>
//           <ChipInput
//             name="tags"
//             variant="outlined"
//             label="Tags"
//             fullWidth
//             value={postData.tags}
//             onAdd={(chip) => handleAddChip(chip)}
//             onDelete={(chip) => handleDeleteChip(chip)}
//           />
//         </div> */}
//                 <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
//                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//                 <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
//                 <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//             </form>
//         </Paper>
//     );
// };

// export default Form;

import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost } from '../../action/posts';


const Form = () => {
    const [postData, setPostData] = useState({
        name: '', number: '', amount: '', tags: '', selectedFile: '', applyNow: ''
    })
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {

    }
    return (
        <>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant='h6'>Add your bills</Typography>
                    <TextField name="name" variant="outlined" label="Name" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                    <TextField name="number" variant="outlined" label="Number" fullWidth value={postData.number} onChange={(e) => setPostData({ ...postData, number: e.target.value })} />
                    <TextField name="amount" variant="outlined" label="Amount$" fullWidth value={postData.amount} onChange={(e) => setPostData({ ...postData, amount: e.target.value })} />
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div>
                    <Button className={classes.buttonSumbit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </>
    )
}

export default Form;