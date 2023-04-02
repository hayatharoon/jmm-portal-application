import React, { useState, useEffect } from 'react';
import { getAllEmpolyees } from '../../../services/employee.services';
import CustomTable from '../../atoms/CustomTable/CustomTable';
import Modal from '../../atoms/Modal/Modal';
import Pagination from '../../atoms/Pagination/Pagination';
import Spinner from '../../atoms/Spinner/Spinner';
import './employee.css';

const Employee = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  let selectedColumns = ['name', 'designation'];
  const [clickEmployee, setClickEmployee] = useState({});
  const [showModal, setShowModal] = useState(false);

  //Pagination
  const [activePage, setActivePage] = useState(1);
  const itemPerPage = 15;
  const totalPages = 2000;
  const [currentItems, setCurrentItems] = useState([]);

  const defaultColumns = [
    { key: 'id', text: '#', value: 'id' },
    { key: 'name', text: 'Name', value: 'name' },
    { key: 'designation', text: 'Designation', value: 'designation' },
    { key: 'contact', text: 'Contact', value: 'contact' },
    { key: 'address', text: 'Address', value: 'address' },
    { key: 'created_at', text: 'Create at', value: 'created_at' },
    { key: 'updated_at', text: 'Update at', value: 'updated_at' },
  ];

  const handleInput = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    !searchText && fetchData();
  }, [activePage]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setResults([]);
      setCurrentItems([]);

      const params = {
        search: selectedColumns,
        page: activePage,
        perPage: itemPerPage,
      };

      const employeeResp = await getAllEmpolyees(params);
      console.log('Big Response Im Waiting For', employeeResp.data.employees.data);
      setResults(employeeResp.data.employees.data);
      setCurrentItems(employeeResp.data.employees.data);
    } catch (error) {
      console.log('Error in the Employee API', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    const tempFilterResults = results.filter((row) => {
      if (selectedColumns.length === 0) {
        selectedColumns = defaultColumns.map((column) => column.key);
      } else {
        selectedColumns = selectedColumns.map((column) => {
          let col = defaultColumns.find((col) => col.text === column);
          return col ? col.key : column;
        });
      }
      console.log('testing', row);
      return selectedColumns.find((column) => {
        return row[column].toString().toLowerCase().includes(searchText.toLowerCase());
      });
    });

    setActivePage(1);
    setCurrentItems([...tempFilterResults]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return showModal ? (
    <Modal employee={clickEmployee} closeModal={closeModal} />
  ) : (
    <>
      <div className='main'>
        <div>
          <h4>{`Total ${totalPages}`}</h4>
        </div>
        <form className='main-container' onSubmit={handleFilterSubmit}>
          <div className='searchContainer'>
            <input type='text' name='searchText' placeholder='search' className='text-field' value={searchText} onChange={handleInput} />
            <button className='candidate-submit-btn'>Search</button>
          </div>
        </form>
      </div>
      {loading ? (
        <Spinner style={{ position: 'absolute' }} />
      ) : (
        <>
          <CustomTable data={currentItems} fields={defaultColumns} setClickEmployee={setClickEmployee} setShowModal={setShowModal} />
          <Pagination
            className='pagination-bar'
            currentPage={activePage}
            totalCount={totalPages}
            pageSize={itemPerPage}
            onPageChange={(page) => setActivePage(page)}
          />
        </>
      )}
    </>
  );
};

export default Employee;
