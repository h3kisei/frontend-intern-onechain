import { IconButton } from "@chakra-ui/react";
import React from "react";
import { removeDataFromFirebase } from "../firebase";
import { DeleteIcon } from "@chakra-ui/icons";
  
function DeleteInfo({ student }) {
        const { id } = student;
      return (
        <IconButton
          mr='20px'
          variant='outline'
          colorScheme='teal'
          aria-label='delete'
          icon={<DeleteIcon />}
          onClick={() => removeDataFromFirebase( id )}
        />
      )
    }
  
  export default DeleteInfo;