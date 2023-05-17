"use client"
import Image from 'next/image'
import { Container, Row, Col, NavLink } from 'react-bootstrap'
import { MainLogo } from '@/constants/svg'
import { Avatar, Dropdown, Space, Modal } from "antd"
import { HeartIcon, BellIcon, DropIcon, LocationIcon } from '../../constants/svg'
import AvatarImg from "../../assets/images/avatar/avatar.png"
import { useState } from 'react'
import SearchLocation from './location/SearchLocation'
import CustomModal from './CustomModal'

export default function MainHeader() {
  const [openlocation, setOpenlocation] = useState(false);


  return (
    <header>
      <Container>
        <Row>
          <Col lg={3} md={3}>
            <div className='logoListing'>
              <div className='main__Logo'>
                <NavLink><MainLogo /></NavLink>
              </div>

              <div className='item__ServiceLinking'>
                <ul>
                  <li><NavLink className='active'>Items</NavLink></li>
                  <li><NavLink>services </NavLink></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={5} md={5}>

          </Col>
          <Col lg={4} md={4} sm={12}>
            <div className='right__listing'>
              <BellIcon />

              <div className='avatar__image'>
                <Image src={AvatarImg} alt="avatar" className='user__image' />
              </div>
              <HeartIcon />
              <button className='button__whitebg' style={{ height: '35px' }}> + Create New</button>

              <Space size={9}>
                <LocationIcon />
                <p className='country__name'>Pakistan</p>
                <div onClick={() => setOpenlocation(prev => !prev)}>
                  <DropIcon />
                </div>
              </Space>
            </div>
          </Col>
        </Row>
      </Container>
      <CustomModal
        heading="Custom Location"
        open={openlocation}
        onCancel={() => setOpenlocation(false)}
      >
        <SearchLocation onCancel={() => setOpenlocation(false)} initialstep={0} />
      </CustomModal>
    </header>

  )
}
