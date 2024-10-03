import '../style/Home.css'

const Home = () => {
    return (
        <div className="container">
            <p>Alanna Araújo Vidal de Oliveira é a garota mais incrível do mundo nascida em 15 de setembro de 2006 em Salvador.
                <br /><br />
                Com dezoito aninhos de vida, ela conseguiu a proeza ser perfeita, sendo dona de um sorriso incrível e rosto muito belo. Sendo também uma garota inteligente, no colégio Impacto, ela consegue ter ótimas notas, além de um 920 em sua primeira redação no ENEM como treineira. Também foi no colégio Impacto que ela conheceu seus amigos, Emily Goubert, João Eduardo Lima, Gabriel Prata, Daniella Reis, Sofia Guimarães, e, claro, seu namorado Arthur Cristo.
                <br /><br />
                Atualmente ela mora em Lauro de Freitas, Bahia, aonde vive com sua mãe Carla, avó Lúcia, e pet Love, e tem como objetivo se tornar uma arquiteta no futuro para planejar lindas casas e prédios.
            </p>
            <div className="card">
                <img src="\public\first_card_resized.png" alt="Alanna no Laço Gaúcho" />
                <table>
                    <tbody>
                        <tr>
                            <th>Nome completo</th>
                            <td>Alanna Araújo Vidal de Oliveira</td>
                        </tr>
                        <tr>
                            <th>Nascimento</th>
                            <td>15/09/2006</td>
                        </tr>
                        <tr>
                            <th>Ocupação</th>
                            <td>Garota mais incrível do mundo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home