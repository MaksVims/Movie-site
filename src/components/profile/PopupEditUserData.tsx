import React, {FC} from 'react';
import MainPopup from "@/components/ui/popup/MainPopup";
import FormEditUserData from "@/components/profile/FormEditUserData";
import {EditUserDataFormValues} from "#/validationTypes";
import FirebaseAuthService from "@/api/FirebaseAuthService";

interface PopupEditUserData {
  onClose: () => void,
  isOpened: boolean
}

const PopupEditUserData: FC<PopupEditUserData> = ({isOpened, onClose}) => {

  const saveEditChanges = async (values: EditUserDataFormValues) => {
    try {
      const {url, tel, username} = values
      await FirebaseAuthService.updateProfile(username, tel, url)
      onClose()
    } catch (e) {
      alert(e)
    }
  }

  return (
    <MainPopup
      title="Редактировать профиль"
      onClose={onClose}
      isOpened={isOpened}
    >
      <FormEditUserData submitHandler={saveEditChanges}/>
    </MainPopup>
  );
};

export default PopupEditUserData;