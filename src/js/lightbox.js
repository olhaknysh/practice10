import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const refs = {
  btnOpenModal: document.querySelector('button[data-open-modal]'),
  modal: document.querySelector('template'),
};

const instance = basicLightbox.create(refs.modal, {
  onShow: instance => {
    const btnCloseModalRef = getCLoseBtnRef(instance);
    btnCloseModalRef.addEventListener('click', instance.close);

    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        instance.close();
        btnCloseModalRef.removeEventListener('click', instance.close);
      }
    });
  },
  onClose(instance) {
    const btnCloseModalRef = getCLoseBtnRef(instance);
    btnCloseModalRef.removeEventListener('click', instance.close);
  },
});

function getCLoseBtnRef(parent) {
  return parent.element().querySelector('button[data-close-modal]');
}

refs.btnOpenModal.addEventListener('click', () => {
  instance.show();
});
