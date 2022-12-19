import './Login.css'
import { Images } from '../../components/Images'
import { AiOutlineRight } from 'react-icons/ai'
import { useState } from 'react'

export default function Login() {

    const [switchToSignup, setSwitchToSignup] = useState(false)

    return (
        <>
            <section className='section'>
                <img className='left_img' src={Images.Login} alt='connexion' />
                {!switchToSignup ?
                    <form className='login_form'>
                        <img className='cat_svg' src={Images.Cat} alt='cat' />
                        <div className='form_titles'>
                            <h3 className='form_title active'>Connexion</h3>
                            <button className='form_title inactive' onClick={() => setSwitchToSignup(true)}>Inscription</button>
                        </div>
                        <div className='inputs'>
                            <p className='mail_label'>Adresse mail</p>
                            <input className='mail_input' type='email' placeholder='exemple@mail.fr' />
                            <p className='password_label'>Mot de passe</p>
                            <input className='password_input' type='password' placeholder='**********' />
                        </div>
                        <button className='form_submit'>Se connecter <AiOutlineRight className='submit_icon' /></button>
                    </form>
                    :
                    <form className='signup_form'>
                        <img className='cat_svg' src={Images.Cat} alt='cat' />
                        <div className='form_titles'>
                            <button className='form_title inactive' onClick={() => setSwitchToSignup(false)}>Connexion</button>
                            <h3 className='form_title'>Inscription</h3>
                        </div>
                        <div className='inputs'>
                            <p className='mail_label'>Adresse mail</p>
                            <input className='mail_input' type='email' placeholder='exemple@mail.fr' />
                            <p className='password_label'>Mot de passe</p>
                            <input className='password_input' type='password' placeholder='**********' />
                            <p className='password_label'>Confirmation du mot de passe</p>
                            <input className='password_input' type='password' placeholder='**********' />
                        </div>
                        <button className='form_submit'>S'inscrire <AiOutlineRight className='submit_icon' /></button>
                    </form>
                }
            </section>
        </>
    )
}
