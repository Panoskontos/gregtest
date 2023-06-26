import logo from './logo.svg';
import './App.css';
import FolderIcon from '@mui/icons-material/Folder';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
    <tr className='myrow'>
      <td>
        <div className='firstcol'>
        <div><FolderIcon sx={{color:'#5f6269'}}/></div>
        <div style={{marginLeft:20, fontSize:14}}>2018_02_26_ID_Renderings_Portfolio</div>
        </div></td>
      <td>
        <div className='seccolumn'>
        <div class="avatar">
  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar"/>
</div>
        <div style={{marginLeft:10}}>me</div>
        </div>
      </td>
      <td><div className='date'>Mar 5, 2018</div></td>
      <td><div className='space'>
        -
        </div>
        </td>
      <td><div className='table-icons'>
        <div className='icons-hidden'>
          <PersonAddIcon sx={{color:"#5f6269", fontSize:20}} />
          <FileDownloadIcon sx={{color:"#5f6269",fontSize:20 , marginLeft:'20px'}} />
          <DriveFileRenameOutlineIcon sx={{color:"#5f6269",fontSize:20, marginLeft:'20px'}}/>
          <StarBorderIcon sx={{color:"#5f6269",fontSize:20 , marginLeft:'20px'}} />
        </div>
        <div className='iconsnonhidden'>
          <MoreVertIcon sx={{fontSize:20}}/>
        </div>
        </div></td>
    </tr>
    <tr className='myrow'>
      <td>
        <div className='firstcol'>
        <div><FolderIcon sx={{color:'#5f6269'}}/></div>
        <div style={{marginLeft:20, fontSize:14}}>2018_02_26_mod_fordiagram</div>
        </div></td>
      <td>
        <div className='seccolumn'>
        <div class="avatar">
  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar"/>
</div>
        <div style={{marginLeft:10}}>me</div>
        </div>
      </td>
      <td><div className='date'>Mar 5, 2018</div></td>
      <td><div className='space'>
        -
        </div>
        </td>
      <td><div className='table-icons'>
        <div className='icons-hidden hidden'>
          <PersonAddIcon sx={{color:"#5f6269", fontSize:20}} />
          <FileDownloadIcon sx={{color:"#5f6269",fontSize:20 , marginLeft:'20px'}} />
          <DriveFileRenameOutlineIcon sx={{color:"#5f6269",fontSize:20, marginLeft:'20px'}}/>
          <StarBorderIcon sx={{color:"#5f6269",fontSize:20 , marginLeft:'20px'}} />
        </div>
        <div className='iconsnonhidden'>
          <MoreVertIcon sx={{fontSize:20}}/>
        </div>
        </div></td>
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
