import React from "react";

const UploadPDFButton = () => {
  // Function to handle file upload
  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the file is a PDF
      if (file.type === 'application/pdf') {
        // File is a PDF, you can now handle the upload process
        // For demonstration, let's log the file name and size
        console.log('File Name:', file.name);
        console.log('File Size:', file.size, 'bytes');
      } else {
        alert('Please select a PDF file.');
      }
    }
  };

  return (
    <div className="text-center mt-4">
      {/* Button to trigger file input */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={() => document.getElementById('fileInput').click()}>
        Upload PDF
      </button>

      {/* Hidden file input */}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        accept=".pdf"
        onChange={(e) => uploadFile(e)}
      />
    </div>
  );
};

export default UploadPDFButton;
