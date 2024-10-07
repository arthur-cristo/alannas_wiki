import Gallery from "./Gallery";
import shuffle from "../utils/shuffle";
import { useState, useEffect } from "react";
import '../style/PhotosGallery.css';

const PhotoGallery = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const inData = [
      { src: '/img/photos/socio.png', title: 'Com o sócio' },
      { src: '/img/photos/alannao.png', title: 'Alannão' },
      { src: '/img/photos/aniversario_18.png', title: '18 anos!' },
      { src: '/img/photos/aniversario_de_dudu.png', title: 'Aniversário de Dudu' },
      { src: '/img/photos/batom.png', title: 'Passando batom' },
      { src: '/img/photos/beijo_epico.png', title: 'Beijo épico' },
      { src: '/img/photos/cadu_chupadu.png', title: 'Chupadinho!' },
      { src: '/img/photos/emo.png', title: 'Emo?' },
      { src: '/img/photos/foto_no_colegio.png', title: 'Cólegio' },
      { src: '/img/photos/gang_trans.png', title: 'Gang Trans' },
      { src: '/img/photos/laco_gaucho.png', title: 'Laço Gaúcho' },
      { src: '/img/photos/love.png', title: 'Love' },
      { src: '/img/photos/noise.png', title: 'Eu i Ela' },
      { src: '/img/photos/pensando.png', title: 'Pensando...' },
      { src: '/img/photos/show_do_jao.png', title: 'Show do Jão' },
      { src: '/img/photos/show_do_jao_com_amigas.png', title: 'Show do Jão' },
      { src: '/img/photos/silly.png', title: 'Silly' },
      { src: '/img/photos/com_emily.png', title: 'Com Emily' },
      { src: '/img/photos/date_cinema.png', title: 'Date no cinema' },
      { src: '/img/photos/date_shopping.png', title: 'Date no shopping' },
      { src: '/img/photos/role_shopping.png', title: 'Rolê no shopping' },
      { src: '/img/photos/aniversario_16.png', title: 'Aniversário de 17' },
      { src: '/img/photos/aniversario_17.png', title: 'Aniversário de 16' },
      { src: '/img/photos/cosplay_combinando.png', title: 'Cosplay combinando' },
      { src: '/img/photos/com_a_familia.jpeg', title: 'Com a família' },
      { src: '/img/photos/academia.png', title: 'Ta pago' },
      { src: '/img/photos/colegio.png', title: 'A gente na escola' },
      { src: '/img/photos/no_colegio.png', title: 'A gente na escola' },
      { src: '/img/photos/dominos.png', title: 'Na Domino´s' },
      { src: '/img/photos/furry.png', title: '???' },
      { src: '/img/photos/linda.png', title: 'Você sendo linda' },
      { src: '/img/photos/sendo_linda.png', title: 'Você sendo linda' },
      { src: '/img/photos/sao_joao.png', title: 'Você junina' },
      { src: '/img/photos/passeio.png', title: 'Nós em Cachoeira' },
      { src: '/img/photos/no_clarao.png', title: 'flashbang.png' },
      { src: '/img/photos/com_sua_mae.png', title: 'Com sua mãe' }
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
        <p>Neste conjunto de fotos é perceptível sua beleza estonteante e fofura. Ao todo são 36 fotos, sendo 5 delas exibidas a cada 10 segundos de forma aleatória, espero que você consiga ver todas.
        </p>
      </div>
      <Gallery className="carousel"
        data={data}
      />
      <div className="text">
        <h1>Fotos</h1>
        <p>Neste conjunto de fotos é perceptível sua beleza estonteante e fofura. Ao todo são 36 fotos, sendo 5 delas exibidas a cada 10 segundos de forma aleatória, espero que você consiga ver todas. </p>
      </div>
    </div>
  );
}

export default PhotoGallery