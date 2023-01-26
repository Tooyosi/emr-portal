import React from 'react';

interface ModalProps {
  open: boolean
  toggle: () => void
  header?: string
  children: React.ReactNode
  hasBackArrow?: boolean
  goBackAction?: () => void
}

const SideModal = ({ open, toggle, header, children }: ModalProps) => {


  return (
    <div id='sideModal'>
      <div key={header} className={`sideModal ${open && `show`} `}>
        <div className={`sideModalAside ${open && `show`}`} >
          <div className="sideModalContent bg-white px-4">
            <div className="px-0 border-0 d-flex align-items-center justify-content-between mb-2">
              <div className="text-right">
                <button type="button" className="close-btn" onClick={toggle} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>

              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div >
  )
};

export default SideModal;
