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

import { Eagle_Lake } from "next/font/google";

import PhotoGallery from "@/components/photos/PhotoGallery";
import { InputFile } from "@/components/InputImage";
import { apiServices } from "@/services/apiServices";
import toast, { Toaster } from "react-hot-toast";
import { date } from "@/constants/common-config";

const eagle = Eagle_Lake({ subsets: ['latin'], weight: "400" });

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
  }, [image]);

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

  if (new Date(date).getTime() - new Date().getTime() > 0) {
    return (
      <Stack 
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column" 
        width="100%"
        paddingX={[5, 0]}
        className={eagle.className}
        minH="80vh"
      >
        <Text 
          textAlign="center" 
          color="blue.900"
          >
            Esta función estará disponible el dia del cumpleaños.
          </Text>
        <Text 
          textAlign="center"  
          color="blue.900"
          >
            Ese dia podrás compartir tus fotos conmigo.
          </Text>
        <Text 
          textAlign="center"  
          color="blue.900"
          >
            No pierdas la oportunidad de compartir conmigo la fiesta desde tu perspectiva y dejarme lindos recuerdos.
          </Text>
      </Stack>
    )
  }

  return (
    <Stack
      mt={50}
      pb={[10, 20]}
      width="100%"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Stack
        marginBottom="60px"
        w={["100%", "80%"]}
        flexDirection="row"
        justifyContent={["center", "flex-end"]}
      >
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => setIsOpenModal(true)}
        >
          Share your picture
        </Button>
      </Stack>
      <Stack className={eagle.className} mb={6} alignItems="center" flexDirection="column">
        <Text
          fontWeight="hairline"
          color="blue.700"
          fontSize="2xl"
        >
          Please share a
        </Text>
        <Text
          fontWeight="hairline"
          color="blue.700"
          fontSize={["4xl", "6xl"]}
        >
          Birthday memory
        </Text>
      </Stack>
      {images.length ? (
        <PhotoGallery images={images} />
      ) : (
        <Stack
          paddingX={[5, 0]}
          minH={["60", "40vh"]}
          width="100%"
          justifyContent="center"
          className={eagle.className}
          alignItems="center"
        >
          <Text color="blue.900">
            No hay fotos aun. Se el primero en compartir la tuya
          </Text>
        </Stack>
      )}

      <Modal
        onClose={() => setIsOpenModal(false)}
        size={"xl"}
        isOpen={isOpenModal}
      >
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
                    colorScheme="blue"
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
