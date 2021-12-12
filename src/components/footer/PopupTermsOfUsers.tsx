import React, {FC} from 'react';
import MainPopup from "@/components/ui/popup/MainPopup";

interface PopupTermsOfUsersProps {
  onClose: () => void,
  isOpened: boolean
}

const PopupTermsOfUsers: FC<PopupTermsOfUsersProps> = ({onClose, isOpened}) => {
  return (
    <>
      <MainPopup
        onClose={onClose}
        isOpened={isOpened}
        title={"Условия пользования"}
      >
        <div className="overflow-auto scrollbar-hide max-h-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, laudantium, minima! Minima non praesentium
          voluptates. A accusamus cupiditate deleniti doloribus ea eum facilis fuga, illo impedit labore laborum magnam
          minima nam, neque nobis provident quaerat quia quidem sapiente soluta temporibus vitae voluptatum. Aliquam
          aspernatur, est fugiat odio vel voluptas! Ad aperiam aut dignissimos et explicabo fugiat fugit illo inventore
          libero nostrum obcaecati qui, sequi veritatis. A commodi, culpa, deleniti ducimus est et eveniet expedita
          facilis, ipsa laborum laudantium porro possimus provident quas sit temporibus voluptate! Ab asperiores
          aspernatur commodi consectetur consequatur cum, deserunt dignissimos dolore dolorem doloribus eos itaque
          magnam perferendis provident quae quam quia quibusdam quis quos reiciendis rem sapiente sed similique vel
          voluptatem! Aut cupiditate dolorum fuga fugit in libero nam quas ratione vero voluptates? Animi aut,
          consequatur consequuntur dolore eligendi esse et facere incidunt maxime minima mollitia neque nisi non
          perferendis porro qui quo reprehenderit, saepe tempora.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, laudantium, minima! Minima non praesentium
          voluptates. A accusamus cupiditate deleniti doloribus ea eum facilis fuga, illo impedit labore laborum magnam
          minima nam, neque nobis provident quaerat quia quidem sapiente soluta temporibus vitae voluptatum. Aliquam
          aspernatur, est fugiat odio vel voluptas! Ad aperiam aut dignissimos et explicabo fugiat fugit illo inventore
          libero nostrum obcaecati qui, sequi veritatis. A commodi, culpa, deleniti ducimus est et eveniet expedita
          facilis, ipsa laborum laudantium porro possimus provident quas sit temporibus voluptate! Ab asperiores
          aspernatur commodi consectetur consequatur cum, deserunt dignissimos dolore dolorem doloribus eos itaque
          magnam perferendis provident quae quam quia quibusdam quis quos reiciendis rem sapiente sed similique vel
          voluptatem! Aut cupiditate dolorum fuga fugit in libero nam quas ratione vero voluptates? Animi aut,
          consequatur consequuntur dolore eligendi esse et facere incidunt maxime minima mollitia neque nisi non
          perferendis porro qui quo reprehenderit, saepe tempora.
        </div>
      </MainPopup>
    </>
  );
};

export default PopupTermsOfUsers;