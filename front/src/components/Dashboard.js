import React from 'react'
import { GrFormNext } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>

      <div id='dashboard'>

        <div className="slider">
          <ul>
            <Link to='/dashboard' className='list'>Approved <GrFormNext></GrFormNext></Link>
            <Link to='/underprocess' className='list'>Under Process <GrFormNext></GrFormNext></Link>
            <Link to='/notapproved' className='list'>Not Approved <GrFormNext></GrFormNext></Link>
            <Link to='/incomestatus' className='list'>Income Status <GrFormNext></GrFormNext></Link>
          </ul>
        </div>
        <div className="dashboardcenter">

          <div className="bar">
            <div className="input">
              <FiSearch className='icons'></FiSearch>
              <input type="text" />
            </div>

            <label for="sort">Sort by:</label>

            <select id="sort" className='sorttypes' >
              <option value="sort 1" className='sorttypes'>Areawise</option>
              <option value="sort 2" className='sorttypes'>Pincode</option>
              <option value="sort 3" className='sorttypes'>City</option>
              {/* <option value="sort 3" className='sorttypes'>State</option> */}

            </select>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr no.</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Mobile no.</th>
                <th scope="col">E-mail</th>
                <th scope="col">Category</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Pincode</th>
                <th scope="col">Damage cause</th>
                <th scope="col">Device Details</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bryce</td>
                <td>Langosh</td>
                <td>9585746952</td>
                <td>email@gmail.com</td>
                <td>Mobiles</td>
                <td>Gtu univercity</td>
                <td>Ahmedabad</td>
                <td>Gujarat</td>
                <td>396445</td>
                <td>DROPPING IT</td>
                <td className='address'>64MP Quad Camera ,...</td>


              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Bryce</td>
                <td>Langosh</td>
                <td>9585746952</td>
                <td>email@gmail.com</td>
                <td>Mobiles</td>
                <td>Gtu univercity</td>
                <td>Ahmedabad</td>
                <td>Gujarat</td>
                <td>396445</td>
                <td>DROPPING IT</td>
                <td className='address'>64MP Quad Camera ,...</td>


              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Bryce</td>
                <td>Langosh</td>
                <td>9585746952</td>
                <td>email@gmail.com</td>
                <td>Mobiles</td>
                <td>Gtu univercity</td>
                <td>Ahmedabad</td>
                <td>Gujarat</td>
                <td>396445</td>
                <td>DROPPING IT</td>
                <td className='address'>64MP Quad Camera ,...</td>


              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Bryce</td>
                <td>Langosh</td>
                <td>9585746952</td>
                <td>email@gmail.com</td>
                <td>Mobiles</td>
                <td>Gtu univercity</td>
                <td>Ahmedabad</td>
                <td>Gujarat</td>
                <td>396445</td>
                <td>DROPPING IT</td>
                <td className='address'>64MP Quad Camera ,...</td>


              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Bryce</td>
                <td>Langosh</td>
                <td>9585746952</td>
                <td>email@gmail.com</td>
                <td>Mobiles</td>
                <td>Gtu univercity</td>
                <td>Ahmedabad</td>
                <td>Gujarat</td>
                <td>396445</td>
                <td>DROPPING IT</td>
                <td className='address'>64MP Quad Camera ,...</td>


              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Bryce</td>
                <td>Langosh</td>
                <td>9585746952</td>
                <td>email@gmail.com</td>
                <td>Mobiles</td>
                <td>Gtu univercity</td>
                <td>Ahmedabad</td>
                <td>Gujarat</td>
                <td>396445</td>
                <td>DROPPING IT</td>
                <td className='address'>64MP Quad Camera ,...</td>


              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard