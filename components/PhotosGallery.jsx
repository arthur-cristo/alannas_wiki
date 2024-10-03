import Carousel from "./Carousel";
import shuffle from "../utils/shuffle";
import { useState, useEffect } from "react";
import '../style/PhotosGallery.css';

const PhotoGallery = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const inData = [
      { src: './assets/img/socio.png', title: 'Com o sócio' },
      { src: './assets/img/alannao.png', title: 'Alannão' },
      { src: './assets/img/aniversario_18.png', title: '18 anos!' },
      { src: './assets/img/aniversario_de_dudu.png', title: 'Aniversário de Dudu' },
      { src: './assets/img/batom.png', title: 'Passando batom' },
      { src: './assets/img/beijo_epico.png', title: 'Beijo épico' },
      { src: './assets/img/cadu_chupadu.png', title: 'Chupadinho!' },
      { src: './assets/img/emo.png', title: 'Emo?' },
      { src: './assets/img/foto_no_colegio.png', title: 'Cólegio' },
      { src: './assets/img/gang_trans.png', title: 'Gang Trans' },
      { src: './assets/img/laco_gaucho.png', title: 'Laço Gaúcho' },
      { src: './assets/img/love.png', title: 'Love' },
      { src: './assets/img/noise.png', title: 'Eu i Ela' },
      { src: './assets/img/pensando.png', title: 'Pensando...' },
      { src: './assets/img/show_do_jao.png', title: 'Show do Jão' },
      { src: './assets/img/show_do_jao_com_amigas.png', title: 'Show do Jão acompanhada' },
      { src: './assets/img/silly.png', title: 'Silly' }
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
      <Carousel className="carousel"
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