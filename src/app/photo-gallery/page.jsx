"use client";
import React, { useEffect } from "react";
import {
  Image,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

import PhotoGallery from "@/components/photos/PhotoGallery";
import { InputFile } from "@/components/InputImage";
import { apiServices } from "@/services/apiServices";
import toast, { Toaster } from "react-hot-toast";


const PhotoGalleryPage = () => {
  const [image, setImage] = React.useState([]);
  const [previewImage, setPreviewImage] = React.useState(null);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isUploading, setIsUploading] = React.useState(false);
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photos = await apiServices.getPhotos();
      setImages(photos);
    };
    fetchPhotos();
  }, [image])
  

  const uploadImage = async () => {
    setIsUploading(true);
    const result = await apiServices.uploadImageToCloudinary(image);
    if (result.status === 200) {
      toast.success("Image uploaded successfully"); 
      setImage(null);
      setPreviewImage(null);
      setIsOpenModal(false);
    } else {
      toast.error("Error uploading image");
    }
    setIsUploading(false);
  };

  const handleInputChange = async (formImage, imageURL) => {
    setPreviewImage(imageURL);
    setImage(formImage);
  };

  return (
    <Stack
      mt={50}
      width="100%"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Stack marginBottom="60px" w={["100%", "80%"]} flexDirection="row" justifyContent={["center", "flex-end"]}>
        <Button colorScheme="blue" onClick={() => setIsOpenModal(true)}>
          Share your picture
        </Button>
      </Stack>
      { images.length ? (
        <PhotoGallery images={images} />
      ): (
        <Stack minH="70vh" width="100%" justifyContent="center" alignItems="center">
          <Text color="blue.900">No hay fotos aun. Se el primero en compartir la tuya</Text>
        </Stack>
      )}

      <Modal onClose={() => setIsOpenModal(false)} size={"xl"} isOpen={isOpenModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Stack
              flexDirection="column"
              justifyContent="center"
              width="100%"
              alignItems="center"
            >
              {previewImage ? (
                <Stack width="100%" justifyContent="center" alignItems="center">
                  <Image src={previewImage} />
                  <Button
                    colorScheme="teal"
                    loadingText="Uploading"
                    isLoading={isUploading}
                    onClick={uploadImage}
                  >
                    Upload Image
                  </Button>
                </Stack>
              ) : (
                <InputFile onChangeFile={handleInputChange} />
              )}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Toaster position="bottom-center" />
    </Stack>
  );
};

export default PhotoGalleryPage;
