import React from "react";
// import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from "../../hooks/useFileDownloader";
import { Button } from "react-bootstrap";
// import ExternalInfo from "components/ExternalInfo";

// const files = [

//   {
//     name: "Resume 1",
//     thumb:
// "https://ibb.co/DCp6YgV",
//     file:
//       "https://ibb.co/DCp6YgV" +
//       Math.random(),
//     filename: "an.png",
//   }, {
//     name: "Resume 2",
//     thumb:
//       "https://00f74ba44b64e2628ced21fc2fd642475c11f9724a-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0002.jpeg?jk=AFshE3VepTVLdkFTqko3pFQ40rmAau-5kTMcgG1dLpQn5SBbC_BxPMGnFbG1436J4Lgu4-BpcPpenbk70_evNJMdmVmY_fNcJRNfOwysY-wMEjwk89CMAdymSkH9u2d8vwvJs_yrkyKEh48hx__o_0RLzbVQ6QCMFQ6HesLw7L4VSyDFGvEI89dL3C4rkHU4fgejhSjkpssJ3313DOHqYwlFuuF9dGF-JOqguK9tKI3WFRY5K2BlDgworg38snl9ZIPuftgOsRDy8saLczlo5Vu8p_GKiHGOqCjnY9Z-7SVGpXGmV_XaFvLjqDfbofA7d0UxBpHaCGpmvzz8qOfH_tl0t-zHygpRc491PisQ2nrYpyFvS7rsJwR1ghkYIiHZP3W87ee-1N7bfXja5D_yOVWyxayr6wbiaDHnf0-ncLQF6TihwvB_tbHjkvtmUcfjElSg4kkIUd_vwCNiBWrbodFYCq8lThzpWNzT1hBtile0TNzz9xipambMXsgsD9EhiZAqwaNksdSzOeTCJT5qKSBPwBvaLfIvjymP5OnXeMDXZ3XmV_wbGT-uTNkT9hXJx2BUg2nlQJbChl8xG3VNTF9WVFTw4JuUgrJdKLCJR3MyGwioAjbkOHUrT-sN2_jwNip0gqg2qYG6jleudNdQen6ekxCzT9QZGloC1JhncF7VYaG-I5R_WihK-iBHnQ49sopUqu6J9LSKSsnJ5fldaLeEuJNpZvTtS_10NYIDETnLQuWQmo4l7BeNRMze767ucLWEC2GaAikHk0Ghh-gz17BQ4De88G-rvxMebLH3qiI1eGtywveyaOvCG47hn-thasHY8z-Oxwbo4QgdNcXDcTuQfiVRDi0qlYdFxlZ8YqrIQkgL8JhIm7JiBf5tz-EXDqbWRP6yti4U5atsJgbnBgswqRFbmVxzggd1KkbeH863ozwVpQvIKzBG1RIoFp3uf8HlS4HOG-GgpKc7sY4A_wZCnBIA2C5IzJOIDsx6QK_Ub7ctMg&isca=1",
//     file:
//       "https://00f74ba44b64e2628ced21fc2fd642475c11f9724a-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0002.jpeg?jk=AFshE3VepTVLdkFTqko3pFQ40rmAau-5kTMcgG1dLpQn5SBbC_BxPMGnFbG1436J4Lgu4-BpcPpenbk70_evNJMdmVmY_fNcJRNfOwysY-wMEjwk89CMAdymSkH9u2d8vwvJs_yrkyKEh48hx__o_0RLzbVQ6QCMFQ6HesLw7L4VSyDFGvEI89dL3C4rkHU4fgejhSjkpssJ3313DOHqYwlFuuF9dGF-JOqguK9tKI3WFRY5K2BlDgworg38snl9ZIPuftgOsRDy8saLczlo5Vu8p_GKiHGOqCjnY9Z-7SVGpXGmV_XaFvLjqDfbofA7d0UxBpHaCGpmvzz8qOfH_tl0t-zHygpRc491PisQ2nrYpyFvS7rsJwR1ghkYIiHZP3W87ee-1N7bfXja5D_yOVWyxayr6wbiaDHnf0-ncLQF6TihwvB_tbHjkvtmUcfjElSg4kkIUd_vwCNiBWrbodFYCq8lThzpWNzT1hBtile0TNzz9xipambMXsgsD9EhiZAqwaNksdSzOeTCJT5qKSBPwBvaLfIvjymP5OnXeMDXZ3XmV_wbGT-uTNkT9hXJx2BUg2nlQJbChl8xG3VNTF9WVFTw4JuUgrJdKLCJR3MyGwioAjbkOHUrT-sN2_jwNip0gqg2qYG6jleudNdQen6ekxCzT9QZGloC1JhncF7VYaG-I5R_WihK-iBHnQ49sopUqu6J9LSKSsnJ5fldaLeEuJNpZvTtS_10NYIDETnLQuWQmo4l7BeNRMze767ucLWEC2GaAikHk0Ghh-gz17BQ4De88G-rvxMebLH3qiI1eGtywveyaOvCG47hn-thasHY8z-Oxwbo4QgdNcXDcTuQfiVRDi0qlYdFxlZ8YqrIQkgL8JhIm7JiBf5tz-EXDqbWRP6yti4U5atsJgbnBgswqRFbmVxzggd1KkbeH863ozwVpQvIKzBG1RIoFp3uf8HlS4HOG-GgpKc7sY4A_wZCnBIA2C5IzJOIDsx6QK_Ub7ctMg&isca=1" +
//       Math.random(),
//     filename: "resume-1.jpg",
//   },
// ];

// const FileDownloader = () => {
//   const [downloadFile, downloaderComponentUI] = useFileDownloader();

//   const download = (file) => downloadFile(file);

//   return (
//     <>

//       {/* <Header title="File downloader with progress bar" />

//       <ExternalInfo page="fileDownloader" /> */}

//       <div className="row">
//         <div className="col text-center">
//           <h2>Download Resume in JPEG</h2>
//           <div className="row mt-3">
//             {files.map((file, idx) => (
//               <div className="col" key={idx}>
//                 <div className="card ">
//                   <div className="card-body" key={idx}>
//                     <img className="card-img-top mb-3" src={file.thumb} />
//                     <h5 className="card-title">{file.name}</h5>

//                     <a
//                       className="btn btn-primary cursor-pointer text-white"
//                       onClick={() => download(file)}
//                     >
//                       Download <FontAwesomeIcon icon="download" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {downloaderComponentUI}
//       </div>
//     </>
//   );
// };
const FileDownloader = () => {
  return (

    <div className="Resume">
      {/* <h1>Click Below for Resume</h1> */}

      <a className="Awesome" href="https://docs.google.com/document/d/1mws3oKkpawZMqCnct-JvyZiazDLqrzjI3Ms-80mC6Wg/edit?usp=sharing"></a>


    </div>
  )

}

export default FileDownloader;
