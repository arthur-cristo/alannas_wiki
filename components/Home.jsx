import '../style/Home.css'

const Home = () => {
    return (
        <div className="container">
            <p>
                Alanna Araújo Vidal de Oliveira é a garota mais incrível do mundo nascida em 15 de setembro de 2006 em Salvador, Bahia.
                <br /><br />
                Ela é muito fofa, sempre se importando ao máximo com seus amigos e família. Graças ao seu lado artístico, ela consegue
                fazer lindos desenhos, esculturas de biscuit, papercrafts e animações.  Além disso, ela é muito boa jogando videogames,
                por exemplo, ela tem mais habilidade nos “Soulsborne” (jogos da empresa Fromsoftware que são considerados muito difíceis)
                que o seu namorado, que lhe apresentou ao gênero após ter jogado todos os jogos da saga.
                <br /><br />
                Com dezoito aninhos de vida, ela conseguiu a proeza ser perfeita, sendo dona de um sorriso incrível e rosto muito belo.
                Sendo também uma garota inteligente, no colégio Impacto, ela consegue ter ótimas notas, além de um 920 em sua primeira
                redação no ENEM como treineira. Também foi no colégio Impacto que ela conheceu seus amigos, Emily Gubert, João Eduardo
                Lima, Gabriel Prata, Daniella Reis, Sofia Guimarães, e, claro, seu namorado Arthur Cristo.
                <br /><br />
                Atualmente ela mora em Lauro de Freitas, Bahia, aonde vive com sua mãe Carla, avó Lúcia, e pet Love, e tem como objetivo
                se tornar uma arquiteta no futuro para planejar lindas casas e prédios.
            </p>
            <div className="card">
                <img src='./alannas_wiki/assets/img/first_card.png' alt="Alanna no Laço Gaúcho" />
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