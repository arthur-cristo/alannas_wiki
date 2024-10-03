import Gallery from "./Gallery";
import shuffle from "../utils/shuffle";
import { useState, useEffect } from "react";
import '../style/PhotosGallery.css';

const PhotoGallery = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const inData = [
      { src: 'img/photos/socio.png', title: 'Com o sócio' },
      { src: 'img/photos/alannao.png', title: 'Alannão' },
      { src: 'img/photos/aniversario_18.png', title: '18 anos!' },
      { src: 'img/photos/aniversario_de_dudu.png', title: 'Aniversário de Dudu' },
      { src: 'img/photos/batom.png', title: 'Passando batom' },
      { src: 'img/photos/beijo_epico.png', title: 'Beijo épico' },
      { src: 'img/photos/cadu_chupadu.png', title: 'Chupadinho!' },
      { src: 'img/photos/emo.png', title: 'Emo?' },
      { src: 'img/photos/foto_no_colegio.png', title: 'Cólegio' },
      { src: 'img/photos/gang_trans.png', title: 'Gang Trans' },
      { src: 'img/photos/laco_gaucho.png', title: 'Laço Gaúcho' },
      { src: 'img/photos/love.png', title: 'Love' },
      { src: 'img/photos/noise.png', title: 'Eu i Ela' },
      { src: 'img/photos/pensando.png', title: 'Pensando...' },
      { src: 'img/photos/show_do_jao.png', title: 'Show do Jão' },
      { src: 'img/photos/show_do_jao_com_amigas.png', title: 'Show do Jão acompanhada' },
      { src: 'img/photos/silly.png', title: 'Silly' },
      { src: 'img/photos/com_emily.png', title: 'Com Emily' }
    ];

    const updateData = () => {
      const newData = shuffle(inData).slice(0, 5);
      setData(newData);
    };

    updateData();

    const intervalId = setInterval(updateData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="photosCarousel">
      <div className="text-mobile">
        <h1>Fotos</h1>
        <p>Neste conjunto de fotos tiradas entre o ano de 2022 à 2024 (com exceção de uma) é perceptível sua beleza estonteante e fofura.</p>
      </div>
      <Gallery className="carousel"
        data={data}
      />
      <div className="text">
        <h1>Fotos</h1>
        <p>Neste conjunto de fotos tiradas entre o ano de 2022 à 2024 (com exceção de uma) é perceptível sua beleza estonteante e fofura.</p>
      </div>

    </div>
  );
}

export default PhotoGallery