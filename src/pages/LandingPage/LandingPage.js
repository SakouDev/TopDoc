import React from 'react'
import './LandingPage.css'
import { FiMapPin } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'
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
              <input className='search_input' placeholder='Code postal' />
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
            <img className='func_img' src={Images.FirstFunction} alt='notre nouveau service' />
          </li>
          <li className='func'>
            <p className='func_title'>Des professionnels vérifiés par nos soins pour répondre à vos besoins</p>
            <img className='func_img' src={Images.SecondFunction} alt='notre nouveau service' />
          </li>
          <li className='func'>
            <p className='func_title'>Une aide pour les personnes ne pouvant se déplacer</p>
            <img className='func_img' src={Images.ThirdFunction} alt='notre nouveau service' />
          </li>
        </ul>
        <p className='more'>Et beaucoup d'autres...</p>
        <ul className='func_list_bottom'>
          <li className='func_bottom'>
            <p className='func_title'>Découvrez des professionnels de santé près de chez vous</p>
            <img className='func_img' src={Images.SecondFunction} alt='notre nouveau service' />
          </li>
          <li className='func_bottom'>
            <p className='func_title'>Gérez vos rendez-vous sur tous vos appareils de façon synchronisée</p>
            <img className='func_img' src={Images.SecondFunction} alt='notre nouveau service' />
          </li>
          <li className='func_bottom'>
            <p className='func_title'>Contrôlez vos recherches et rendez-vous en un clic</p>
            <img className='func_img' src={Images.SecondFunction} alt='notre nouveau service' />
          </li>
        </ul>
      </section>
    </>
  )
}