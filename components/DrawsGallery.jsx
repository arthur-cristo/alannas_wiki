import MyCarousel from "./MyCarousel"
import '../style/DrawsGallery.css'
import shuffle from "../utils/shuffle";

const DrawsGallery = () => {
    const inData = [
        { src: '/img/draws/kleber.jpeg', title: 'kleber' },
        { src: '/img/draws/arthur_pc.jpeg', title: 'arthur_pc' },
        { src: '/img/draws/ed_fma.jpeg', title: 'ed_fma' },
        { src: '/img/draws/guaxinins.jpeg', title: 'guaxinins' },
        { src: '/img/draws/coração.jpeg', title: 'coração' },
        { src: '/img/draws/nois_1ano.jpeg', title: 'nois_1ano' },
        { src: '/img/draws/nois_sp.jpeg', title: 'nois_sp' },
        { src: '/img/draws/colagem.jpeg', title: 'colagem' },
        { src: '/img/draws/eu_denji.jpeg', title: 'eu_denji' },
        { src: '/img/draws/eu_moletom.jpeg', title: 'eu_moletom' },
        { src: '/img/draws/uranity.jpg', title: 'uranity' },
        { src: '/img/draws/fofo.jpeg', title: 'fofo' },
    ];

    return (
        <div className="draws-galley-container">
            <h1>Galeria de Desenhos</h1>
            <MyCarousel data={shuffle(inData)} />
        </div>
    )
}

export default DrawsGallery