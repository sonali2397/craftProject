import React from "react";

const UploadJpegButton = () => {
  // Function to handle file upload
  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the file is a jpeg
      if (file.type === 'image/jpeg') { // Corrected MIME type check
        // File is a JPG, you can now handle the upload process
        // For demonstration, let's log the file name and size
        console.log('File Name:', file.name);
        console.log('File Size:', file.size, 'bytes');
        // console.log('File path :', file.path);
      } else {
        alert('Please select a JPG Image');
      }
    }
  };

  return (
    <div className="text-center mt-4">
      {/* Button to trigger file input */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={() => document.getElementById('fileInput').click()}>
        Upload Image
      </button>

      {/* Hidden file input */}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept=".jpg"
        onChange={(e) => uploadFile(e)}
      />
    </div>
  );
};

export default UploadJpegButton;
