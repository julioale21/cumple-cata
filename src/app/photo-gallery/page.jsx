"use client";
import React from "react";
import { Image, Button, Modal, ModalBody, ModalContent, ModalOverlay, Stack } from "@chakra-ui/react";

import PhotoGallery from "@/components/photos/PhotoGallery";
import { InputFile } from "@/components/InputImage";
import { apiServices } from "@/services/apiServices";
import toast, { Toaster } from "react-hot-toast";

const images = [
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-nRT4QsP/0/3dc0056c/X3/i-nRT4QsP-X3.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-gMzWk4v/0/170e1540/X3/i-gMzWk4v-X3.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-HGgMnWP/0/1e54918a/1786x1152/i-HGgMnWP-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-DpgmZDk/0/97e5c5c3/1786x1152/i-DpgmZDk-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-22KX9kM/0/3f558ed0/1786x1152/i-22KX9kM-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-XvwjGHR/0/332ea254/1786x1152/i-XvwjGHR-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-bDR5zJM/0/26a5a52b/1786x1152/i-bDR5zJM-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-nRT4QsP/0/3dc0056c/X3/i-nRT4QsP-X3.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-gMzWk4v/0/170e1540/X3/i-gMzWk4v-X3.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-HGgMnWP/0/1e54918a/1786x1152/i-HGgMnWP-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-DpgmZDk/0/97e5c5c3/1786x1152/i-DpgmZDk-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-22KX9kM/0/3f558ed0/1786x1152/i-22KX9kM-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-XvwjGHR/0/332ea254/1786x1152/i-XvwjGHR-1786x1152.jpg",
  "https://photos.smugmug.com/Cata15/n-2LThrZ/i-bDR5zJM/0/26a5a52b/1786x1152/i-bDR5zJM-1786x1152.jpg",
];

const PhotoGalleryPage = () => {
  const [image, setImage] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);

  const uploadImage = async () => {
    const result = await apiServices.uploadImageToCloudinary(image);
    if (result.status === 200) {
      toast.success("Image uploaded successfully");
    } else {
      toast.error("Error uploading image");
    }
  };

  const handleInputChange = async (formImage, imageURL) => {
    setPreviewImage(imageURL);
    setImage(formImage);
  };

  return (
    <Stack
      mt={100}
      width="100%"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <PhotoGallery images={images} />

      <Modal onClose={() => {}} size={"xl"} isOpen={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Stack flexDirection="column" justifyContent="center" width="100%" alignItems="center">
              {previewImage ? (
                <Stack width="100%" justifyContent="center" alignItems="center">
                  <Image src={previewImage} />
                  <Button 
                    colorScheme='teal' 
                    loadingText='Uploading' 
                    isLoading 
                    onClick={uploadImage}
                  >
                    Upload Image
                  </Button>
                </Stack>
              ) : <InputFile onChangeFile={handleInputChange} />}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Toaster position="bottom-center" />
    </Stack>
  );
};

export default PhotoGalleryPage;
