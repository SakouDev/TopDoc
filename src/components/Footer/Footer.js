import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <nav className='nav'>
                <div className='nav_left'>
                    <p className='footer_title'>Naviguer sur Topdoc</p>
                    <div className='footer_links'>
                        <a className='footer_link' href='#'>Je prends rendez-vous</a>
                        <a className='footer_link' href='#'>Je suis praticien</a>
                        <a className='footer_link' href='#'>J'ai besoin d'aide</a>
                    </div>
                </div>
                <div className='nav_right'>
                    <p className='footer_title'>Trouvez votre spécialiste</p>
                    <div className='footer_links_flex'>
                        <div className='footer_links'>
                            <a className='footer_link' href='#'>Chirurgien-dentiste</a>
                            <a className='footer_link' href='#'>Médecin généraliste</a>
                            <a className='footer_link' href='#'>Pédiatre</a>
                        </div>
                        <div className='footer_links'>
                            <a className='footer_link' href='#'>Gynécologue</a>
                            <a className='footer_link' href='#'>Ophtalmologue</a>
                            <a className='footer_link' href='#'>Dermatologue</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='footer_bottom'>
                <p className='mentions'>Mentions légales</p>
                <p className='mentions'>Tous droits réservés</p>
                <p className='mentions'>Topdoc</p>
            </div>
        </footer>
    )
}