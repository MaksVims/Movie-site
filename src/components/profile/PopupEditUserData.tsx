import React, {FC, useCallback} from 'react';
import MainPopup from "@/components/ui/popup/MainPopup";
import FormEditUserData from "@/components/profile/FormEditUserData";
import {EditUserDataFormValues} from "#/validationTypes";
import FirebaseAuthService from "@/api/FirebaseAuthService";
import {useAlert} from "@/contexts";
import successMessage from "@/const/successMessage";
import {AlertType} from "#/alertCtxTypes";
import errorsMessage from "@/const/errorsMessage";

interface PopupEditUserData {
  onClose: () => void,
  isOpened: boolean
}

const PopupEditUserData: FC<PopupEditUserData> = ({isOpened, onClose}) => {
  const {showAlert} = useAlert()

  const saveEditChanges = useCallback(async (values: EditUserDataFormValues) => {
    try {
      const {url, tel, username} = values
      await FirebaseAuthService.updateProfile(username, tel, url)
      showAlert(successMessage.UPDATE_PROFILE, AlertType.SUCCESS)
      onClose()
    } catch (e) {
      showAlert(errorsMessage.UPDATE_PROFILE, AlertType.ERROR)
    }
  }, [onClose])

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