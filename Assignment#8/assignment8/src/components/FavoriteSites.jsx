import '../style/FavSites.css'

function FavoriteSites(){
    return(
        <section className='center'>
        <h2> Favorite Sites </h2>
        <ul className='li'>
            <li> <a className='ul' href = "https://www.netflix.com/"> Netflix </a></li>
            <li> <a className='ul' href = "https://www.criterionchannel.com"> Criterion Channel</a></li>
            <li> <a className='ul' href = "https://www.hotstar.com/th"> Disney Hotstar </a></li>
            <li> <a className='ul' href = "https://www.hbogo.co.th"> HBO GO</a></li>
            <li> <a className='ul' href = "https://www.primevideo.com/"> Amazon Prime </a></li>
        </ul>
        </section>
    )
}

export default FavoriteSites