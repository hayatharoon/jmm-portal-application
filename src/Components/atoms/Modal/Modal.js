import React from 'react';
import Typography from '../Typography/Typography';
import Close from '../../../assets/image/close-cross.png';
import './modal.css';

const Modal = ({ employee, closeModal }) => {
  console.log('modal', employee);
  return (
    <div className='modal'>
      <div className='modal-container'>
        <div className='modal-header'>
          <Typography priority={3} styles={{ fontSize: '16px', fontWeight: 500 }}>
            Employee Detail
          </Typography>
          <img src={Close} alt='close' className='img' onClick={closeModal} />
        </div>
        <div className='modal-body'>
          <div className='name-container'>
            <Typography priority={4} styles={{ fontSize: '16px', fontWeight: 600, margin: '0px', textAlign: 'left' }}>
              {employee.name}
            </Typography>
            <Typography color='#A9A9AC' styles={{ fontSize: '12px', fontWeight: 500, margin: '0', textAlign: 'left' }}>
              {`id: ${employee.id}`}
            </Typography>
          </div>
          <div className='detail-container'>
            <div>
              <Typography color='#A9A9AC' styles={{ fontSize: '12px', fontWeight: 400, margin: '0px', textAlign: 'left' }}>
                Desgination
              </Typography>
              <Typography styles={{ fontSize: '14px', fontWeight: 500, margin: '0', textAlign: 'left' }}>{employee.designation}</Typography>
            </div>
            <div>
              <Typography color='#A9A9AC' styles={{ fontSize: '12px', fontWeight: 400, margin: '0px', textAlign: 'left' }}>
                Contact
              </Typography>
              <Typography styles={{ fontSize: '14px', fontWeight: 500, margin: '0 30px 0 0', textAlign: 'left' }}>{employee.contact}</Typography>
            </div>
          </div>
          <div className='detail-container'>
            <div>
              <Typography color='#A9A9AC' styles={{ fontSize: '12px', fontWeight: 400, margin: '0px', textAlign: 'left' }}>
                Created at
              </Typography>
              <Typography styles={{ fontSize: '14px', fontWeight: 500, margin: '0', textAlign: 'left' }}>{employee.created_at}</Typography>
            </div>
            <div>
              <Typography color='#A9A9AC' styles={{ fontSize: '12px', fontWeight: 400, margin: '0px', textAlign: 'left' }}>
                Updated_at
              </Typography>
              <Typography styles={{ fontSize: '14px', fontWeight: 500, margin: '0 30px 0 0', textAlign: 'left' }}>{employee.updated_at}</Typography>
            </div>
          </div>
          <div className='name-container'>
            <Typography color='#A9A9AC' styles={{ fontSize: '12px', fontWeight: 400, margin: '0px', textAlign: 'left' }}>
              Address
            </Typography>
            <Typography styles={{ fontSize: '14px', fontWeight: 500, margin: '0 30px 0 0', textAlign: 'left' }}>{`${employee.address}`}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
