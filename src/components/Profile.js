import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const Profile = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [profileImage, setProfileImage] = useState('path/to/initial/profile/image.jpg'); // Change to your initial profile image path
  const [galleryImages, setGalleryImages] = useState([
    'path/to/gallery/image1.jpg',
    'path/to/gallery/image2.jpg',
    // Add more gallery images here
  ]);

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

  const handleImageClick = (image) => {
    setProfileImage(image);
    closeGallery();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover cursor-pointer"
            onClick={openGallery}
          />
        </div>
        <input
          type="file"
          accept="image/*"
          className="mb-4"
          onChange={handleFileChange}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mb-8"
          onClick={() => setProfileImage('')}
        >
          Delete Image
        </button>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Second Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Telephone Number</label>
          <input
            type="tel"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded self-end"
        >
          Save
        </button>
      </form>

      <Dialog open={isGalleryOpen} onClose={closeGallery} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
            <Dialog.Title className="text-lg font-medium text-gray-900">Gallery</Dialog.Title>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-32 object-cover cursor-pointer"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closeGallery}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Profile;
