import "./Footer-styles.css"

function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1><a href="/">Travera</a></h1>
                    <p>Choose your favorite destination</p>
                </div>
                <div>
                    
                    <a href="https://wa.me/7830127921"><i class="fa-brands fa-square-whatsapp"></i></a>
                    
                    <a href="https://www.instagram.com/sakshijha_____/"><i class="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">ChangeLog</a>
                    <a href="/">Status</a>
                    <a href="/">Licenses</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Communnity</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubeshooting</a>
                    <a href="/">ContactUs</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Licenses</a>
                </div>
            </div>
        </div>
    )
}

export default Footer