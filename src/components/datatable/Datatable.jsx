import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import './datatable.scss'
import { userColumns, userRows } from '../../datatableSource'
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";


const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Users"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(doc => {
        list.push({
          id: doc.id, ...doc.data()
        });
      });
      setData(list)
    }, (error) => {
      console.log(error);
    });

    return () => {
      unsub();
    };  
  }, []);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  /** const actionColumns = [{
    field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
      return (
        <div className='cellAction'>
          <Link to='/users/test' style={{ textDecoration: 'none' }}>
            <div className='viewButton'>View</div>
          </Link>
          <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
        </div>
      )
    }
  }] */
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Registered Users
        {/* <Link to="/users/new" style={{ textDecoration: 'none' }} className="link">Add New</Link> */}
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={userColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  ) 
}

export default Datatable
