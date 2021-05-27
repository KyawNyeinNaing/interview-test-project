import Head from 'next/head'
import styled from 'styled-components'
import styles from '@/styles/Home.module.scss'
import { HiUserCircle, HiLockClosed } from 'react-icons/hi'
import { MdCancel } from 'react-icons/md'
import { InputGroup, Input, Label } from '@/components/Form'
import { Button } from '@/components/Button'
import Layout from '@/components/Layout'

const LoginWrapper = styled.div`
  height: 100vh;
  background-image: url("${props => props?.image && props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Home = () => {
  return (
    <Layout title='Resgister'>
      <LoginWrapper image='/uploads/background.jpg'>
        <div className={styles.register_form_container}>
          <div className={styles.register_form_wrapper}>
            <div className={styles.register_form_logo}>
              <h1>LOGO</h1>
            </div>
            <div className={styles.register_form_input}>
              <div className={styles.register_form_icon_wrap}>
                <HiUserCircle />
              </div>
              <input className={styles.input} placeholder='User Name' />
              <MdCancel color='#4b4b4b' />
            </div>
            <div className={styles.register_form_input}>
              <div className={styles.register_form_icon_wrap}>
                <HiLockClosed />
              </div>
              <input className={styles.input} placeholder='Password' />
              <MdCancel color='#4b4b4b' />
            </div>
            <div className={styles.register_form_footer}>
              <div className={styles.register_form_footer_flex}>
                <div className={styles.register_form_footer_left}>
                  <InputGroup className={`custom-check ${styles.custom_check}`}>
                    <Input type="checkbox" name="check" id='rememberMe' />
                    <Label htmlFor='rememberMe'>
                      <span>Remember Me</span>
                    </Label>
                  </InputGroup>
                  <p className={styles.register_form_forgot}>Forgot Your Password?</p>
                  <p className={styles.click_here}>
                    <span>Click Here</span>
                  </p>
                </div>
                <div className={styles.register_form_footer_right}>
                  <Button className='btn btn-login'>Login</Button>
                  <Button className='btn btn-fb-login'>Login</Button>
                  <Button className='btn btn-gm-login'>Login</Button>
                </div>
              </div>
              <Button>Create an Account</Button>
            </div>
          </div>
        </div>
      </LoginWrapper>
    </Layout>
  )
}

export default Home