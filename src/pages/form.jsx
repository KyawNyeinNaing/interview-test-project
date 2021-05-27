import styled from 'styled-components'
import { Row, Col } from "@/components/Grid"
import Layout from "@/components/Layout"
import { List, BulletList } from "@/components/List-style"
import { Input } from '@/components/Form'
import styles from '@/styles/Form.module.scss'
import { BsFillCircleFill } from 'react-icons/bs'
import { Button } from "@/components/Button"

const Form = () => {
  return (
    <Layout title='Form'>
      <div className={styles.form_wrapper_container}>
        <Row>
          <Col space='12' className={styles.form_header}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col className='pad-l0' md='4'>
            <div className={styles.form_body}>
              <div className={styles.form_img_wrapper}>
                <img src="/uploads/profile_img.jpg" alt="profile" />
              </div>
              <div className={styles.form_hr}>
                <span>Lorem Ipsum</span>
              </div>
              <p>Lorem ipsum dolor sit amet</p>
              <div className={styles.form_left_div}>
                <p>Lorem ipsum dolor</p>
                <h1>25%</h1>
              </div>
            </div>
          </Col>
          <Col className='pad-r0' md='8'>
            <div className={styles.form_body}>
              <List>
                <li className='active'>Tab One</li>
                <li>Tab Two</li>
                <li>Tab Three</li>
              </List>
              <div className={styles.form_tab_panel}>
                <BulletList className={styles.form_tab_center}>
                  <div className='list-circle'>
                    <BsFillCircleFill className='danger' />
                    <span>List One</span>
                  </div>
                  <div className='list-circle'>
                    <BsFillCircleFill className='success' />
                    <span>List Two</span>
                  </div>
                </BulletList>
              </div>

              <form className={styles.form}>
                <div className={styles.form_row}>
                  <BulletList className={styles.form_label}>
                    <div className='list-circle'>
                      <BsFillCircleFill className='danger' />
                      <span>label one</span>
                    </div>
                  </BulletList>
                  <Input type='text' placeholder='' />
                </div>

                <div className={styles.form_row}>
                  <BulletList className={styles.form_label}>
                    <div className='list-circle'>
                      <BsFillCircleFill className='danger' />
                      <span>label Two</span>
                    </div>
                  </BulletList>
                  <Input type='text' placeholder='' />
                </div>

                <div className={styles.form_row}>
                  <BulletList className={styles.form_label}>
                    <div className='list-circle'>
                      <BsFillCircleFill className='success' />
                      <span>label Three</span>
                    </div>
                  </BulletList>
                  <Input style={{ marginRight: 10 }} type='text' placeholder='' />
                  <Button className={styles.form_btn + ' ' + styles.form_btn_danger}>Button</Button>
                </div>

                <div className={styles.form_row}>
                  <BulletList className={styles.form_label} style={{ opacity: 0 }}>
                    <div className='list-circle'>
                      <BsFillCircleFill className='danger' />
                      <span>label Three</span>
                    </div>
                  </BulletList>
                  <label style={{ marginRight: 10 }}>label</label>
                  <Input style={{ marginRight: 10 }} type='text' placeholder='' />
                  <Button className={styles.form_btn + ' ' + styles.form_btn_success}>Button</Button>
                </div>

                <div className={styles.form_row}>
                  <BulletList className={styles.form_label}>
                    <div className='list-circle'>
                      <BsFillCircleFill className='danger' />
                      <span>label Four</span>
                    </div>
                  </BulletList>
                  <ButtonPrimary className={styles.form_btn + ' ' + styles.form_full_width}>btn 1</ButtonPrimary>
                  <ButtonSecondary className={styles.form_btn + ' ' + styles.form_full_width}>btn 2</ButtonSecondary>
                </div>

                <div className={styles.form_row}>
                  <BulletList className={styles.form_label}>
                    <div className='list-circle'>
                      <BsFillCircleFill className='success' />
                      <span>label Three</span>
                    </div>
                  </BulletList>
                  <Input as='select'>
                    <option value="">Option One</option>
                    <option value="">Option Two</option>
                    <option value="">Option Three</option>
                  </Input>
                </div>

                <Divider />
                <div className={styles.form_footer}>
                  <div className={styles.form_row}>
                    <Button className={styles.form_btn + ' ' + styles.form_btn_success}>Send</Button>
                    <Button className={styles.form_btn + ' ' + styles.form_btn_danger}>Cancel</Button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export default Form

const ButtonPrimary = styled(Button)`
  background-color: #007bff;
`

const ButtonSecondary = styled(Button)`
  color: #FF4B4B !important;
  border: 2px solid #FF4B4B;
  background-color: var(--background-white);
`


const Divider = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .37);
`