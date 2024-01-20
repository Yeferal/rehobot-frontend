'use client'
import { useEffect, useRef, useState } from 'react'


interface DataModal {
  children: React.ReactNode,
  type?: string;
  isComponent?: boolean;
  closeClick?: boolean;
  title?: string;
}

export default function SimpleDialog({
  type = "modal",
  isComponent = false,
  closeClick = false,
  title = "Title",
  children
}: DataModal) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleClickOutside = (event: any) => {
    // console.log(event);
    
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      console.log(modalRef);
      
      // onClose(); // Llama a la función para cerrar el modal
      closeModal();
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (closeClick) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Limpia el EventListener al desmontar el componente
    return () => {
      if (closeClick) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, []);


  return (
    <div className={`${type} ${isOpen? '' : 'd-none'}`} >
      <div className='modal-content' ref={modalRef}>
        {!isComponent && <div className='modal-head row justify-content-center'>
          <h2>{title}</h2>
        </div> }
  
        <section className='modal-body'>
          {children}
        </section>

        <div className='modal-footer row justify-content-end'>
          <button className='btn btn-sm btn-danger' onClick={closeModal}>Cerrar</button>
        </div>
      </div>
      
    </div>
  )
}
