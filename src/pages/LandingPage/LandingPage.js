import React from 'react'
import './LandingPage.css'
import { FiMapPin } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'
import { IoMedkitOutline } from 'react-icons/io5'
import { BiTrendingUp, BiHappy, BiTime } from 'react-icons/bi'
import { Images } from '../../components/Images'

export default function LandingPage() {
  return (
    <>
      <section className='landing_page'>
        <form className='search_container'>
          <img className='cat_svg' src={Images.Cat} alt='cat' />
          <h2 className='search_title'>Je recherche ...</h2>
          <div className='search_inputs'>
            <p className='search_txt'>Un</p>
            <select className='search_select'>
              <option className='search_option'>Kinésithérapeute</option>
              <option className='search_option'>Médecin généraliste</option>
              <option className='search_option'>Dentiste</option>
            </select>
            <p className='search_txt'>à</p>
            <div className='search_location'>
              <FiMapPin className='search_pin' />
              <input className='search_input' type='text' placeholder='Code postal' maxLength={5} />
            </div>
          </div>
          <p className='search_title'>Ou...</p>
          <div className='search_global'>
            <BsSearch className='search_pin' />
            <input className='search_input all' placeholder='Nom, établissement, lieu...' />
            <button className='search_btn'>Rechercher</button>
          </div>
        </form>
        <img className='doctor_bg' src={Images.DoctorBg} alt='background' />
        <img className='wave' src={Images.Wave} alt='wave' />
      </section>
      <section className='middle_section'>
        <div className='our_services'>
          <p className='topdoc'>TOPDOC</p>
          <p className='services'>nos services</p>
        </div>
        <ul className='func_list'>
          <li className='func'>
            <p className='func_title'>Prise de rendez-vous rapide avec notre nouveau service</p>
            <img className='func_img' src={Images.FirstFunction} alt='functionnality' />
          </li>
          <li className='func'>
            <p className='func_title'>Des professionnels vérifiés par nos soins pour répondre à vos besoins</p>
            <img className='func_img' src={Images.SecondFunction} alt='functionnality' />
          </li>
          <li className='func'>
            <p className='func_title'>Une aide pour les personnes ne pouvant se déplacer</p>
            <img className='func_img' src={Images.ThirdFunction} alt='functionnality' />
          </li>
        </ul>
        <p className='more'>Et beaucoup d'autres...</p>
        <ul className='func_list_bottom'>
          <li className='func_bottom'>
            <p className='func_title'>Découvrez des professionnels de santé près de chez vous</p>
            <img className='func_img' src={Images.FourthFunction} alt='functionnality' />
          </li>
          <li className='func_bottom'>
            <p className='func_title'>Gérez vos rendez-vous sur tous vos appareils de façon synchronisée</p>
            <img className='func_img' src={Images.FifthFunction} alt='functionnality' />
          </li>
          <li className='func_bottom'>
            <p className='func_title'>Contrôlez vos recherches et rendez-vous en un clic</p>
            <img className='func_img' src={Images.SixthFunction} alt='functionnality' />
          </li>
          <li className='func_bottom'>
            <p className='func_title'>Organisez votre emploi du temps rapidement et simplement</p>
            <img className='func_img' src={Images.SeventhFunction} alt='functionnality' />
          </li>
        </ul>
      </section>
      <section className='bottom_section'>
        <div className='doctors_container'>
          <div className='doctors_container_left'>
            <h2 className='doctors_title'>Vous êtes praticien ?</h2>
            <p className='doctors_subtitle'>Topdoc c'est ...</p>
            <ul className='pros_list'>
              <li className='pro'>
                <BiTime className='pro_icon' />
                <p className='pro_txt'>Un gain de temps grâce à une prise de rendez-vous intuitive</p>
              </li>
              <li className='pro'>
                <BiTrendingUp className='pro_icon' />
                <p className='pro_txt'>Une occasion de développer l’activité de votre cabinet grâce à une visibilité en ligne</p>
              </li>
              <li className='pro'>
                <BiHappy className='pro_icon' />
                <p className='pro_txt'>Un confort de travail au quotidien en réduisant les appels téléphoniques</p>
              </li>
              <li className='pro'>
                <IoMedkitOutline className='pro_icon' />
                <p className='pro_txt'>Un meilleur accès aux soins pour vos patients</p>
              </li>
            </ul>
          </div>
          <div className='doctors_container_right'>
            <img className='doctors_img' src={Images.PhoneValid} alt='pros' />
          </div>
        </div>
      </section>
    </>
  )
}