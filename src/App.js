import logo from './logo.svg';
import './App.css';
import FolderIcon from '@mui/icons-material/Folder';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import NotificationsIcon from '@mui/icons-material/Notifications';


function App() {
  return (
    <div className="App">
      <div className='sidenav'>
        <div className='sidenav-logo'>
          <div style={{marginRight:10, marginLeft:40}}>Logo</div>
          <div>CloudFiles</div>
          </div>
        <div className='side-nav-section'>HOME</div>
        <div className='sidenav-items'>

          <div className='sidenav-item'>
              
              <div className='item-bg'>

            <div><FolderIcon className='folder-icon'/></div>
            <div>
              <div className='sidenav-item-desc'>
            <div className='sidenav-item-desc-title'>Personal</div>
            <div className='sidenav-item-desc-gb'>50 GB Used</div>
              </div>

              </div>
            </div>
          </div>
      <div className='sidenav-item'>
              
              <div className='item-bg'>

            <div><DriveFileMoveIcon className='folder-icon'/></div>
            <div>
              <div className='sidenav-item-desc'>
            <div className='sidenav-item-desc-title'>Shared</div>
            <div className='sidenav-item-desc-gb'>10 GB Used</div>
              </div>

              </div>
            </div>
          </div>
      <div className='sidenav-item'>
              
              <div className='item-bg'>

            <div><FolderCopyIcon className='folder-icon'/></div>
            <div>
              <div className='sidenav-item-desc'>
            <div className='sidenav-item-desc-title'>Spaces</div>
            <div className='sidenav-item-desc-gb'>50 GB Used</div>
              </div>

              </div>
            </div>
          </div>
      <div className='sidenav-item'>
              
              <div className='item-bg'>

            <div><FolderDeleteIcon className='folder-icon'/></div>
            <div>
              <div className='sidenav-item-desc'>
            <div className='sidenav-item-desc-title'>Deleted</div>
            <div className='sidenav-item-desc-gb'>0 GB Used</div>
              </div>

              </div>
            </div>
          </div>
        </div>
        <div className='side-nav-section'>SETTINGS</div>
        <div className='side-nav-section'>HELP</div>


        <div className='sidenav-footer'>
          You are currently using: <span className='sidenav-footer-bold'>110 GB</span> of storage 
        </div>
      </div>

    <div className='page'>

    <div className='header'>
      
      <div className='pagetitle'>Recent files</div>

      <div className='header-right'>

      <div className='search'>
          <input type="text" class="search-input" placeholder="Search">
          </input>
         
      </div>
      <div className='icons-header'>
      <div className='icon-noti'><NotificationsIcon sx={{fontSize:33}} /></div>
      <div className='icon-profile'>PW</div>
      </div>
      </div>




      </div>    


      <div className='main'>
        <div className='tablebg'>

        <table class="my-table">
  <thead>
    {/* <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
    </tr> */}
  </thead>
  <tbody>
    <tr>
      <td>
        <div className='firstcol'>
        <div><FolderIcon sx={{color:'gray'}}/></div>
        <div style={{marginLeft:20, fontSize:14}}>2018_02_26_ID_Renderings_Portfolio</div>
        </div></td>
      <td>
        <div className='seccolumn'>
        <div>icon</div>
        <div>me</div>
        </div>
      </td>
      <td><div className='date'>Mar 5, 2018</div></td>
      <td>-</td>
      <td><div className='table-icons'>icons</div></td>
    </tr>

  </tbody>
</table>

        </div>
      </div>

   </div>
    </div>
  );
}

export default App;
