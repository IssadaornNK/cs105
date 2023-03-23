import "../style/Gallery.css"
function Gallery(){
    return(
        <section>
            <h2>Gallery</h2>
            <ul className="body">
                <li><img className='body' src="assets/pic1.jpeg" alt="Cutie"></img></li>
                <li><img className='body' src="assets/pic2.jpeg" alt="Cutiee"></img></li>
                <li><img className='body' src="assets/pic3.jpeg" alt="Cutieee"></img></li>
            </ul>
        </section>
    )
}

export default Gallery